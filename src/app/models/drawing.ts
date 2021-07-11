import * as Rx from "rxjs";
import { Position } from "src/app/models/position";
import { Scale } from "src/app/models/scale";

export class Drawing {
  #element: HTMLImageElement;
  #hasImage = false;

  constructor(private imageSrc: string) {
    this.#element = new Image();
  }

  load(): Rx.Observable<void> {
    const subject$ = new Rx.Subject<void>();

    this.#element.src = this.imageSrc;
    this.#element.onload = () => {
      this.#hasImage = true;
      subject$.next();
    };

    return subject$;
  }

  drawTo(
    context: CanvasRenderingContext2D,
    scale: Scale,
    position: Position
  ): void {
    context.drawImage(
      this.#element,
      position.left,
      position.top,
      scale.width,
      scale.height
    );
  }

  fill(context: CanvasRenderingContext2D, scale: Scale, color: string): void {
    context.fillStyle = color;
    context.fillRect(0, 0, scale.width, scale.height);
  }

  get hasImage(): boolean {
    return this.#hasImage;
  }

  get scale(): Scale {
    return {
      width: this.#element.width,
      height: this.#element.height,
    };
  }
}
