import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { PluginEffect } from "src/app/models/effect/plugin/plugin";
import {
  BorderType,
  borderTypeConfig,
  borderTypeList,
} from "src/app/models/effect/types/border-type";
import { asNumber } from "src/app/utils/as-type/as-number";
import { asString } from "src/app/utils/as-type/as-string";
import { asType } from "src/app/utils/as-type/as-type";

export const borderResetMetadata = {
  borderWidth: null,
  borderColor: null,
  borderType: "none" as BorderType,
};

export class BorderEffect implements PluginEffect {
  #type: BorderType;
  #width: number | null;
  #color: string | null;
  #typeList: { type: BorderType; label: string }[];

  readonly name = "border";

  constructor(metadata: EffectMetadata) {
    this.#width = asNumber(metadata.borderWidth, null);
    this.#color = asString(metadata.borderColor, null);
    this.#type = asType(metadata.borderType, borderTypeList, "none");
    this.#typeList = Object.keys(borderTypeConfig).map((key) => {
      return {
        type: key as BorderType,
        label: borderTypeConfig[key as BorderType] as string,
      };
    });
  }

  get type(): BorderType {
    return this.#type;
  }

  get width(): number | null {
    return this.requiredWidth ? this.#width || null : null;
  }

  get requiredWidth(): boolean {
    return this.#type !== "none";
  }

  get color(): string | null {
    return this.requiredColor ? this.#color || null : null;
  }

  get requiredColor(): boolean {
    return this.#type !== "none";
  }

  get typeList(): { type: BorderType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    if (!this.hasEffect()) {
      return {};
    }

    return {
      borderType: this.#type,
      borderWidth: this.assertWidth() ? null : this.#width,
      borderColor: this.assertColor() ? null : this.#color,
    };
  }

  getResetMetadata() {
    return borderResetMetadata;
  }

  getContext(): { type: BorderType; width: number; color: string } {
    return {
      type: this.#type,
      width: this.#width || 3,
      color: this.#color || "#000000",
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
      color: this.assertColor(),
      type: this.assertType(),
    };
  }

  private assertWidth(): string | null {
    if (!this.hasEffect()) {
      return null;
    }

    if (!this.#width) {
      return `線の太さを入力してください`;
    }

    if (this.#width < 1) {
      return `線の太さに1以上の値を入力してください`;
    }

    return null;
  }

  private assertColor(): string | null {
    if (this.hasEffect() && !this.#color) {
      return `線の色を選択してください`;
    }

    return null;
  }

  private assertType(): string | null {
    return null;
  }
}
