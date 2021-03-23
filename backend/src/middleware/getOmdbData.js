import { fetchMovies, fetchMovieById } from "../service/omdb";

const getMovies = async (req, res, next) => {
  const { title, type, year, page } = req.query;
  try {
    res.locals.response = await fetchMovies({ title, type, year, page });
    return next();
  } catch (err) {
    return next(err);
  }
};

const getMovieById = async (req, res, next) => {
  const { id } = req.query;
  try {
    res.locals.response = await fetchMovieById({ id });
    return next();
  } catch (err) {
    return next(err);
  }
};

export { getMovies, getMovieById };
