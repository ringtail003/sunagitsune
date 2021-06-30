import { Injectable } from "@angular/core";
import * as Rx from "rxjs";
import { Canvas } from "src/app/models/canvas";

@Injectable({ providedIn: "root" })
export class PreviewService {
  provideRaw(imageSrc: string): Canvas {
    return new Canvas(imageSrc);
  }
}
