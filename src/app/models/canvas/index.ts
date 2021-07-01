import * as Rx from "rxjs";
import { map, tap } from "rxjs/operators";
import { Drawing } from "src/app/models/canvas/drawing";
import { Mime } from "src/app/models/canvas/mime/interface";
import { MimeFromFile } from "src/app/models/canvas/mime/mime-from-file";
import { MimeFromPath } from "src/app/models/canvas/mime/mime-from-path";

export abstract class Canvas {
  protected element: HTMLCanvasElement;
  readonly drawing: Drawing;
  protected mime: Mime;

  dispose: () => void;

  constructor(public readonly source: string | File) {
    this.element = document.createElement("canvas");

    if (typeof source === "string") {
      this.drawing = new Drawing(source);
      this.mime = new MimeFromPath(source);
      this.dispose = () => {};
    } else {
      const url = URL.createObjectURL(source);
      this.drawing = new Drawing(url);
      this.mime = new MimeFromFile(source);
      this.dispose = () => URL.revokeObjectURL(url);
    }
  }

  load(): Rx.Observable<this> {
    return this.drawing.load().pipe(
      tap({
        next: () => this.draw(),
      }),
      map(() => this)
    );
  }

  abstract draw(): void;

  get context(): CanvasRenderingContext2D {
    if (!this.drawing.hasImage) {
      throw new Error("Canvas has not image yet.");
    }

    return this.element.getContext("2d")!;
  }

  get url(): string {
    return this.element.toDataURL(this.mime.detect(), 1);
  }

  get width(): number {
    return this.element.width;
  }

  get height(): number {
    return this.element.height;
  }
}
