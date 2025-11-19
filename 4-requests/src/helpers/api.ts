export const fetcher = async (url: string) =>
  fetch(`http://localhost:3000/${url}`).then((res) => res.json());
