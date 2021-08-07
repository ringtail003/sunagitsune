export const textTypeConfig = {
  none: "なし",
  topLeft: "左上",
  topCenter: "上中央",
  topRight: "右上",
  center: "中央",
  bottomLeft: "左下",
  bottomCenter: "下中央",
  bottomRight: "右下",
};

export type TextType = keyof typeof textTypeConfig;
export const textTypeList = Object.keys(textTypeConfig) as TextType[];
