import * as Rx from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { Effect } from "src/app/models/effect";

export const rotate = (
  source: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return source.load().pipe(
    mergeMap((canvas) => {
      return new Canvas(canvas.source, {
        width: canvas.scale.height,
        height: canvas.scale.width,
      }).load();
    }),
    map((canvas) => {
      const { width, height } = canvas.scale;

      canvas.context.save();
      canvas.context.translate(width, height / width);
      canvas.context.rotate(Math.PI / 2);
      canvas.draw({
        width: height,
        height: width,
      });
      canvas.context.restore();

      return canvas;
    }),
    mergeMap((canvas) => {
      return new Canvas(canvas.source).load();
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
