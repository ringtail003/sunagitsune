export const queryStringToObject = (
  query: string
): { [key: string]: string } => {
  const queries = new URLSearchParams(query);
  const params: { [key: string]: string } = {};

  queries.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};
