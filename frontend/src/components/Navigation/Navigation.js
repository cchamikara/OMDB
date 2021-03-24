import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchMovieById, fetchMovies } from "../../store/actions";

import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const { searchData, movieList, totalResults, page } = useSelector(
    (state) => state
  );
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
              loader={<h4>Loading...</h4>}
              scrollableTarget="scrollableDiv"
            >
              {(movieList || []).map(
                ({ imdbID, Poster, Title, Year }, index) => (
                  <div
                    key={`${imdbID}_${index}`}
                    title={Title}
                    className="Navigation-movie"
                    onClick={() => dispatch(fetchMovieById({ id: imdbID }))}
                  >
                    <div>
                      <img
                        src={Poster}
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
