import * as Rx from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { Effect } from "src/app/models/effect";

export const border = (
  source: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return source.load().pipe(
    mergeMap((canvas) => {
      return new Canvas(canvas.source).load();
    }),
    map((canvas) => {
      canvas.context.beginPath();
      canvas.context.strokeStyle = "#f00";
      canvas.context.lineWidth = 10;
      canvas.context.strokeRect(
        5,
        5,
        canvas.context.canvas.width - 10,
        canvas.context.canvas.height - 10
      );
      canvas.context.closePath();

      return canvas;
    })
  );

  // const subject$ = new Rx.Subject<string>();
  // const canvas = document.createElement("canvas");
  // const image = new Image();

  // image.src = url;

  // image.onload = () => {
  //   canvas.width = image.width;
  //   canvas.height = image.height;

  //   const context = canvas.getContext("2d");

  //   context!.drawImage(image, 0, 0);

  //   context!.beginPath();
  //   context!.strokeStyle = "#f00";
  //   context!.lineWidth = 10;
  //   context!.strokeRect(
  //     5,
  //     5,
  //     context!.canvas.width - 10,
  //     context!.canvas.height - 10
  //   );
  //   context!.closePath();

  //   subject$.next(canvas.toDataURL(mime, 1));
  // };

  // return subject$.asObservable();
};
