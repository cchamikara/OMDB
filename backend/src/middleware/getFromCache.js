import cacheService from 'memory-cache';

export default (req, res, next) => {
    const cachedData = cacheService.get(req.url);
    if (!cachedData) return next();
    res.json(cachedData);
}
