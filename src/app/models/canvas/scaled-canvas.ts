import { Canvas } from "src/app/models/canvas";
import { Scale } from "src/app/models/canvas/scale";

export class ScaledCanvas extends Canvas {
  constructor(source: string | File, private scale: Scale) {
    super(source);
  }

  draw(): void {
    this.element.width = this.scale.width;
    this.element.height = this.scale.height;

    this.drawing.drawTo(this.context, this.scale);
  }
}
