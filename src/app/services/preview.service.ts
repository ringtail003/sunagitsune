import { Injectable } from "@angular/core";
import { Canvas } from "src/app/models/canvas/canvas";

@Injectable({ providedIn: "root" })
export class PreviewService {
  provideRaw(imageSrc: string): Canvas {
    return new Canvas(imageSrc);
  }
}
