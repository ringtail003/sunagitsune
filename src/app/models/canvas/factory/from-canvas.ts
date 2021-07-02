import { Canvas } from "src/app/models/canvas/canvas";
import { mime } from "src/app/models/mime/factory";
import { Scale } from "src/app/models/scale";

export const fromCanvas = (canvas: Canvas, scale: Scale): Canvas => {
  return new Canvas(canvas.url, {
    mime: mime.fromCanvas(canvas),
    scale,
    disposer: () => {},
  });
};
