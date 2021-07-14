import {
  EffectMetadata,
  EffectMetadataKey,
} from "src/app/models/effect/effect-metadata";
import { BorderPluginEffect } from "src/app/models/effect/plugin/border-effect";
import { Plugin } from "src/app/models/effect/plugin/plugin";
import { ResizePluginEffect } from "src/app/models/effect/plugin/resize-effect";
import { RotatePluginEffect } from "src/app/models/effect/plugin/rotate-effect";
import { ShadowPluginEffect } from "src/app/models/effect/plugin/shadow-effect";

export class Effect {
  constructor(private metadata: EffectMetadata) {}

  get effects(): {
    [key: string]: Plugin;
  } {
    return {
      border: this.borderEffect,
      rotate: this.rotateEffect,
      resize: this.resizeEffect,
      shadow: this.shadowEffect,
    };
  }

  get borderEffect(): BorderPluginEffect {
    return new BorderPluginEffect(this.metadata);
  }

  get rotateEffect(): RotatePluginEffect {
    return new RotatePluginEffect(this.metadata);
  }

  get resizeEffect(): ResizePluginEffect {
    return new ResizePluginEffect(this.metadata);
  }

  get shadowEffect(): ShadowPluginEffect {
    return new ShadowPluginEffect(this.metadata);
  }

  createMetadata(): Partial<EffectMetadata> {
    const metadata = {
      ...this.borderEffect.createMetadata(),
      ...this.rotateEffect.createMetadata(),
      ...this.resizeEffect.createMetadata(),
      ...this.shadowEffect.createMetadata(),
    };

    return Object.keys(metadata).reduce((acc, current) => {
      const key = current as EffectMetadataKey;

      return metadata[key] ? Object.assign(acc, { [key]: metadata[key] }) : acc;
    }, {} as Partial<EffectMetadata>);
  }
}
