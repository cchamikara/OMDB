import cacheService from "memory-cache";

export default (req, res, next) => {
  cacheService.put(req.url, res.locals.response);
  next();
};
