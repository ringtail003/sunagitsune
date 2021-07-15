export const textTypeConfig = {
  none: "none",
  topLeft: "top left",
  topCenter: "top center",
  topRight: "top right",
  center: "center",
  bottomLeft: "bottom left",
  bottomCenter: "bottom center",
  bottomRight: "bottom right",
};

export type TextType = keyof typeof textTypeConfig;
export const textTypeList = Object.keys(textTypeConfig) as TextType[];
