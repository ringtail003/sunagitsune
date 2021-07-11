import * as Rx from "rxjs";
import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";

function borderInside(
  source: Canvas,
  effect: { width: number; color: string }
): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((canvas) => {
        canvas.context.beginPath();
        canvas.context.strokeStyle = effect.color || "#000000";
        canvas.context.lineWidth = effect.width || 0;
        canvas.context.strokeRect(
          effect.width / 2,
          effect.width / 2,
          canvas.context.canvas.width - effect.width,
          canvas.context.canvas.height - effect.width
        );
        canvas.context.closePath();

        return canvas;
      })
    );
}

function borderOutside(
  source: Canvas,
  effect: { width: number; color: string }
): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.width + effect.width * 2,
      height: source.scale.height + effect.width * 2,
    })
    .load()
    .pipe(
      map((canvas) => {
        canvas.fill(canvas.scale, effect.color);

        canvas.draw(
          {
            width: canvas.scale.width - effect.width * 2,
            height: canvas.scale.height - effect.width * 2,
          },
          {
            left: effect.width,
            top: effect.width,
          }
        );

        return canvas;
      })
    );
}

function border(source: Canvas, effect: Effect): Rx.Observable<Canvas> {
  if (!effect.borderEffect.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  switch (effect.borderEffect.type) {
    case "inside":
      return borderInside(source, {
        width: effect.borderEffect.width!,
        color: effect.borderEffect.color!,
      });
    case "outside":
      return borderOutside(source, {
        width: effect.borderEffect.width!,
        color: effect.borderEffect.color!,
      });
    default:
      throw new Error(`Unknown border type "${effect.borderEffect.type}".`);
  }
}

export { border };
