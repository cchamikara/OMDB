import {
  SUCCESS_MOVIE_FETCHING,
  START_MOVIE_FETCHING,
  FAILED_MOVIE_FETCHING,
  SEARCHING_MOVIE,
} from "../constants";

const initialState = {
  movies: {
    Search: [],
  },
  isLoading: false,
  isNetworkError: false,
  searchString: "",
};

const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case START_MOVIE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_MOVIE_FETCHING:
      return {
        ...state,
        isLoading: false,
        movies: payload,
      };
    case SEARCHING_MOVIE:
      return {
        ...state,
        searchString: payload,
      };
    case FAILED_MOVIE_FETCHING:
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
