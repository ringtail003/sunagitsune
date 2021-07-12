import { BorderType } from "src/app/models/effect/types/border-type";
import { ResizeType } from "src/app/models/effect/types/resize-type";
import { RotateType } from "src/app/models/effect/types/rotate-type";

interface FullEffectMetadata {
  borderWidth: number;
  borderColor: string;
  borderType: BorderType;
  rotateType: RotateType;
  resizeType: ResizeType;
  resizeWidth: number;
  resizeHeight: number;
}

export type EffectMetadataKey = keyof FullEffectMetadata;

export type EffectMetadata = {
  [P in EffectMetadataKey]: FullEffectMetadata[P] | null;
};
