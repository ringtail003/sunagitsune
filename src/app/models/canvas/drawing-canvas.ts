import { Canvas } from "src/app/models/canvas";

export class DrawingCanvas extends Canvas {
  constructor(imageSrc: string, mime: string) {
    super(imageSrc, mime);
  }

  protected draw(): void {
    this.element.width = this.drawing.scale.width;
    this.element.height = this.drawing.scale.height;

    this.drawing.drawTo(this.context, this.drawing.scale);
  }
}
