import { fetchMovies } from "../service/omdb";

export default async (req, res, next) => {
  const { title, type, year, page } = req.query;
  try {
    res.locals.response = await fetchMovies({ title, type, year, page });
    return next();
  } catch (err) {
    return next(err);
  }
};
