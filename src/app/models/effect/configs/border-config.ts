import { Config } from "src/app/models/effect/configs/config";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { asNumber } from "src/app/utils/as-type/as-number";
import { asString } from "src/app/utils/as-type/as-string";

export class BorderConfig implements Config {
  #width: number | null;
  #color: string | null;

  constructor(metadata: EffectMetadata) {
    this.#width = asNumber(metadata.borderWidth, null);
    this.#color = asString(metadata.borderColor, null);
  }

  get width(): number | null {
    return this.#width;
  }

  get color(): string | null {
    return this.#color;
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
}
