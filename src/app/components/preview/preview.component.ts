import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as Rx from "rxjs";
import { delay, mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect";
import { EffectorService } from "src/app/services/effectors/effector.service";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() effect!: Effect;
  @ViewChild("preEffect") preEffect!: ElementRef<HTMLDivElement>;
  @ViewChild("postEffect") postEffect!: ElementRef<HTMLDivElement>;

  constructor(private effector: EffectorService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  ngAfterViewInit(): void {
    this.load({ withEffect: false }).subscribe((source) => {
      this.removeFrom(this.preEffect);
      this.appendTo(this.preEffect, source);
    });

    this.load({ withEffect: true })
      .pipe(delay(1500))
      .subscribe((source) => {
        this.removeFrom(this.postEffect);
        this.appendTo(this.postEffect, source);
      });
  }

  remove() {
    this.removeFrom(this.preEffect);
    this.removeFrom(this.postEffect);
  }

  private appendTo(container: ElementRef, source: Canvas): void {
    container.nativeElement.appendChild(source.ref);
  }

  private removeFrom(container: ElementRef<HTMLDivElement>): void {
    Array.from(container.nativeElement.children).forEach((child) =>
      container.nativeElement.removeChild(child)
    );
  }

  private load(options: { withEffect: boolean }) {
    return canvas
      .fromUrl("assets/preview.png")
      .load()
      .pipe(
        mergeMap((source) => {
          return options.withEffect
            ? this.effector.effect(source, this.effect)
            : Rx.of(source);
        })
      );
  }
}
