import * as Rx from "rxjs";
import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { PluginEffector } from "src/app/services/effectors/plugins/interface";

function rotate90(source: Canvas): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.height,
      height: source.scale.width,
    })
    .load()
    .pipe(
      map((canvas) => {
        const { width, height } = canvas.scale;

        canvas.context.translate(width / 2, height / 2);
        canvas.context.rotate(Math.PI / 2);
        canvas.context.translate((height / 2) * -1, (width / 2) * -1);

        canvas.draw({
          width: height,
          height: width,
        });

        return canvas;
      })
    );
}

function rotate180(source: Canvas): Rx.Observable<Canvas> {
  return source.load().pipe(
    map((canvas) => {
      const { width, height } = canvas.scale;

      canvas.context.translate(width / 2, height / 2);
      canvas.context.rotate(Math.PI);
      canvas.context.translate((-1 * width) / 2, (-1 * height) / 2);

      canvas.draw({
        width,
        height,
      });

      return canvas;
    })
  );
}

function rotate270(source: Canvas): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.height,
      height: source.scale.width,
    })
    .load()
    .pipe(
      map((canvas) => {
        const { width, height } = canvas.scale;

        canvas.context.translate(width / 2, height / 2);
        canvas.context.rotate((Math.PI / 2) * 3);
        canvas.context.translate((height / 2) * -1, (width / 2) * -1);

        canvas.draw({
          width: height,
          height: width,
        });

        return canvas;
      })
    );
}

const rotate: PluginEffector = (source: Canvas, effect: Effect) => {
  if (!effect.rotate.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  const context = effect.rotate.getContext();

  switch (context.type) {
    case "rotate90":
      return rotate90(source);
    case "rotate180":
      return rotate180(source);
    case "rotate270":
      return rotate270(source);
    default:
      throw new Error(`Unknown rotate type "${context.type}".`);
  }
};

export { rotate };
