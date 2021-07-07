import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvas } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { Plugin } from "src/app/services/effectors/plugins/interface";

export const rotate: Plugin = (source: Canvas, effect: Effect) => {
  return canvas
    .fromCanvas(source, {
      width: source.scale.height,
      height: source.scale.width,
    })
    .load()
    .pipe(
      map((rotated) => {
        const { width, height } = rotated.scale;

        rotated.context.save();
        rotated.context.translate(width, height / width);
        rotated.context.rotate(Math.PI / 2);
        rotated.draw({
          width: height,
          height: width,
        });
        rotated.context.restore();

        return rotated;
      })
    );
};
