import * as Rx from "rxjs";
import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";

export const border = (
  source: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  const config = {
    hasEffect: effect.borderConfig.hasEffect(),
    color: effect.borderConfig.color!,
    width: effect.borderConfig.width || 0,
  };

  return canvas
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((loaded) => {
        if (!config.hasEffect) {
          return loaded;
        }

        loaded.context.beginPath();
        loaded.context.strokeStyle = config.color;
        loaded.context.lineWidth = config.width;
        loaded.context.strokeRect(
          config.width / 2,
          config.width / 2,
          loaded.context.canvas.width - config.width,
          loaded.context.canvas.height - config.width
        );
        loaded.context.closePath();

        return loaded;
      })
    );
};
