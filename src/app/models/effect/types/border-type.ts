export const borderTypeConfig = {
  inside: "inside",
  outside: "outside",
};

export type BorderType = keyof typeof borderTypeConfig;
export const borderTypeList = Object.keys(borderTypeConfig) as BorderType[];
