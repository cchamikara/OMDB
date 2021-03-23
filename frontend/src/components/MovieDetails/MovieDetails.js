import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import poster from "../../assets/avatar.jpg";
import "./MovieDetails.scss";

const Movie = () => {
  return (
    <div className="MovieDetails">
      <div className="MovieDetails-brief">
        <img src={poster} alt="star wars" className="MovieDetails-poster" />
        <div className="MovieDetails-brief-content">
          <div className="MovieDetails-brief-watchlist">
            <button className="MovieDetails-brief-watchlist-button">
              <FontAwesomeIcon icon={faBookmark} size="lg" />
              <span className="MovieDetails-brief-watchlist-button-text">
                Watchlist
              </span>
            </button>
          </div>
          <div>
            <div className="MovieDetails-brief-title">
              Star Wars: Episode IV - A New Hope
            </div>
            <div className="MovieDetails-brief-short">
              <div className="MovieDetails-brief-rate">PG</div>
              <span>1980</span>
              <span>.</span>
              <span>Action, adventure, fantacy, Sci-Fi</span>
              <span>.</span>
              <span>124min</span>
            </div>
            <div className="MovieDetails-brief-cast">
              <div className="MovieDetails-brief-actors">
                Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing
              </div>
              <div className="MovieDetails-brief-director">By George Lucas</div>
            </div>
          </div>
        </div>
      </div>
      <div className="MovieDetails-plot">
        Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee
        and two droids to save the galaxy from the Empire's world-destroying
        battle station, while also attempting to rescue Princess Leia from the
        mysterious Darth Vader.
      </div>
      <div className="MovieDetails-ratings">
        <div className="MovieDetails-ratings-source">
          <div className="MovieDetails-ratings-value">8.7/10</div>
          <div className="MovieDetails-ratings-sourceName">Internet movie database</div>
        </div>
        <div className="MovieDetails-ratings-source">
          <div className="MovieDetails-ratings-value">94%</div>
          <div className="MovieDetails-ratings-sourceName">Rotten Tomatos</div>
        </div>
        <div className="MovieDetails-ratings-source">
          <div className="MovieDetails-ratings-value">82/100</div>
          <div className="MovieDetails-ratings-sourceName">Metacritics</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
