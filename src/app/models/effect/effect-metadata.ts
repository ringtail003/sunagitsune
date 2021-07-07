interface FullEffectMetadata {
  borderWidth: number;
  borderColor: string;
}

export type EffectMetadataKey = keyof FullEffectMetadata;

export type EffectMetadata = {
  [P in EffectMetadataKey]: FullEffectMetadata[P] | null;
};
