import * as Rx from "rxjs";
import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { PluginEffector } from "src/app/services/effectors/plugins/interface";

interface Context {
  width: number;
  color: string;
}

function borderInside(source: Canvas, context: Context): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((canvas) => {
        canvas.context.beginPath();
        canvas.context.strokeStyle = context.color;
        canvas.context.lineWidth = context.width;
        canvas.context.strokeRect(
          context.width / 2,
          context.width / 2,
          canvas.context.canvas.width - context.width,
          canvas.context.canvas.height - context.width
        );
        canvas.context.closePath();

        return canvas;
      })
    );
}

function borderOutside(
  source: Canvas,
  context: Context
): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.width + context.width * 2,
      height: source.scale.height + context.width * 2,
    })
    .load()
    .pipe(
      map((canvas) => {
        canvas.fill(canvas.scale, context.color);

        canvas.draw(
          {
            width: canvas.scale.width - context.width * 2,
            height: canvas.scale.height - context.width * 2,
          },
          {
            left: context.width,
            top: context.width,
          }
        );

        return canvas;
      })
    );
}

const border: PluginEffector = (
  source: Canvas,
  effect: Effect
): Rx.Observable<Canvas> => {
  if (!effect.border.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  const context = effect.border.getContext();

  switch (context.type) {
    case "inside":
      return borderInside(source, context);
    case "outside":
      return borderOutside(source, context);
    default:
      throw new Error(`Unknown border type "${context.type}".`);
  }
};

export { border };
