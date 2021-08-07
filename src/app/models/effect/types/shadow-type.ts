export const shadowTypeConfig = {
  none: "なし",
  right: "右側に影をつける",
};

export type ShadowType = keyof typeof shadowTypeConfig;
export const shadowTypeList = Object.keys(shadowTypeConfig) as ShadowType[];
