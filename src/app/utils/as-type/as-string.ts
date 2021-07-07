export const asString = <T>(value: string | null, ifNot: T): string | T => {
  if (value !== "" && !value) {
    return ifNot;
  }

  return value;
};
