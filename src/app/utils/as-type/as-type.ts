export const asType = <T, U>(value: T | null, list: T[], ifNot: U): T | U => {
  if (!value || !list.includes(value)) {
    return ifNot;
  }

  return value;
};
