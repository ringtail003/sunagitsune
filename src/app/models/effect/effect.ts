import { BorderConfig } from "src/app/models/effect/configs/border-config";
import {
  EffectMetadata,
  EffectMetadataKey,
} from "src/app/models/effect/effect-metadata";

export class Effect {
  constructor(private metadata: EffectMetadata) {}

  get borderConfig(): BorderConfig {
    return new BorderConfig(this.metadata);
  }

  createMetadata(): Partial<EffectMetadata> {
    const metadata = {
      ...this.borderConfig.createMetadata(),
    };

    return Object.keys(metadata).reduce((acc, current) => {
      const key = current as EffectMetadataKey;

      return metadata[key] ? Object.assign(acc, { [key]: metadata[key] }) : acc;
    }, {} as Partial<EffectMetadata>);
  }
}
