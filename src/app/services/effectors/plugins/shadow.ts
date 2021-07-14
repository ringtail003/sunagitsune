import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { Plugin } from "src/app/services/effectors/plugins/interface";

export const shadow: Plugin = (source: Canvas, effect: Effect) => {
  return canvasFactory
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
        context.shadowOffsetX = 20;
        context.shadowOffsetY = 20;
        context.save();

        resized.draw({
          width: resized.scale.width - 30,
          height: resized.scale.height - 30,
        });

        return resized;
      })
    );
};
