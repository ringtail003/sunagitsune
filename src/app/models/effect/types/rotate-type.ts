export const rotateTypeConfig = {
  none: "none",
  right90: "right 90°",
  right180: "right 180°",
  right270: "right 270°",
  left90: "left 90°",
  left270: "left 270°",
};

export type RotateType = keyof typeof rotateTypeConfig;
export const rotateTypeList = Object.keys(rotateTypeConfig) as RotateType[];
