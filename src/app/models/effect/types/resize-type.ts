export const resizeTypeConfig = {
  none: "なし",
  width: "横幅基準",
  height: "高さ基準",
  both: "別指定",
};

export type ResizeType = keyof typeof resizeTypeConfig;
export const resizeTypeList = Object.keys(resizeTypeConfig) as ResizeType[];
