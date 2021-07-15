import { BorderType } from "src/app/models/effect/types/border-type";
import { ResizeType } from "src/app/models/effect/types/resize-type";
import { RotateType } from "src/app/models/effect/types/rotate-type";
import { ShadowType } from "src/app/models/effect/types/shadow-type";

interface FullEffectMetadata {
  borderWidth: number;
  borderColor: string;
  borderType: BorderType;
  rotateType: RotateType;
  resizeType: ResizeType;
  resizeWidth: number;
  resizeHeight: number;
  shadowBlur: number;
  shadowColor: string;
  shadowOffset: number;
  shadowType: ShadowType;
  filenamePrefix: string;
  filenameSuffix: string;
}

export type EffectMetadataKey = keyof FullEffectMetadata;

export type EffectMetadata = {
  [P in EffectMetadataKey]: FullEffectMetadata[P] | null;
};
