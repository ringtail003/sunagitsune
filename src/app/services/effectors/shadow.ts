import * as Rx from "rxjs";
import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect";

export const shadow = (
  source: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return canvas
    .fromCanvas(source, {
      width: source.scale.width + 30,
      height: source.scale.height + 30,
    })
    .load()
    .pipe(
      map((resized) => {
        resized.context.clearRect(
          0,
          0,
          resized.scale.width,
          resized.scale.height
        );

        const context = resized.context;

        context.shadowColor = "green";
        context.shadowBlur = 10;
        context.shadowOffsetX = 15;
        context.shadowOffsetY = 15;
        context.save();

        resized.draw({
          width: resized.scale.width - 30,
          height: resized.scale.height - 30,
        });

        return resized;
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
