import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { PluginEffect } from "src/app/models/effect/plugin/plugin";
import { asString } from "src/app/utils/as-type/as-string";
import { splitFilename } from "src/app/utils/split-filename";
import validFilename from "valid-filename";

export const filenameResetMetadata = {
  filenamePrefix: null,
  filenameSuffix: null,
};

export class FilenamePluginEffect implements PluginEffect {
  #prefix: string | null;
  #suffix: string | null;

  readonly name = "filename";

  constructor(metadata: EffectMetadata) {
    this.#prefix = asString(metadata.filenamePrefix, null);
    this.#suffix = asString(metadata.filenameSuffix, null);
  }

  get prefix(): string | null {
    return this.#prefix || null;
  }

  get suffix(): string | null {
    return this.#suffix || null;
  }

  apply(filename: string): string {
    const split = splitFilename(filename);
    const context = this.getContext();

    return `${context.prefix}${split.withoutExtension}${context.suffix}.${split.extension}`;
  }

  createMetadata() {
    return {
      filenamePrefix: this.assertPrefix() ? null : this.#prefix,
      filenameSuffix: this.assertSuffix() ? null : this.#suffix,
    };
  }

  getResetMetadata() {
    return filenameResetMetadata;
  }

  getContext(): { prefix: string; suffix: string } {
    return {
      prefix: this.#prefix || "",
      suffix: this.#suffix || "",
    };
  }

  hasEffect() {
    return !!(this.#prefix || this.#suffix);
  }

  hasError() {
    return !!Object.values(this.getErrors()).find((error) => !!error);
  }

  getErrors() {
    return {
      prefix: this.assertPrefix(),
      suffix: this.assertSuffix(),
    };
  }

  private assertPrefix(): string | null {
    if (!this.#prefix) {
      return null;
    }

    return validFilename(this.#prefix)
      ? null
      : "ファイル名として有効なprefixを入力してください";
  }

  private assertSuffix(): string | null {
    if (!this.#suffix) {
      return null;
    }

    return validFilename(this.#suffix)
      ? null
      : "ファイル名として有効なsuffixを入力してください";
  }
}
