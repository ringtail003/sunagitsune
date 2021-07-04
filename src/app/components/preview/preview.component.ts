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
import { mergeMap } from "rxjs/operators";
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

  private elements: HTMLCanvasElement[] = [];

  constructor(private effector: EffectorService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.elements.forEach((element) => element.remove());
  }

  ngAfterViewInit(): void {
    this.load({ withEffect: false }).subscribe((source) =>
      this.preEffect?.nativeElement.appendChild<HTMLCanvasElement>(source.ref)
    );

    this.load({ withEffect: true }).subscribe((source) =>
      this.postEffect?.nativeElement.appendChild<HTMLCanvasElement>(source.ref)
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
