import { EffectMetadata } from "src/app/models/effect/effect-metadata";

export interface Plugin {
  hasEffect: () => boolean;
  hasError: () => boolean;
  getErrors: () => { [key: string]: string | null };
  createMetadata: () => Partial<EffectMetadata>;
  resetMetadata: () => Partial<EffectMetadata>;
}
