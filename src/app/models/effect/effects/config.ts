import { EffectMetadata } from "src/app/models/effect/effect-metadata";

export interface Config {
  hasEffect: () => boolean;
  isValid: () => boolean;
  getErrors: () => { [key: string]: string | null };
  createMetadata: () => Partial<EffectMetadata>;
  resetMetadata: () => Partial<EffectMetadata>;
}
