import {
  EffectMetadata,
  EffectMetadataKey,
} from "src/app/models/effect/effect-metadata";
import { BorderPluginEffect } from "src/app/models/effect/plugin/border-effect";
import { Plugin } from "src/app/models/effect/plugin/plugin";

export class Effect {
  constructor(private metadata: EffectMetadata) {}

  get effects(): {
    [key: string]: Plugin;
  } {
    return {
      border: this.borderEffect,
    };
  }

  get borderEffect(): BorderPluginEffect {
    return new BorderPluginEffect(this.metadata);
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
