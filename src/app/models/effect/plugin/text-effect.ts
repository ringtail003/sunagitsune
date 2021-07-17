import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { Plugin } from "src/app/models/effect/plugin/plugin";
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
  textFont: null,
  textColor: null,
  textOffset: null,
  textStrokeColor: null,
  textStrokeWidth: null,
  textType: "none" as TextType,
};

export class textPluginEffect implements Plugin {
  #caption: string | null;
  #size: number | null;
  #font: string | null;
  #color: string | null;
  #offset: number | null;
  #strokeColor: string | null;
  #strokeWidth: number | null;
  #type: TextType | null;
  #typeList: { type: TextType; label: string }[];

  constructor(metadata: EffectMetadata) {
    this.#caption = asString(metadata.textCaption, null);
    this.#size = asNumber(metadata.textSize, null);
    this.#font = asString(metadata.textFont, null);
    this.#color = asString(metadata.textColor, null);
    this.#offset = asNumber(metadata.textOffset, null);
    this.#strokeColor = asString(metadata.textStrokeColor, null);
    this.#strokeWidth = asNumber(metadata.textStrokeWidth, null);
    this.#type = asType(metadata.textType, textTypeList, null);
    this.#typeList = Object.keys(textTypeConfig).map((key) => {
      return {
        type: key as TextType,
        label: textTypeConfig[key as TextType] as string,
      };
    });
  }

  get caption(): string | null {
    return this.#caption || null;
  }

  get size(): number | null {
    return this.#size || null;
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

  get strokeWidth(): number | null {
    return this.#strokeWidth || null;
  }

  get type(): TextType | null {
    return this.#type || null;
  }

  get typeList(): { type: TextType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      textCaption: this.#caption,
      textSize: this.#size,
      textFont: this.#font,
      textColor: this.#color,
      textOffset: this.#offset,
      textStrokeColor: this.#strokeColor,
      textStrokeWidth: this.#strokeWidth,
      textType: this.#type === "none" ? null : this.#type,
    };
  }

  resetMetadata() {
    return textResetMetadata;
  }

  hasEffect() {
    return this.#type !== "none";
  }

  hasStroke(): boolean {
    return !!(this.#strokeColor || this.#strokeWidth);
  }

  hasError() {
    return !!Object.values(this.getErrors()).find((error) => !!error);
  }

  getErrors() {
    return {
      caption: this.assertCaption(),
      font: this.assertFont(),
      size: this.assertSize(),
      color: this.assertColor(),
      offset: this.assertOffset(),
      strokeColor: this.assertStrokeColor(),
      strokeWidth: this.assertStrokeWidth(),
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
    if (this.hasEffect() && this.#strokeWidth && !this.#strokeColor) {
      return `strokeColorを入力してください`;
    }

    return null;
  }

  private assertStrokeWidth(): string | null {
    if (this.hasEffect() && this.#strokeColor && !this.#strokeWidth) {
      return `strokeWidthを入力してください`;
    }

    return null;
  }

  private assertType(): string | null {
    return null;
  }
}
