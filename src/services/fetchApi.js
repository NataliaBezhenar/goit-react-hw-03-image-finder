export function fetchImages(search, page) {
  const APP_KEY = "16152697-2240022566bfb10dd1cf00ec5";
  const per_page = 12;
  const URL = "https://pixabay.com/api/?key=";

  const queryString = `${URL}${APP_KEY}&q=${encodeURIComponent(
    search
  )}&per_page=${per_page}&page=${page}&image_type=photo&orientation=horizontal`;
  return fetch(queryString).then((res) => res.json());
}
