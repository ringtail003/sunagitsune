import { Canvas } from "src/app/models/canvas";
import { Scale } from "src/app/models/canvas/scale";

export class ScaledCanvas extends Canvas {
  constructor(imageSrc: string, mime: string, private scale: Scale) {
    super(imageSrc, mime);
  }

  protected draw(): void {
    this.element.width = this.scale.width;
    this.element.height = this.scale.height;

    this.drawing.drawTo(this.context, this.scale);
  }
}
