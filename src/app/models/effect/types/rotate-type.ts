export const rotateTypeConfig = {
  none: "none",
  rotate90: "90°",
  rotate180: "180°",
  rotate270: "270°",
};

export type RotateType = keyof typeof rotateTypeConfig;
export const rotateTypeList = Object.keys(rotateTypeConfig) as RotateType[];
