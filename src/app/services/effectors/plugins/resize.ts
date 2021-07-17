import * as Rx from "rxjs";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { PluginEffector } from "src/app/services/effectors/plugins/interface";

function resizeByRatio(source: Canvas, ratio: number): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, {
      width: source.scale.width * ratio,
      height: source.scale.height * ratio,
    })
    .load();
}

function resizeBySize(
  source: Canvas,
  width: number,
  height: number
): Rx.Observable<Canvas> {
  return canvasFactory
    .fromCanvas(source, {
      width,
      height,
    })
    .load();
}

export const resize: PluginEffector = (source: Canvas, effect: Effect) => {
  if (!effect.resize.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  const context = effect.resize.getContext();

  switch (context.type) {
    case "width":
      return resizeByRatio(source, context.width / source.scale.width);
    case "height":
      return resizeByRatio(source, context.height / source.scale.height);
    case "both":
      return resizeBySize(source, context.width, context.height);

    default:
      throw new Error(`Unknown resize type "${context.type}".`);
  }
};
