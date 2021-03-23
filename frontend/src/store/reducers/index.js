import {
  SUCCESS_MOVIE_FETCHING,
  START_MOVIE_FETCHING,
  FAILED_MOVIE_FETCHING,
  SEARCHING_MOVIE,
  START_MOVIE_DETAIL_FETCHING,
  SUCCESS_MOVIE_DETAIL_FETCHING,
  FAILED_MOVIE_DETAIL_FETCHING,
} from "../constants";

const initialState = {
  movies: {
    Search: [],
  },
  selectedMovie: undefined,
  isLoading: false,
  isNetworkError: false,
  searchString: "",
};

const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case START_MOVIE_FETCHING:
    case START_MOVIE_DETAIL_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_MOVIE_FETCHING:
      return {
        ...state,
        isLoading: false,
        movies: payload,
        selectedMovie: undefined,
      };
    case SEARCHING_MOVIE:
      return {
        ...state,
        searchString: payload,
        selectedMovie: undefined,
      };
    case SUCCESS_MOVIE_DETAIL_FETCHING:
      return {
        ...state,
        selectedMovie: payload,
        isLoading: false,
      };
    case FAILED_MOVIE_FETCHING:
    case FAILED_MOVIE_DETAIL_FETCHING:
      return {
        ...state,
        isLoading: false,
        isNetworkError: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
