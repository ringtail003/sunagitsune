import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { PluginEffect } from "src/app/models/effect/plugin/plugin";
import {
  ShadowType,
  shadowTypeConfig,
  shadowTypeList,
} from "src/app/models/effect/types/shadow-type";
import { asNumber } from "src/app/utils/as-type/as-number";
import { asString } from "src/app/utils/as-type/as-string";
import { asType } from "src/app/utils/as-type/as-type";

export const shadowResetMetadata = {
  shadowBlur: null,
  shadowColor: null,
  shadowOffset: null,
  shadowType: "none" as ShadowType,
};

export class ShadowPluginEffect implements PluginEffect {
  #type: ShadowType;
  #blur: number | null;
  #color: string | null;
  #offset: number | null;
  #typeList: { type: ShadowType; label: string }[];

  readonly name = "shadow";

  constructor(metadata: EffectMetadata) {
    this.#type = asType(metadata.shadowType, shadowTypeList, "none");
    this.#blur = asNumber(metadata.shadowBlur, null);
    this.#color = asString(metadata.shadowColor, null);
    this.#offset = asNumber(metadata.shadowOffset, null);
    this.#typeList = Object.keys(shadowTypeConfig).map((key) => {
      return {
        type: key as ShadowType,
        label: shadowTypeConfig[key as ShadowType] as string,
      };
    });
  }

  get type(): ShadowType {
    return this.#type;
  }

  get blur(): number | null {
    return this.hasEffect() ? this.#blur || null : null;
  }

  get color(): string | null {
    return this.hasEffect() ? this.#color || null : null;
  }

  get offset(): number | null {
    return this.hasEffect() ? this.#offset || null : null;
  }

  get typeList(): { type: ShadowType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    if (!this.hasEffect()) {
      return {};
    }

    return {
      shadowType: this.#type || null,
      shadowBlur: this.assertBlur() ? null : this.#blur,
      shadowColor: this.assertColor() ? null : this.#color,
      shadowOffset: this.assertOffset() ? null : this.#offset,
    };
  }

  getResetMetadata() {
    return shadowResetMetadata;
  }

  getContext(): {
    type: ShadowType;
    blur: number;
    color: string;
    offset: number;
  } {
    return {
      type: this.#type,
      blur: this.#blur ? 5 : 0,
      color: this.#color || "#000000",
      offset: this.#offset || 5,
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
      blur: this.assertBlur(),
      color: this.assertColor(),
      offset: this.assertOffset(),
      type: this.assertType(),
    };
  }

  private assertBlur(): string | null {
    return null;
  }

  private assertOffset(): string | null {
    if (this.hasEffect() && !this.#offset) {
      return `offsetを入力してください`;
    }

    return null;
  }

  private assertColor(): string | null {
    if (this.hasEffect() && !this.#color) {
      return `colorを選択してください`;
    }

    return null;
  }

  private assertType(): string | null {
    return null;
  }
}
