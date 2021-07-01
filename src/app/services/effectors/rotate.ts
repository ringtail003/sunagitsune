import * as Rx from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { Effect } from "src/app/models/effect";

export const rotate = (
  canvas: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return canvas.load().pipe(
    mergeMap(() => {
      return new Canvas(canvas.source, {
        width: canvas.scale.height,
        height: canvas.scale.width,
      }).load();
    }),
    map((rotated) => {
      const { width, height } = rotated.scale;

      rotated.context.save();
      rotated.context.translate(width, height / width);
      rotated.context.rotate(Math.PI / 2);
      rotated.drawWithScale({
        width: height,
        height: width,
      });
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
