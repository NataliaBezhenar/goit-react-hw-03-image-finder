const APP_KEY = "16152697-2240022566bfb10dd1cf00ec5";
export const PER_PAGE = 12;
const URL = "https://pixabay.com/api/?key=";

export function fetchImages(search, page) {
  const queryString = `${URL}${APP_KEY}&q=${encodeURIComponent(
    search
  )}&per_page=${PER_PAGE}&page=${page}&image_type=photo&orientation=horizontal`;

  return fetch(queryString).then((res) => res.json());
}
