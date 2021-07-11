import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { Plugin } from "src/app/services/effectors/plugins/interface";

export const text: Plugin = (source: Canvas, effect: Effect) => {
  return canvasFactory
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((loaded) => {
        const context = loaded.context;
        context.font = "40pt Arial";
        context.fillStyle = "red";
        context.fillText("foobar", 100, 200);
        context.save();

        return loaded;
      })
    );
};
