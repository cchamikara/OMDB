import axios from "axios";
import config from "../../config";

import {
  START_MOVIE_FETCHING,
  SUCCESS_MOVIE_FETCHING,
  FAILED_MOVIE_FETCHING,
  SEARCHING_MOVIE,
  START_MOVIE_DETAIL_FETCHING,
  SUCCESS_MOVIE_DETAIL_FETCHING,
  FAILED_MOVIE_DETAIL_FETCHING,
  UPDATE_SEARCH_DATA,
  ERROR_MOVIE_FETCHING,
  CONTINUE_MOVIE_FETCHING,
} from "../constants";

export const fetchMovies = ({ title, year, type, page, newSearch }) => async (
  dispatch
) => {
  try {
    if (newSearch) {
      dispatch({ type: START_MOVIE_FETCHING });
    } else {
      dispatch({ type: CONTINUE_MOVIE_FETCHING });
    }

    const { data } = await axios.get(`${config.backendUrl}/search`, {
      params: {
        title,
        year,
        type,
        page,
      },
    });

    if (data.Response === "True") {
      dispatch({
        type: SUCCESS_MOVIE_FETCHING,
        payload: {
          movies: data,
          selectedMovie: undefined,
          movieList: data.Search,
          totalResults: data.totalResults,
          response: data.Response,
          error: data.Error,
        },
      });
    } else {
      dispatch({
        type: ERROR_MOVIE_FETCHING,
        payload: {
          response: data.Response,
          error: data.Error,
        },
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: FAILED_MOVIE_FETCHING });
  }
};

export const updateMovieTitle = ({ title }) => (dispatch) => {
  dispatch({
    type: SEARCHING_MOVIE,
    payload: {
      searchString: title.trim(),
      selectedMovie: undefined,
    },
  });
};

export const fetchMovieById = ({ id }) => async (dispatch) => {
  dispatch({ type: START_MOVIE_DETAIL_FETCHING });

  try {
    const { data } = await axios.get(`${config.backendUrl}/searchById`, {
      params: {
        id,
      },
    });

    dispatch({
      type: SUCCESS_MOVIE_DETAIL_FETCHING,
      payload: {
        selectedMovie: data,
      },
    });
  } catch (e) {
    dispatch({ type: FAILED_MOVIE_DETAIL_FETCHING });
  }
};

export const updateSearchData = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_SEARCH_DATA,
    payload: {
      searchData: data,
    },
  });
};
