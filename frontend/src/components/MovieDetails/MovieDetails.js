import { useSelector } from "react-redux";
import { camelCase, keyBy } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import useWatchList from "../../hooks/useWatchList";

import placeholder from "../../assets/placeholder.png";
import "./MovieDetails.scss";

const Movie = () => {
  const { selectedMovie } = useSelector((state) => state);
  const [watchlist, setWatchList] = useWatchList("watchlist", []);
  const watchListById = keyBy(watchlist, "imdbID");
  const isInWatchList = watchListById[selectedMovie?.imdbID];

  const addToWatchList = () => {
    if (isInWatchList) {
      const newWatchList = (watchlist || []).filter(
        ({ imdbID }) => imdbID !== selectedMovie?.imdbID
      );
      setWatchList(newWatchList);
    } else {
      setWatchList([...watchlist, selectedMovie]);
    }
  };

  return (
    <>
      {selectedMovie ? (
        <div className="MovieDetails">
          <div className="MovieDetails-brief">
            <img
              src={
                selectedMovie?.Poster !== "N/A"
                  ? selectedMovie.Poster
                  : placeholder
              }
              alt={selectedMovie?.Title}
              className="MovieDetails-poster"
            />
            <div className="MovieDetails-brief-content">
              <div className="MovieDetails-brief-watchlist">
                <button
                  className={`MovieDetails-brief-watchlist-button ${
                    isInWatchList
                      ? "MovieDetails-brief-watchlist-selectedButton"
                      : ""
                  }`}
                  onClick={() => addToWatchList()}
                >
                  <FontAwesomeIcon icon={faBookmark} size="lg" />
                  <span className="MovieDetails-brief-watchlist-button-text">
                    Watchlist
                  </span>
                </button>
              </div>
              <div>
                <div className="MovieDetails-brief-title">
                  {selectedMovie?.Title}
                </div>
                <div className="MovieDetails-brief-short">
                  <div className="MovieDetails-brief-rate">
                    {selectedMovie?.Rated}
                  </div>
                  <span>{selectedMovie?.Year}</span>
                  <span>.</span>
                  <span>{selectedMovie?.Genre}</span>
                  <span>.</span>
                  <span>{selectedMovie?.Runtime}</span>
                </div>
                <div className="MovieDetails-brief-cast">
                  <div className="MovieDetails-brief-actors">
                    {selectedMovie?.Actors}
                  </div>
                  <div className="MovieDetails-brief-director">
                    {selectedMovie?.Director !== "N/A" &&
                      `By ${selectedMovie?.Director}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="MovieDetails-plot">{selectedMovie?.Plot}</div>
          <div className="MovieDetails-ratings">
            {(selectedMovie?.Ratings || []).map(({ Source, Value }) => (
              <div
                key={camelCase(Source)}
                className="MovieDetails-ratings-source"
              >
                <div className="MovieDetails-ratings-value">{Value}</div>
                <div className="MovieDetails-ratings-sourceName">{Source}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Movie;
