import { BorderType } from "src/app/models/effect/types/border-type";

interface FullEffectMetadata {
  borderWidth: number;
  borderColor: string;
  borderType: BorderType;
}

export type EffectMetadataKey = keyof FullEffectMetadata;

export type EffectMetadata = {
  [P in EffectMetadataKey]: FullEffectMetadata[P] | null;
};
