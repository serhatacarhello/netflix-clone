export const baseURL = "https://api.themoviedb.org/3/movie/popular";
export const baseImageURL = "https://image.tmdb.org/t/p/original";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
};

export default options;

export const optionsForGenres = {
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
};
