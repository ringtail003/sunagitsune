import {
  EffectMetadata,
  EffectMetadataKey,
} from "src/app/models/effect/effect-metadata";
import { BorderEffect } from "src/app/models/effect/plugin/border-effect";
import { FilenamePluginEffect } from "src/app/models/effect/plugin/filename-effect";
import { PluginEffect } from "src/app/models/effect/plugin/plugin";
import { ResizePluginEffect } from "src/app/models/effect/plugin/resize-effect";
import { RotatePluginEffect } from "src/app/models/effect/plugin/rotate-effect";
import { ShadowPluginEffect } from "src/app/models/effect/plugin/shadow-effect";
import { textPluginEffect } from "src/app/models/effect/plugin/text-effect";

export class Effect {
  readonly border: BorderEffect;
  readonly rotate: RotatePluginEffect;
  readonly resize: ResizePluginEffect;
  readonly shadow: ShadowPluginEffect;
  readonly filename: FilenamePluginEffect;
  readonly text: textPluginEffect;
  readonly plugins: { [key: string]: PluginEffect };

  constructor(private metadata: EffectMetadata) {
    this.border = new BorderEffect(this.metadata);
    this.rotate = new RotatePluginEffect(this.metadata);
    this.resize = new ResizePluginEffect(this.metadata);
    this.shadow = new ShadowPluginEffect(this.metadata);
    this.filename = new FilenamePluginEffect(this.metadata);
    this.text = new textPluginEffect(this.metadata);

    this.plugins = {
      border: this.border,
      rotate: this.rotate,
      resize: this.resize,
      shadow: this.shadow,
      filename: this.filename,
      text: this.text,
    };
  }

  createMetadata(): Partial<EffectMetadata> {
    const metadata = {
      ...this.border.createMetadata(),
      ...this.rotate.createMetadata(),
      ...this.resize.createMetadata(),
      ...this.shadow.createMetadata(),
      ...this.filename.createMetadata(),
      ...this.text.createMetadata(),
    };

    return Object.keys(metadata).reduce((acc, current) => {
      const key = current as EffectMetadataKey;

      return metadata[key] ? Object.assign(acc, { [key]: metadata[key] }) : acc;
    }, {} as Partial<EffectMetadata>);
  }
}
