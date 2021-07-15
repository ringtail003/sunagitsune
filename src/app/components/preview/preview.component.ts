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
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { ConfigService } from "src/app/services/config.service";
import { EffectorService } from "src/app/services/effectors/effector.service";

interface Preview {
  canvas: Canvas;
  effect: Effect | null;
}

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("preEffectContainer")
  preEffectContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("postEffectContainer")
  postEffectContainer!: ElementRef<HTMLDivElement>;

  filename = "sunagitsune.png";

  #subscription!: Rx.Subscription;
  #ready$ = new Rx.Subject<void>();

  preEffect?: Preview;
  postEffect?: Preview;

  constructor(
    private effector: EffectorService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.renderPreEffect();

    this.#subscription = this.config
      .watch({ debounce: 1000 })
      .subscribe((effect) => {
        this.renderPostEffect(effect);
      });
  }

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.#ready$.next();
  }

  private renderPreEffect(): void {
    this.load().subscribe((canvas) => {
      this.removeFrom(this.preEffectContainer);
      this.appendTo(this.preEffectContainer, canvas);
      this.preEffect = { canvas, effect: null };
    });
  }

  private renderPostEffect(effect: Effect): void {
    this.load(effect).subscribe((canvas) => {
      this.removeFrom(this.postEffectContainer);
      this.appendTo(this.postEffectContainer, canvas);
      this.postEffect = { canvas, effect };
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
    return canvasFactory
      .fromUrl(`assets/${this.filename}`)
      .load()
      .pipe(
        mergeMap((source) => {
          return effect ? this.effector.effect(source, effect) : Rx.of(source);
        })
      );
  }
}
