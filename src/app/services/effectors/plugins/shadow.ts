import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { PluginEffector } from "src/app/services/effectors/plugins/interface";

interface Context {
  offset: number;
  blur: number;
  color: string;
  margin: number;
}

export const shadow: PluginEffector = (source: Canvas, effect: Effect) => {
  if (!effect.shadow.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  const context = effect.shadow.getContext();
  const margin = Math.max(
    effect.shadow.offset || 1,
    (effect.shadow.blur || 0) * 1.7
  );

  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.width + margin,
      height: source.scale.height + margin,
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
          width: canvas.scale.width - margin,
          height: canvas.scale.height - margin,
        });

        return canvas;
      })
    );
};
