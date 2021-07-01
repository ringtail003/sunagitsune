import * as Rx from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas";
import { ScaledCanvas } from "src/app/models/canvas/scaled-canvas";
import { Effect } from "src/app/models/effect";

export const resize = (
  canvas: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return canvas.load().pipe(
    mergeMap(() => {
      return new ScaledCanvas(canvas.source, {
        width: canvas.width * 0.5,
        height: canvas.height * 0.5,
      }).load();
    })
  );
};

// const subject$ = new Rx.Subject<string>();
// const canvas = document.createElement("canvas");
// const image = new Image();

// image.src = url;

// image.onload = () => {
//   canvas.width = image.width * 0.5; // 1080
//   canvas.height = image.height * 0.5; // 688

//   const context = canvas.getContext("2d");

//   context!.drawImage(image, 0, 0, image.width * 0.5, image.height * 0.5);

//   subject$.next(canvas.toDataURL(mime, 1));
// };

// return subject$.asObservable();
