export const borderTypeConfig = {
  none: "なし",
  inside: "内側",
  outside: "外側",
};

export type BorderType = keyof typeof borderTypeConfig;
export const borderTypeList = Object.keys(borderTypeConfig) as BorderType[];
