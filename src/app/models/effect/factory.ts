import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { borderResetMetadata } from "src/app/models/effect/plugin/border-effect";
import { rotateResetMetadata } from "src/app/models/effect/plugin/rotate-effect";

export const createEffectMetadata = (): EffectMetadata => {
  return {
    ...borderResetMetadata,
    ...rotateResetMetadata,
  };
};
