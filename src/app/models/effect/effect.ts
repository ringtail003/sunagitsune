import { BorderConfig } from "src/app/models/effect/configs/border-config";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";

export class Effect {
  constructor(private metadata: EffectMetadata) {}

  get borderConfig(): BorderConfig {
    return new BorderConfig(this.metadata);
  }
}
