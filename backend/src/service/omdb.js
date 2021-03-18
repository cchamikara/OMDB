import axios from "axios";
import config from "../config";

export const fetchMovies = async ({ title, type, year, page }) => {
  const {
    omdb: { url, apiKey },
  } = config;

  const { data } = await axios.get(url, {
    params: {
      s: title,
      apiKey,
      type,
      y: year,
      page,
    },
  });

  return data;
};
