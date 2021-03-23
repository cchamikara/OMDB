import { useSelector } from "react-redux";

import "./Navigation.scss";

const Navigation = () => {
  const {
    movies: { Search: movies, totalResults },
  } = useSelector((state) => state);

  return (
    <div className="Navigation">
      <div className="Navigation-resultCount">
        {totalResults && `${totalResults} Results`}
      </div>

      <div className="Navigation-results">
        {(movies || []).map(({ imdbID, Poster, Title, Year }) => (
          <div
            key={imdbID}
            className="Navigation-movie"
            onClick={() => console.log(Title)}
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
        ))}
      </div>
    </div>
  );
};

export default Navigation;
