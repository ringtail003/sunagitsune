import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { PluginEffect } from "src/app/models/effect/plugin/plugin";
import {
  TextType,
  textTypeConfig,
  textTypeList,
} from "src/app/models/effect/types/text-type";
import { asNumber } from "src/app/utils/as-type/as-number";
import { asString } from "src/app/utils/as-type/as-string";
import { asType } from "src/app/utils/as-type/as-type";

export const textResetMetadata = {
  textCaption: null,
  textSize: null,
  textAlpha: null,
  textFont: null,
  textColor: null,
  textOffset: null,
  textStrokeColor: null,
  textStrokeOffset: null,
  textType: "none" as TextType,
};

export class textPluginEffect implements PluginEffect {
  #type: TextType;
  #caption: string | null;
  #size: number | null;
  #alpha: number | null;
  #font: string | null;
  #color: string | null;
  #offset: number | null;
  #strokeColor: string | null;
  #strokeOffset: number | null;
  #typeList: { type: TextType; label: string }[];

  readonly name = "text";

  constructor(metadata: EffectMetadata) {
    this.#type = asType(metadata.textType, textTypeList, "none");
    this.#caption = asString(metadata.textCaption, null);
    this.#size = asNumber(metadata.textSize, null);
    this.#alpha = asNumber(metadata.textAlpha, null);
    this.#font = asString(metadata.textFont, null);
    this.#color = asString(metadata.textColor, null);
    this.#offset = asNumber(metadata.textOffset, null);
    this.#strokeColor = asString(metadata.textStrokeColor, null);
    this.#strokeOffset = asNumber(metadata.textStrokeOffset, null);
    this.#typeList = Object.keys(textTypeConfig).map((key) => {
      return {
        type: key as TextType,
        label: textTypeConfig[key as TextType] as string,
      };
    });
  }

  get type(): TextType {
    return this.#type;
  }

  get caption(): string | null {
    return this.#caption || null;
  }

  get size(): number | null {
    return this.#size || null;
  }

  get alpha(): number | null {
    return this.#alpha || null;
  }

  get font(): string | null {
    return this.#font || null;
  }

  get color(): string | null {
    return this.#color || null;
  }

  get offset(): number | null {
    return this.#offset || null;
  }

  get strokeColor(): string | null {
    return this.#strokeColor || null;
  }

  get strokeOffset(): number | null {
    return this.#strokeOffset || null;
  }

  get typeList(): { type: TextType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    if (!this.hasEffect()) {
      return {};
    }

    return {
      textType: this.#type,
      textCaption: this.assertCaption() ? null : this.#caption,
      textSize: this.assertSize() ? null : this.#size,
      textAlpha: this.assertAlpha() ? null : this.#alpha,
      textFont: this.assertFont() ? null : this.#font,
      textColor: this.assertColor() ? null : this.#color,
      textOffset: this.assertOffset() ? null : this.#offset,
      textStrokeColor: this.assertStrokeColor() ? null : this.#strokeColor,
      textStrokeOffset: this.assertStrokeOffset() ? null : this.#strokeOffset,
    };
  }

  getResetMetadata() {
    return textResetMetadata;
  }

  getContext(): {
    type: TextType;
    caption: string;
    size: number;
    alpha: number;
    font: string;
    color: string;
    offset: number;
    stroke: {
      color: string;
      offset: number;
    } | null;
  } {
    return {
      type: this.#type,
      caption: this.#caption || "Sample text",
      size: this.#size || 20,
      alpha: this.#alpha || 100,
      font: this.#font || "Arial Black",
      color: this.#color || "#000000",
      offset: this.#offset || 0,
      stroke: this.hasStroke()
        ? {
            color: this.#strokeColor || "red",
            offset: this.#strokeOffset || 2,
          }
        : null,
    };
  }

  hasEffect() {
    return this.#type !== "none";
  }

  hasStroke(): boolean {
    return !!(this.#strokeColor || this.#strokeOffset);
  }

  hasError() {
    return !!Object.values(this.getErrors()).find((error) => !!error);
  }

  getErrors() {
    return {
      caption: this.assertCaption(),
      font: this.assertFont(),
      size: this.assertSize(),
      alpha: this.assertAlpha(),
      color: this.assertColor(),
      offset: this.assertOffset(),
      strokeColor: this.assertStrokeColor(),
      strokeOffset: this.assertStrokeOffset(),
      type: this.assertType(),
    };
  }

  private assertCaption(): string | null {
    if (this.hasEffect() && !this.#caption) {
      return `captionを入力してください`;
    }

    return null;
  }

  private assertSize(): string | null {
    if (this.hasEffect() && !this.#size) {
      return `sizeを入力してください`;
    }

    return null;
  }

  private assertAlpha(): string | null {
    return null;
  }

  private assertColor(): string | null {
    if (this.hasEffect() && !this.#color) {
      return `colorを選択してください`;
    }

    return null;
  }

  private assertOffset(): string | null {
    return null;
  }

  private assertFont(): string | null {
    if (this.hasEffect() && !this.#font) {
      return `fontを入力してください`;
    }

    return null;
  }

  private assertStrokeColor(): string | null {
    if (this.hasEffect() && this.#strokeOffset && !this.#strokeColor) {
      return `strokeColorを入力してください`;
    }

    return null;
  }

  private assertStrokeOffset(): string | null {
    if (this.hasEffect() && this.#strokeColor && !this.#strokeOffset) {
      return `strokeOffsetを入力してください`;
    }

    return null;
  }

  private assertType(): string | null {
    return null;
  }
}
