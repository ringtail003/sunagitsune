import * as Rx from "rxjs";
import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect";

export const text = (source: Canvas, effect: Effect): Rx.Observable<Canvas> => {
  return canvas
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((loaded) => {
        const context = loaded.context;
        context.font = "40pt Arial";
        context.fillStyle = "red";
        context.fillText("foobar", 100, 200);
        context.save();

        return loaded;
      })
    );
};

// export const text = (url: string, mime: string): Rx.Observable<string> => {
//   const subject$ = new Rx.Subject<string>();
//   const canvas = document.createElement("canvas");
//   const image = new Image();

//   image.src = url;

//   image.onload = () => {
//     canvas.width = image.width;
//     canvas.height = image.height;

//     const context = canvas.getContext("2d");

//     context!.drawImage(image, 0, 0);

//     context!.font = "40pt Arial";
//     context!.fillStyle = "red";
//     context!.fillText("foobar", 100, 200);

//     context!.restore();

//     subject$.next(canvas.toDataURL(mime, 1));
//   };

//   return subject$.asObservable();
// };
