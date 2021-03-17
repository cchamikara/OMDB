import express from "express";

import config from "./config";

import setCache from "./middleware/setCache";
import clearCache from "./middleware/clearCache";
import getOmdbData from "./middleware/getOmdbData";
import getFromCache from "./middleware/getFromCache";

const app = express();
const api = new express.Router();

/**
 * End point for movie search
 */
api.get("/search", getFromCache, getOmdbData, setCache, (req, res) => {
  res.set("Cache-Control", "max-age=30");
  res.status(200).json(res.locals.response);
});

/**
 * End point for clears cache
 */
api.get("/clear", clearCache, (req, res) => {
  res.status(200).send();
});

/**
 * Returns data from API
 */
app.use("/api", api);
app.use((req, res) => {
  return res.status(404).send({ message: `Route ${req.url} Not found.` });
});
app.use(errorHandler);

function errorHandler(err, req, res) {
  res.status(500);
  res.render("error", { error: err });
}

app.listen(config.app.port, () =>
  console.log(`App listening on port ${config.app.port}`)
);
