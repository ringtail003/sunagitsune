import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { Config } from "src/app/models/effect/effects/config";
import {
  BorderType,
  borderTypeConfig,
  borderTypeList,
} from "src/app/models/effect/types/border-type";
import { asNumber } from "src/app/utils/as-type/as-number";
import { asString } from "src/app/utils/as-type/as-string";
import { asType } from "src/app/utils/as-type/as-type";

export class BorderEffect implements Config {
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
    return this.#width;
  }

  get color(): string | null {
    return this.#color;
  }

  get type(): BorderType | null {
    return this.#type;
  }

  get typeList(): { selection: BorderType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      borderWidth: this.#width,
      borderColor: this.#color,
      borderType: this.#type,
    };
  }

  hasEffect() {
    return !!this.#width;
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
    return null;
  }

  private assertColor(): string | null {
    if (!this.#width && this.#color) {
      return `線幅の指定がないため色指定は無効です`;
    }

    return null;
  }

  private assertType(): string | null {
    if (!this.#width && this.#type) {
      return `線幅の指定がないため種類選択は無効です`;
    }

    return null;
  }
}
