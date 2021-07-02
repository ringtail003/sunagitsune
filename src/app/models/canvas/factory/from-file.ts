import { Canvas } from "src/app/models/canvas/canvas";
import { mime } from "src/app/models/mime/factory";

export const fromFile = (file: File): Canvas => {
  const url = URL.createObjectURL(file);

  return new Canvas(url, {
    mime: mime.fromFile(file),
    scale: { width: 0, height: 0 },
    disposer: () => URL.revokeObjectURL(url),
  });
};
