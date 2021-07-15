import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { borderResetMetadata } from "src/app/models/effect/plugin/border-effect";
import { filenameResetMetadata } from "src/app/models/effect/plugin/filename-effect";
import { resizeResetMetadata } from "src/app/models/effect/plugin/resize-effect";
import { rotateResetMetadata } from "src/app/models/effect/plugin/rotate-effect";
import { shadowResetMetadata } from "src/app/models/effect/plugin/shadow-effect";

export const createEffectMetadata = (): EffectMetadata => {
  return {
    ...borderResetMetadata,
    ...rotateResetMetadata,
    ...resizeResetMetadata,
    ...shadowResetMetadata,
    ...filenameResetMetadata,
  };
};
