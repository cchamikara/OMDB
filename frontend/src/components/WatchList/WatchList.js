import useWatchList from "../../hooks/useWatchList";
import MovieTitle from "../MovieTile/MovieTile";

import "./WatchList.scss";

const WatchList = () => {
  const [watchList] = useWatchList("watchlist", []);

  return (
    <div className="WatchList">
      {watchList.map((movie, index) => (
        <MovieTitle key={`${movie.imdbID}_${index}`} {...movie} />
      ))}
    </div>
  );
};

export default WatchList;
