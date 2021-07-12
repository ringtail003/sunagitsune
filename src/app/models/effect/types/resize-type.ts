export const resizeTypeConfig = {
  none: "none",
  width: "width",
  height: "height",
  both: "both",
};

export type ResizeType = keyof typeof resizeTypeConfig;
export const resizeTypeList = Object.keys(resizeTypeConfig) as ResizeType[];
