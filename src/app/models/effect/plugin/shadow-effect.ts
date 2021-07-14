import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { Plugin } from "src/app/models/effect/plugin/plugin";
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

export class ShadowPluginEffect implements Plugin {
  #blur: number | null;
  #color: string | null;
  #offset: number | null;
  #type: ShadowType | null;
  #typeList: { selection: ShadowType; label: string }[];

  constructor(metadata: EffectMetadata) {
    this.#blur = asNumber(metadata.shadowBlur, null);
    this.#color = asString(metadata.shadowColor, null);
    this.#offset = asNumber(metadata.shadowOffset, null);
    this.#type = asType(metadata.shadowType, shadowTypeList, null);
    this.#typeList = Object.keys(shadowTypeConfig).map((key) => {
      return {
        selection: key as ShadowType,
        label: shadowTypeConfig[key as ShadowType] as string,
      };
    });
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

  get type(): ShadowType | null {
    return this.#type || null;
  }

  get typeList(): { selection: ShadowType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      shadowBlur: this.#blur,
      shadowColor: this.#color,
      shadowOffset: this.#offset,
      shadowType: this.#type === "none" ? null : this.#type,
    };
  }

  resetMetadata() {
    return shadowResetMetadata;
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
    if (this.hasEffect() && !this.#blur) {
      return `blurを入力してください`;
    }

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
