import { Canvas } from "src/app/models/canvas/canvas";
import { mime } from "src/app/models/mime/factory";

export const fromUrl = (url: string): Canvas => {
  return new Canvas(url, {
    mime: mime.fromUrl(url),
    scale: { width: 0, height: 0 },
    disposer: () => {},
  });
};
