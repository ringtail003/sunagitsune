export const objectToQueryString = (
  host: string,
  params: { [key: string]: string | null | number }
) => {
  const query = new URLSearchParams(
    params as { [key: string]: string }
  ).toString();

  return query ? `${host}?${query}` : host;
};
