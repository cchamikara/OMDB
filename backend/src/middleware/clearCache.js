import cacheService from "memory-cache";

export default (req, res, next) => {
  cacheService.clear();
  next();
};
