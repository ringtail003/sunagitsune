export const textTypeConfig = {
  none: "なし",
  topLeft: "左上",
  topCenter: "中央上",
  topRight: "右上",
  center: "中央",
  bottomLeft: "左下",
  bottomCenter: "中央下",
  bottomRight: "右下",
};

export type TextType = keyof typeof textTypeConfig;
export const textTypeList = Object.keys(textTypeConfig) as TextType[];
