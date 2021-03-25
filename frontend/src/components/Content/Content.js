import { useSelector } from "react-redux";
import config from "../../config";

import { Navigation, Movie, WatchList } from "../index";
import "./Content.scss";

const Content = () => {
  const data = useSelector((state) => state);

  const RenderContent = ({ searchString, response, error, isNetworkError }) => {
    if (!searchString.length) {
      return <div className="Notifications">Start typing a movie title</div>;
    } else if (searchString.length < config.minTitleLength) {
      return (
        <div className="Notifications">
          Movie title should be {config.minTitleLength} characters or more
        </div>
      );
    } else if (response === "False") {
      return <div className="Notifications">{error}</div>;
    } else if (isNetworkError) {
      return (
        <div className="Notifications">
          Can't connect to the server, please check your connection
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {data.isWatchList ? (
        <WatchList />
      ) : (
        <>
          <RenderContent {...data} />
          <Navigation />
          <Movie />
        </>
      )}
    </>
  );
};

export default Content;
