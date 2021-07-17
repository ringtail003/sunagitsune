import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { PluginEffect } from "src/app/models/effect/plugin/plugin";
import {
  RotateType,
  rotateTypeConfig,
  rotateTypeList,
} from "src/app/models/effect/types/rotate-type";
import { asType } from "src/app/utils/as-type/as-type";

export const rotateResetMetadata = {
  rotateType: "none" as RotateType,
};

export class RotatePluginEffect implements PluginEffect {
  #type: RotateType;
  #typeList: { type: RotateType; label: string }[];

  readonly name = "rotate";

  constructor(metadata: EffectMetadata) {
    this.#type = asType(metadata.rotateType, rotateTypeList, "none");
    this.#typeList = Object.keys(rotateTypeConfig).map((key) => {
      return {
        type: key as RotateType,
        label: rotateTypeConfig[key as RotateType] as string,
      };
    });
  }

  get type(): RotateType {
    return this.#type;
  }

  get typeList(): { type: RotateType; label: string }[] {
    return this.#typeList;
  }

  createMetadata() {
    return {
      rotateType: this.#type === "none" ? null : this.#type,
    };
  }

  getResetMetadata() {
    return rotateResetMetadata;
  }

  getContext(): { type: RotateType } {
    return {
      type: this.#type,
    };
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
