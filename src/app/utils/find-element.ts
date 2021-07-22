const flatElements = (element: HTMLElement): HTMLElement[] => {
  const children = Array.from(element.children);

  return children.length
    ? [
        element,
        ...children.flatMap((child) => flatElements(child as HTMLElement)),
      ]
    : [element];
};

export const findElements = (
  element: HTMLElement,
  tagNames: string[]
): HTMLElement[] => {
  const tags = tagNames.map((name) => name.toLowerCase());

  return flatElements(element).filter((child) =>
    tags.includes(child.tagName.toLowerCase())
  );
};
