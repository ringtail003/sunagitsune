import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as Rx from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { ConfigService } from "src/app/services/config.service";
import { EffectorService } from "src/app/services/effectors/effector.service";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("preEffect") preEffect!: ElementRef<HTMLDivElement>;
  @ViewChild("postEffect") postEffect!: ElementRef<HTMLDivElement>;

  #subscription!: Rx.Subscription;
  #ready$ = new Rx.Subject<void>();

  constructor(
    private effector: EffectorService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.renderPreEffect();

    this.#subscription = this.config
      .watch()
      .subscribe((effect) => this.renderPostEffect(effect));
  }

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.#ready$.next();
  }

  private renderPreEffect(): void {
    this.load().subscribe((source) => {
      this.removeFrom(this.preEffect);
      this.appendTo(this.preEffect, source);
    });
  }

  private renderPostEffect(effect: Effect): void {
    this.load(effect).subscribe((source) => {
      this.removeFrom(this.postEffect);
      this.appendTo(this.postEffect, source);
    });
  }

  private appendTo(container: ElementRef, source: Canvas): void {
    container.nativeElement.appendChild(source.ref);
  }

  private removeFrom(container: ElementRef<HTMLDivElement>): void {
    Array.from(container.nativeElement.children).forEach((child) =>
      container.nativeElement.removeChild(child)
    );
  }

  private load(effect?: Effect) {
    return canvas
      .fromUrl("assets/preview.png")
      .load()
      .pipe(
        mergeMap((source) => {
          return effect ? this.effector.effect(source, effect) : Rx.of(source);
        })
      );
  }
}
