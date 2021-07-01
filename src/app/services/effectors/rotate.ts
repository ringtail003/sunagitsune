import * as Rx from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas";
import { ScaledCanvas } from "src/app/models/canvas/scaled-canvas";
import { Effect } from "src/app/models/effect";

export const rotate = (
  canvas: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return canvas.load().pipe(
    mergeMap(() => {
      return new ScaledCanvas(canvas.source, {
        width: canvas.height,
        height: canvas.width,
      }).load();
    }),
    map((rotated) => {
      rotated.context.save();
      rotated.context.translate(canvas.height, canvas.width / canvas.height);
      rotated.context.rotate(Math.PI / 2);
      rotated.context.drawImage(
        rotated.drawing.source,
        0,
        0,
        rotated.height,
        rotated.width
      );
      rotated.context.restore();

      return rotated;
    })
  );
};

// const subject$ = new Rx.Subject<string>();
// const canvas = document.createElement("canvas");
// const image = new Image();

// image.src = url;

// image.onload = () => {
//   canvas.width = image.width;
//   canvas.height = image.height;

//   const context = canvas.getContext("2d");

//   context!.drawImage(image, 0, 0);

//   const [width, height] = [canvas.width, canvas.height];
//   canvas.width = height;
//   canvas.height = width;

//   context!.save();
//   context!.translate(height, width / height);
//   context!.rotate(Math.PI / 2);

//   context!.drawImage(image, 0, 0, canvas.height, canvas.width);
//   context!.restore();

//   subject$.next(canvas.toDataURL(mime, 1));
// };

// return subject$.asObservable();
