import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { Plugin } from "src/app/services/effectors/plugins/interface";

export const resize: Plugin = (source: Canvas, effect: Effect) => {
  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.width * 0.5,
      height: source.scale.height * 0.5,
    })
    .load();
};
