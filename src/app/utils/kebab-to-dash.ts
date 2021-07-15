export const kebabToDash = (str: string): string => {
  return str.replace(/[A-Z]/gu, (letter) => `-${letter.toLowerCase()}`);
};
