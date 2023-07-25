import ActionTypes from "../../constants/ActionTypes";

const initialState = {
  popularMovies: [],
  genres: [],
  queryMovies: [],
  isLoading: true,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        isLoading: false,
      };

    case "FETCH_GENRES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SET_GENRES:
      return {
        ...state,
        genres: action.payload,
        isLoading: false,
      };
    case "FETCH_GENRES_FAILURE":
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.FETCH_QUERY_MOVIES:
      return {
        ...state,
        queryMovies: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default movieReducer;
