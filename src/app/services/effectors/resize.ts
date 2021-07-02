import * as Rx from "rxjs";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect";

export const resize = (
  source: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return canvas
    .fromCanvas(source, {
      width: source.scale.width * 0.5,
      height: source.scale.height * 0.5,
    })
    .load();

  // return source.load().pipe(
  //   mergeMap((canvas) => {
  //     return new Canvas(canvas.source, {
  //       width: canvas.scale.width * 0.5,
  //       height: canvas.scale.height * 0.5,
  //     }).load();
  //   })
  // );
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
