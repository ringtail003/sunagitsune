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
  #typeList: { selection: RotateType; label: string }[];

  constructor(metadata: EffectMetadata) {
    this.#type = asType(metadata.rotateType, rotateTypeList, null);
    this.#typeList = Object.keys(rotateTypeConfig).map((key) => {
      return {
        selection: key as RotateType,
        label: rotateTypeConfig[key as RotateType] as string,
      };
    });
  }

  get type(): RotateType | null {
    return this.#type || null;
  }

  get typeList(): { selection: RotateType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      rotateType: this.#type,
    };
  }

  resetMetadata() {
    return rotateResetMetadata;
  }

  hasEffect() {
    return this.#type !== "none";
  }

  isValid() {
    return true;
  }

  getErrors() {
    return {
      type: null,
    };
  }
}
