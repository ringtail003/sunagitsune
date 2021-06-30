import * as Rx from "rxjs";
import { Scale } from "src/app/models/canvas/scale";

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

  drawTo(context: CanvasRenderingContext2D, scale: Scale): void {
    context.drawImage(this.#element, 0, 0, scale.width, scale.height);
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
