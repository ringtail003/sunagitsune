import { Injectable } from "@angular/core";
import * as Rx from "rxjs";

@Injectable({ providedIn: "root" })
export class PreviewService {
  provideRawImage(): Rx.Observable<HTMLCanvasElement> {
    const canvas = document.createElement("canvas");
    const image = new Image();
    const subject$ = new Rx.Subject<HTMLCanvasElement>();

    image.onload = () => {};
  }
}
