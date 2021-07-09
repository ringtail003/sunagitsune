import {
  EffectMetadata,
  EffectMetadataKey,
} from "src/app/models/effect/effect-metadata";
import { BorderEffect } from "src/app/models/effect/effects/border-effect";

export class Effect {
  constructor(private metadata: EffectMetadata) {}

  get borderEffect(): BorderEffect {
    return new BorderEffect(this.metadata);
  }

  createMetadata(): Partial<EffectMetadata> {
    const metadata = {
      ...this.borderEffect.createMetadata(),
    };

    return Object.keys(metadata).reduce((acc, current) => {
      const key = current as EffectMetadataKey;

      return metadata[key] ? Object.assign(acc, { [key]: metadata[key] }) : acc;
    }, {} as Partial<EffectMetadata>);
  }
}
