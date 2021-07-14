import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { Plugin } from "src/app/services/effectors/plugins/interface";

export const shadow: Plugin = (source: Canvas, effect: Effect) => {
  if (!effect.shadowEffect.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  const value = {
    offset: effect.shadowEffect.offset || 1,
    blur: effect.shadowEffect.blur || 0,
    color: effect.shadowEffect.color || "#000000",
    margin: Math.max(
      effect.shadowEffect.offset || 1,
      (effect.shadowEffect.blur || 0) * 1.7
    ),
  };

  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.width + value.margin,
      height: source.scale.height + value.margin,
    })
    .load()
    .pipe(
      map((canvas) => {
        canvas.context.clearRect(0, 0, canvas.scale.width, canvas.scale.height);

        canvas.context.shadowColor = value.color;
        canvas.context.shadowBlur = value.blur;
        canvas.context.shadowOffsetX = value.offset;
        canvas.context.shadowOffsetY = value.offset;

        canvas.draw({
          width: canvas.scale.width - value.margin,
          height: canvas.scale.height - value.margin,
        });

        return canvas;
      })
    );
};
