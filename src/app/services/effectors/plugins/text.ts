import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { textPluginEffect } from "src/app/models/effect/plugin/text-effect";
import { TextType } from "src/app/models/effect/types/text-type";
import { PluginEffector } from "src/app/services/effectors/plugins/interface";

type PosX = "left" | "center" | "right";
type PosY = "top" | "middle" | "bottom";

function detectPosX(type: TextType): PosX {
  // prettier-ignore
  switch (type) {
    case "topLeft": return "left";
    case "topCenter": return "center";
    case "topRight": return "right";
    case "center": return "center";
    case "bottomLeft": return "left";
    case "bottomCenter": return "center";
    case "bottomRight": return "right";
    default:
      throw new Error(`Unknown type "${type}".`);
  }
}

function detectPosY(type: TextType): PosY {
  // prettier-ignore
  switch (type) {
    case "topLeft": return "top";
    case "topCenter": return "top";
    case "topRight": return "top";
    case "center": return "middle";
    case "bottomLeft": return "bottom";
    case "bottomCenter": return "bottom";
    case "bottomRight": return "bottom";
    default:
      throw new Error(`Unknown type "${type}".`);
  }
}

function detectLeft(canvas: Canvas, offset: number) {
  return {
    left: offset,
    center: canvas.scale.width / 2,
    right: canvas.scale.width - offset,
  };
}

function detectTop(canvas: Canvas, offset: number) {
  return {
    top: offset,
    middle: canvas.scale.height / 2,
    bottom: canvas.scale.height - offset,
  };
}

function fillText(
  canvas: Canvas,
  effect: textPluginEffect,
  options: { posX: PosX; posY: PosY; offset: number; color: string }
): void {
  const context = effect.getContext();

  canvas.context.font = `${context.size}pt ${context.font}`;
  canvas.context.fillStyle = options.color;
  canvas.context.textAlign = options.posX;
  canvas.context.textBaseline = options.posY;

  canvas.context.fillText(
    context.caption,
    detectLeft(canvas, context.offset)[options.posX] + options.offset,
    detectTop(canvas, context.offset)[options.posY] + options.offset
  );
}

export const text: PluginEffector = (source: Canvas, effect: Effect) => {
  if (!effect.text.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  return canvasFactory
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((canvas) => {
        const context = effect.text.getContext();
        const posX = detectPosX(context.type);
        const posY = detectPosY(context.type);

        if (context.stroke) {
          fillText(canvas, effect.text, {
            posX,
            posY,
            offset: context.stroke!.offset,
            color: context.stroke!.color,
          });
        }

        fillText(canvas, effect.text, {
          posX,
          posY,
          offset: 0,
          color: context.color,
        });

        return canvas;
      })
    );
};
