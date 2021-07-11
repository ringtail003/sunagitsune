import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { borderEffectReset } from "src/app/models/effect/effects/border-effect";

export const createEffectMetadata = (): EffectMetadata => {
  return {
    ...borderEffectReset,
  };
};
