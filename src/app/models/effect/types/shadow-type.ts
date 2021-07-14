export const shadowTypeConfig = {
  none: "none",
  right: "right",
};

export type ShadowType = keyof typeof shadowTypeConfig;
export const shadowTypeList = Object.keys(shadowTypeConfig) as ShadowType[];
