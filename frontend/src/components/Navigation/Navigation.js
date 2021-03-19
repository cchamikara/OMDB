import poster from "../../assets/starwars.jpg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="Navigation-resultCount">582 Results</div>

      <div className="Navigation-results">
        <div
          className="Navigation-movie"
          onClick={() => console.log("clicked")}
        >
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>

        <div className="Navigation-movie">
          <img
            src={poster}
            alt="star wars"
            className="Navigation-movie-poster"
          />
          <div className="Navigation-movie-description">
            <div className="Navigation-movie-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="Navigation-movie-year">1977</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
