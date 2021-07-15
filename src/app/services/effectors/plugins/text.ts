import { map } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { canvasFactory } from "src/app/models/canvas/factory";
import { Effect } from "src/app/models/effect/effect";
import { TextType } from "src/app/models/effect/types/text-type";
import { Plugin } from "src/app/services/effectors/plugins/interface";

type PosX = "left" | "center" | "right";
type PosY = "top" | "middle" | "bottom";

interface Context {
  posX: PosX;
  posY: PosY;
  caption: string;
  font: string;
  size: number;
  color: string;
  offset: number;
  stroke: {
    color: string;
    width: number;
  } | null;
}

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

function detectFillContext(canvas: Canvas, context: Context) {
  return {
    font: `${context.size}pt ${context.font}`,
    fillStyle: context.color,
    textAlign: context.posX,
    textBaseLine: context.posY,
    left: detectLeft(canvas, context.offset)[context.posX],
    top: detectTop(canvas, context.offset)[context.posY],
  };
}

export const text: Plugin = (source: Canvas, effect: Effect) => {
  if (!effect.textEffect.hasEffect()) {
    return canvasFactory.fromCanvas(source, source.scale).load();
  }

  return canvasFactory
    .fromCanvas(source, source.scale)
    .load()
    .pipe(
      map((canvas) => {
        const context: Context = {
          posX: detectPosX(effect.textEffect.type!),
          posY: detectPosY(effect.textEffect.type!),
          caption: effect.textEffect.caption || "YYYY-MM-DD",
          font: effect.textEffect.font || "Arial",
          size: effect.textEffect.size || 15,
          color: effect.textEffect.color || "#000000",
          offset: effect.textEffect.offset || 0,
          stroke: effect.textEffect.hasStroke()
            ? {
                color: effect.textEffect.strokeColor || "#ffffff",
                width: effect.textEffect.strokeWidth || 0,
              }
            : null,
        };

        const fill = detectFillContext(canvas, context);

        canvas.context.font = fill.font;
        canvas.context.fillStyle = fill.fillStyle;
        canvas.context.textAlign = fill.textAlign;
        canvas.context.textBaseline = fill.textBaseLine;
        canvas.context.fillText(context.caption, fill.left, fill.top);

        if (context.stroke) {
          canvas.context.strokeStyle = context.stroke.color;
          canvas.context.lineWidth = context.stroke.width;
          canvas.context.strokeText(context.caption, fill.left, fill.top);
        }

        canvas.context.save();

        return canvas;
      })
    );
};
