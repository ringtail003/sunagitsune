export const resizeTypeConfig = {
  none: "なし",
  width: "横幅を指定",
  height: "高さを指定",
  both: "横幅と高さを指定",
};

export type ResizeType = keyof typeof resizeTypeConfig;
export const resizeTypeList = Object.keys(resizeTypeConfig) as ResizeType[];
