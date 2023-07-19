import axios from "axios";

const useApi = () => {
  const api = axios.create();
  api.defaults.baseURL = "https://api.themoviedb.org/3/movie/";
  api.defaults.headers["accept"] = "application/json";
  api.defaults.headers.Authorization = `Bearer ${
    import.meta.env.VITE_ACCESS_TOKEN
  }`;
  return api;
};

export default useApi;
