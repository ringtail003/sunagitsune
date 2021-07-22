import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { PluginEffect } from "src/app/models/effect/plugin/plugin";
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

export class ResizePluginEffect implements PluginEffect {
  #type: ResizeType;
  #width: number | null;
  #height: number | null;
  #typeList: { type: ResizeType; label: string }[];

  readonly name = "resize";

  constructor(metadata: EffectMetadata) {
    this.#type = asType(metadata.resizeType, resizeTypeList, "none");
    this.#width = asNumber(metadata.resizeWidth, null);
    this.#height = asNumber(metadata.resizeHeight, null);
    this.#typeList = Object.keys(resizeTypeConfig).map((key) => {
      return {
        type: key as ResizeType,
        label: resizeTypeConfig[key as ResizeType] as string,
      };
    });
  }

  get type(): ResizeType {
    return this.#type;
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

  get typeList(): { type: ResizeType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    if (!this.hasEffect()) {
      return {};
    }

    return {
      resizeType: this.#type,
      resizeWidth:
        !this.requiredWidth || this.assertWidth() ? null : this.#width,
      resizeHeight:
        !this.requiredHeight || this.assertHeight() ? null : this.#height,
    };
  }

  getResetMetadata() {
    return resizeResetMetadata;
  }

  getContext(): { type: ResizeType; width: number; height: number } {
    return {
      type: this.#type,
      width: this.#width || 500 * 0.7,
      height: this.#height || 345 * 0.7,
    };
  }

  hasEffect() {
    return this.#type !== "none";
  }

  hasError() {
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
    if (!this.requiredWidth) {
      return null;
    }

    if (!this.#width) {
      return `widthを入力してください`;
    }

    if (this.#width < 1) {
      return `widthに1以上の値を入力してください`;
    }

    return null;
  }

  private assertHeight(): string | null {
    if (!this.requiredHeight) {
      return null;
    }

    if (!this.#height) {
      return `heightを入力してください`;
    }

    if (this.#height < 1) {
      return `heightに1以上の値を入力してください`;
    }

    return null;
  }

  private assertType(): string | null {
    return null;
  }
}
