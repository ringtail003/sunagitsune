import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { Plugin } from "src/app/services/effectors/plugins/interface";

interface Context {
  offset: number;
  blur: number;
  color: string;
  margin: number;
}

export const shadow: Plugin = (source: Canvas, effect: Effect) => {
  if (!effect.shadowEffect.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  const context: Context = {
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
      width: source.scale.width + context.margin,
      height: source.scale.height + context.margin,
    })
    .load()
    .pipe(
      map((canvas) => {
        canvas.context.clearRect(0, 0, canvas.scale.width, canvas.scale.height);

        canvas.context.shadowColor = context.color;
        canvas.context.shadowBlur = context.blur;
        canvas.context.shadowOffsetX = context.offset;
        canvas.context.shadowOffsetY = context.offset;

        canvas.draw({
          width: canvas.scale.width - context.margin,
          height: canvas.scale.height - context.margin,
        });

        return canvas;
      })
    );
};
