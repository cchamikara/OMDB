import useWatchList from "../../hooks/useWatchList";
import MovieTitle from "../MovieTile/MovieTile";

import "./WatchList.scss";

const WatchList = () => {
  const [watchList] = useWatchList("watchlist", []);

  return (
    <div className="WatchList">
      {watchList.length ? (
        watchList.map((movie, index) => (
          <MovieTitle key={`${movie.imdbID}_${index}`} {...movie} />
        ))
      ) : (
        <div className="WatchList-empty">
          Start adding movies to watchlist from movie details screen
        </div>
      )}
    </div>
  );
};

export default WatchList;
