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
  shadowWidth: null,
  shadowColor: null,
  shadowOffset: null,
  shadowType: "none" as ShadowType,
};

export class ShadowPluginEffect implements Plugin {
  #width: number | null;
  #color: string | null;
  #offset: number | null;
  #type: ShadowType | null;
  #typeList: { selection: ShadowType; label: string }[];

  constructor(metadata: EffectMetadata) {
    this.#width = asNumber(metadata.shadowWidth, null);
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

  get offset(): number | null {
    return this.requiredOffset ? this.#offset || null : null;
  }

  get requiredOffset(): boolean {
    return this.#type !== "none";
  }

  get type(): ShadowType | null {
    return this.#type || null;
  }

  get typeList(): { selection: ShadowType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      shadowWidth: this.#width,
      shadowColor: this.#color,
      shadowOffset: this.#offset,
      shadowType: this.#type,
    };
  }

  resetMetadata() {
    return shadowResetMetadata;
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
      color: this.assertColor(),
      offset: this.assertOffset(),
      type: this.assertType(),
    };
  }

  private assertWidth(): string | null {
    if (this.hasEffect() && !this.#width) {
      return `線幅が指定されていません`;
    }

    return null;
  }

  private assertOffset(): string | null {
    if (this.hasEffect() && !this.#width) {
      return `オフセットが指定されていません`;
    }

    return null;
  }

  private assertColor(): string | null {
    if (this.hasEffect() && !this.#color) {
      return `色が指定されていません`;
    }

    return null;
  }

  private assertType(): string | null {
    return null;
  }
}
