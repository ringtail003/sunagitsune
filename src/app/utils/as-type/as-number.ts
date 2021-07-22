export const asNumber = <T>(value: number | null, ifNot: T): number | T => {
  if (!value) {
    return ifNot;
  }

  return Number(value);
};
