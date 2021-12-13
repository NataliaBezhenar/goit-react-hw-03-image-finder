export function fetchImages(queryString) {
  return fetch(queryString).then((res) => res.json());
}
