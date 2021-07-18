const flatElements = (element: HTMLElement): HTMLElement[] => {
  const children = Array.from(element.children);

  return children.length
    ? children.flatMap((child) => flatElements(child as HTMLElement))
    : [element];
};

export const findElements = (
  element: HTMLElement,
  tagName: string
): HTMLElement[] => {
  return flatElements(element).filter(
    (child) => child.tagName.toLowerCase() === tagName.toLowerCase()
  );
};
