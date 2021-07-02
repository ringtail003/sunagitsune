import * as Rx from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { Effect } from "src/app/models/effect";

export const shadow = (
  canvas: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return canvas.load().pipe(
    mergeMap((source) => {
      return new Canvas(source.source, {
        width: source.scale.width + 30,
        height: source.scale.height + 30,
      }).load();
    }),
    map((source) => {
      source.context.shadowColor = "green";
      source.context.shadowBlur = 10;
      source.context.shadowOffsetX = 15;
      source.context.shadowOffsetY = 15;

      return source;
    })
  );
};

// export const shadow = (url: string, mime: string): Rx.Observable<string> => {
//   const subject$ = new Rx.Subject<string>();
//   const canvas = document.createElement("canvas");
//   const image = new Image();

//   image.src = url;

//   image.onload = () => {
//     canvas.width = image.width + 30;
//     canvas.height = image.height + 30;

//     const context = canvas.getContext("2d");

//     context!.shadowColor = "green";
//     context!.shadowBlur = 10;
//     context!.shadowOffsetX = 15;
//     context!.shadowOffsetY = 15;

//     context!.drawImage(image, 0, 0);
//     context!.restore();

//     subject$.next(canvas.toDataURL(mime, 1));
//   };

//   return subject$.asObservable();
// };
