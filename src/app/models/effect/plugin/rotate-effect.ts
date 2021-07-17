import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { Plugin } from "src/app/models/effect/plugin/plugin";
import {
  RotateType,
  rotateTypeConfig,
  rotateTypeList,
} from "src/app/models/effect/types/rotate-type";
import { asType } from "src/app/utils/as-type/as-type";

export const rotateResetMetadata = {
  rotateType: "none" as RotateType,
};

export class RotatePluginEffect implements Plugin {
  #type: RotateType | null;
  #typeList: { type: RotateType; label: string }[];

  readonly name = "rotate";

  constructor(metadata: EffectMetadata) {
    this.#type = asType(metadata.rotateType, rotateTypeList, null);
    this.#typeList = Object.keys(rotateTypeConfig).map((key) => {
      return {
        type: key as RotateType,
        label: rotateTypeConfig[key as RotateType] as string,
      };
    });
  }

  get type(): RotateType | null {
    return this.#type || null;
  }

  get typeList(): { type: RotateType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      rotateType: this.#type === "none" ? null : this.#type,
    };
  }

  resetMetadata() {
    return rotateResetMetadata;
  }

  hasEffect() {
    return this.#type !== "none";
  }

  hasError() {
    return false;
  }

  getErrors() {
    return {
      type: null,
    };
  }
}
