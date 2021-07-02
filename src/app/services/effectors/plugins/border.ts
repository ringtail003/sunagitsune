import * as Rx from "rxjs";
import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect";

export const border = (
  source: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  return canvas
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((loaded) => {
        loaded.context.beginPath();
        loaded.context.strokeStyle = "#f00";
        loaded.context.lineWidth = 10;
        loaded.context.strokeRect(
          5,
          5,
          loaded.context.canvas.width - 10,
          loaded.context.canvas.height - 10
        );
        loaded.context.closePath();

        return loaded;
      })
    );
};
