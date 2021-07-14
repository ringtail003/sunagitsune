import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { Plugin } from "src/app/models/effect/plugin/plugin";
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

export class BorderPluginEffect implements Plugin {
  #width: number | null;
  #color: string | null;
  #type: BorderType | null;
  #typeList: { selection: BorderType; label: string }[];

  constructor(metadata: EffectMetadata) {
    this.#width = asNumber(metadata.borderWidth, null);
    this.#color = asString(metadata.borderColor, null);
    this.#type = asType(metadata.borderType, borderTypeList, null);
    this.#typeList = Object.keys(borderTypeConfig).map((key) => {
      return {
        selection: key as BorderType,
        label: borderTypeConfig[key as BorderType] as string,
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

  get type(): BorderType | null {
    return this.#type || null;
  }

  get typeList(): { selection: BorderType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      borderWidth: this.#width,
      borderColor: this.#color,
      borderType: this.#type === "none" ? null : this.#type,
    };
  }

  resetMetadata() {
    return borderResetMetadata;
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
      type: this.assertType(),
    };
  }

  private assertWidth(): string | null {
    if (this.hasEffect() && !this.#width) {
      return `線幅が指定されていません`;
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
