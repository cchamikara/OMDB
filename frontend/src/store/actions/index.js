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
} from "../constants";

export const fetchMovies = ({ title, year, type, page }) => async (
  dispatch
) => {
  try {
    dispatch({ type: START_MOVIE_FETCHING });

    const { data } = await axios.get(`${config.backendUrl}/search`, {
      params: {
        title,
        year,
        type,
        page,
      },
    });

    dispatch({ type: SUCCESS_MOVIE_FETCHING, payload: data });
  } catch (e) {
    dispatch({ type: FAILED_MOVIE_FETCHING });
  }
};

export const updateMovieTitle = ({ title }) => (dispatch) => {
  dispatch({ type: SEARCHING_MOVIE, payload: title.trim() });
};

export const fetchMovieById = ({ id }) => async (dispatch) => {
  dispatch({ type: START_MOVIE_DETAIL_FETCHING });

  try {
    const { data } = await axios.get(`${config.backendUrl}/searchById`, {
      params: {
        id,
      },
    });

    dispatch({ type: SUCCESS_MOVIE_DETAIL_FETCHING, payload: data });
  } catch (e) {
    dispatch({ type: FAILED_MOVIE_DETAIL_FETCHING });
  }
};
