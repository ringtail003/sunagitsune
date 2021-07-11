import * as Rx from "rxjs";
import { map, tap } from "rxjs/operators";
import { Drawing } from "src/app/models/drawing";
import { Mime } from "src/app/models/mime";
import { Position } from "src/app/models/position";
import { Scale } from "src/app/models/scale";

export class Canvas {
  #element: HTMLCanvasElement;
  #drawing: Drawing;
  #mime: Mime;
  #disposer: () => void;

  constructor(
    source: string,
    options: {
      mime: Mime;
      scale: Scale;
      disposer: () => void;
    }
  ) {
    this.#element = document.createElement("canvas");
    this.#element.width = options.scale.width;
    this.#element.height = options.scale.height;
    this.#drawing = new Drawing(source);
    this.#mime = options.mime;
    this.#disposer = options.disposer;
  }

  load(): Rx.Observable<this> {
    return this.#drawing.load().pipe(
      tap({
        next: () => this.resize(),
      }),
      // TODO: dispose
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

  draw(scale: Scale, position?: Position): void {
    this.#drawing.drawTo(this.context, scale, position || { left: 0, top: 0 });
  }

  fill(scale: Scale, color: string): void {
    this.#drawing.fill(this.context, scale, color);
  }

  get context(): CanvasRenderingContext2D {
    if (!this.#drawing.hasImage) {
      throw new Error("Canvas has not image yet.");
    }

    return this.#element.getContext("2d")!;
  }

  get url(): string {
    return this.#element.toDataURL(this.#mime, 1);
  }

  get scale(): Scale {
    return {
      width: this.#element.width,
      height: this.#element.height,
    };
  }

  get ref(): HTMLCanvasElement {
    return this.#element;
  }
}
