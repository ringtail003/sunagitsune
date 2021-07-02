import * as Rx from "rxjs";
import { map, tap } from "rxjs/operators";
import { Drawing } from "src/app/models/canvas/drawing";
import { Mime } from "src/app/models/canvas/mime/interface";
import { MimeFromFile } from "src/app/models/canvas/mime/mime-from-file";
import { MimeFromPath } from "src/app/models/canvas/mime/mime-from-path";
import { Scale } from "src/app/models/canvas/scale";

export class Canvas {
  #element: HTMLCanvasElement;
  #drawing: Drawing;
  #mime: Mime;

  dispose: () => void;

  constructor(public readonly source: string | File, scale?: Scale) {
    this.#element = document.createElement("canvas");
    this.#element.width = scale?.width || 0;
    this.#element.height = scale?.height || 0;

    if (typeof source === "string") {
      this.#drawing = new Drawing(source);
      this.#mime = new MimeFromPath(source);
      this.dispose = () => {};
    } else {
      const url = URL.createObjectURL(source);
      this.#drawing = new Drawing(url);
      this.#mime = new MimeFromFile(source);
      this.dispose = () => URL.revokeObjectURL(url);
    }
  }

  load(): Rx.Observable<this> {
    return this.#drawing.load().pipe(
      tap({
        next: () => this.resize(),
      }),
      map(() => this)
    );
  }

  resize(): void {
    const scale = {
      width: this.scale.width || this.#drawing.scale.width,
      height: this.scale.height || this.#drawing.scale.height,
    };

    this.#element.width = scale.width;
    this.#element.height = scale.height;

    this.draw(scale);
  }

  draw(scale: Scale): void {
    this.#drawing.drawTo(this.context, scale);
  }

  get context(): CanvasRenderingContext2D {
    if (!this.#drawing.hasImage) {
      throw new Error("Canvas has not image yet.");
    }

    return this.#element.getContext("2d")!;
  }

  get url(): string {
    return this.#element.toDataURL(this.#mime.detect(), 1);
  }

  get scale(): Scale {
    return {
      width: this.#element.width,
      height: this.#element.height,
    };
  }
}
