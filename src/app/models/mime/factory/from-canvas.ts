import { Canvas } from "src/app/models/canvas/canvas";
import { Mime } from "src/app/models/mime";

export const fromCanvas = (canvas: Canvas): Mime => {
  const mime =
    canvas.url.match(/data:(?<mime>[a-z]+\/[a-z]+);/u)?.groups?.mime || null;

  if (!mime) {
    throw new Error(
      `Cannot detect mime from file. "${canvas.url.substr(0, 20)}..."`
    );
  }

  return mime as Mime;
};
