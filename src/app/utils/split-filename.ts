export const splitFilename = (
  filename: string
): { withoutExtension: string; extension: string } => {
  const split = filename.split(".");
  const extension = split.pop() || "";
  const withoutExtension = split.join(".");

  return { withoutExtension, extension };
};
