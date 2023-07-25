import axios from "axios";
import options, { baseURL, optionsForGenres } from "../../constants/constant";
import ActionTypes from "../../constants/ActionTypes";

export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

// get movies data and set it
export const getMovies = () =>
  async function (dispatch) {
    const res = await axios.get(`${baseURL}`, options);
    dispatch({
      type: ActionTypes.FETCH_POPULAR_MOVIES,
      payload: res.data.results,
    });
  };

// get categories data and set it
export const getGenres = () => (dispatch) => {
  // get categories data
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err.message));
};

export const getMoviesByGenres = (id) => (dispatch) => {
  // get movies by genres
  axios
    .get(
      `
https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
      optionsForGenres
    )
    .then((res) =>
      dispatch({
        type: ActionTypes.FETCH_GENRES_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};
