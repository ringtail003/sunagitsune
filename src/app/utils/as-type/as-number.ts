export const asNumber = <T>(value: number | null, ifNot: T): number | T => {
  if (value !== 0 && !value) {
    return ifNot;
  }

  return value;
};
