import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchMovieById, fetchMovies } from "../../store/actions";

import placeholder from "../../assets/placeholder.png";
import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const {
    searchData,
    movieList,
    totalResults,
    page,
    selectedIndex,
  } = useSelector((state) => state);
  const currentMovieCount = (movieList || []).length;

  return (
    <>
      {currentMovieCount ? (
        <div className="Navigation">
          <div className="Navigation-resultCount">
            {totalResults && currentMovieCount
              ? `${totalResults} Results`
              : null}
          </div>

          <div id="scrollableDiv" className="Navigation-results">
            <InfiniteScroll
              dataLength={currentMovieCount}
              next={() => {
                dispatch(
                  fetchMovies({ ...searchData, page, newSearch: false })
                );
              }}
              hasMore={movieList.length < totalResults}
              loader={<div>Loading...</div>}
              scrollableTarget="scrollableDiv"
            >
              {(movieList || []).map(
                ({ imdbID, Poster, Title, Year }, index) => (
                  <div
                    key={`${imdbID}_${index}`}
                    title={Title}
                    className={`Navigation-movie ${
                      index === selectedIndex ? "Navigation-selected" : ""
                    }`}
                    onClick={() =>
                      dispatch(fetchMovieById({ id: imdbID, index }))
                    }
                  >
                    <div>
                      <img
                        src={Poster !== "N/A" ? Poster : placeholder}
                        alt={Title}
                        className="Navigation-movie-poster"
                      />
                    </div>
                    <div className="Navigation-movie-description">
                      <div className="Navigation-movie-title">{Title}</div>
                      <div className="Navigation-movie-year">{Year}</div>
                    </div>
                  </div>
                )
              )}
            </InfiniteScroll>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
