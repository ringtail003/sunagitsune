import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { Plugin } from "src/app/models/effect/plugin/plugin";
import {
  ResizeType,
  resizeTypeConfig,
  resizeTypeList,
} from "src/app/models/effect/types/resize-type";
import { asNumber } from "src/app/utils/as-type/as-number";
import { asType } from "src/app/utils/as-type/as-type";

export const resizeResetMetadata = {
  resizeType: "none" as ResizeType,
  resizeWidth: null,
  resizeHeight: null,
};

export class ResizePluginEffect implements Plugin {
  #width: number | null;
  #height: number | null;
  #type: ResizeType | null;
  #typeList: { selection: ResizeType; label: string }[];

  constructor(metadata: EffectMetadata) {
    this.#width = asNumber(metadata.resizeWidth, null);
    this.#height = asNumber(metadata.resizeHeight, null);
    this.#type = asType(metadata.resizeType, resizeTypeList, null);
    this.#typeList = Object.keys(resizeTypeConfig).map((key) => {
      return {
        selection: key as ResizeType,
        label: resizeTypeConfig[key as ResizeType] as string,
      };
    });
  }

  get width(): number | null {
    return this.requiredWidth ? this.#width || null : null;
  }

  get requiredWidth(): boolean {
    return this.#type === "width" || this.#type === "both";
  }

  get height(): number | null {
    return this.requiredHeight ? this.#height || null : null;
  }

  get requiredHeight(): boolean {
    return this.#type === "height" || this.#type === "both";
  }

  get type(): ResizeType | null {
    return this.#type || null;
  }

  get typeList(): { selection: ResizeType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      resizeWidth: this.#width,
      resizeHeight: this.#height,
      resizeType: this.#type,
    };
  }

  resetMetadata() {
    return resizeResetMetadata;
  }

  hasEffect() {
    return this.#type !== "none";
  }

  isValid() {
    return !!Object.values(this.getErrors()).find((error) => !!error);
  }

  getErrors() {
    return {
      width: this.assertWidth(),
      height: this.assertHeight(),
      type: this.assertType(),
    };
  }

  private assertWidth(): string | null {
    if (this.requiredWidth && !this.#width) {
      return `幅が指定されていません`;
    }

    return null;
  }

  private assertHeight(): string | null {
    if (this.requiredHeight && !this.#height) {
      return `高さが指定されていません`;
    }

    return null;
  }

  private assertType(): string | null {
    return null;
  }
}