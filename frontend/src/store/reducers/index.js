import {
  SUCCESS_MOVIE_FETCHING,
  START_MOVIE_FETCHING,
  FAILED_MOVIE_FETCHING,
  SEARCHING_MOVIE,
  START_MOVIE_DETAIL_FETCHING,
  SUCCESS_MOVIE_DETAIL_FETCHING,
  FAILED_MOVIE_DETAIL_FETCHING,
  UPDATE_SEARCH_DATA,
  ERROR_MOVIE_FETCHING,
  CONTINUE_MOVIE_FETCHING,
  TOGGLE_WATCH_LIST,
} from "../constants";

const initialState = {
  movieList: [],
  selectedMovie: undefined,
  isLoading: false,
  isNetworkError: false,
  searchString: "",
  totalResults: "",
  response: "",
  error: "",
  searchData: null,
  page: 1,
  selectedIndex: "",
  isWatchList: false,
};

const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case START_MOVIE_FETCHING:
      return {
        ...state,
        selectedMovie: undefined,
        isLoading: true,
        movieList: [],
        page: 1,
        isNetworkError: false,
      };
    case CONTINUE_MOVIE_FETCHING:
    case START_MOVIE_DETAIL_FETCHING:
      return {
        ...state,
        ...payload,
        isLoading: true,
        isNetworkError: false,
      };
    case SEARCHING_MOVIE:
      return {
        ...state,
        ...payload,
        movieList: [],
        isNetworkError: false,
      };
    case SUCCESS_MOVIE_DETAIL_FETCHING:
    case UPDATE_SEARCH_DATA:
    case ERROR_MOVIE_FETCHING:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isWatchList: false,
      };
    case SUCCESS_MOVIE_FETCHING:
      return {
        ...state,
        ...payload,
        isLoading: false,
        page: state.page + 1,
        movieList: [...state.movieList, ...payload.movieList],
      };
    case FAILED_MOVIE_FETCHING:
    case FAILED_MOVIE_DETAIL_FETCHING:
      return {
        ...state,
        isLoading: false,
        isNetworkError: true,
      };
    case TOGGLE_WATCH_LIST:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
