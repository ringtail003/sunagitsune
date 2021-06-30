import * as Rx from "rxjs";
import { map, tap } from "rxjs/operators";
import { Drawing } from "src/app/models/canvas/drawing";

export abstract class Canvas {
  protected element: HTMLCanvasElement;
  protected drawing: Drawing;

  constructor(imageSrc: string, private mime: string) {
    this.element = document.createElement("canvas");
    this.drawing = new Drawing(imageSrc);
  }

  load(): Rx.Observable<this> {
    return this.drawing.load().pipe(
      tap({ next: () => this.draw() }),
      map(() => this)
    );
  }

  protected abstract draw(): void;

  get context(): CanvasRenderingContext2D {
    if (!this.drawing.hasImage) {
      throw new Error("Canvas has not image yet.");
    }

    return this.element.getContext("2d")!;
  }

  get url(): string {
    return this.element.toDataURL(this.mime, 1);
  }
}
