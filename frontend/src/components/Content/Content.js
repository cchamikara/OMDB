import { useSelector } from "react-redux";
import config from "../../config";

import { Navigation, Movie } from "../index";
import "./Content.scss";

const Content = () => {
  const data = useSelector((state) => state);

  const RenderContent = ({ isLoading, searchString, response, error }) => {
    if (isLoading) {
      return <div className="Notifications">Loading...</div>;
    } else if (!searchString.length) {
      return <div className="Notifications">Start typing a movie title</div>;
    } else if (searchString.length < config.minTitleLength) {
      return (
        <div className="Notifications">
          Movie title should be {config.minTitleLength} characters or more
        </div>
      );
    } else if (response === "False") {
      return <div className="Notifications">{error}</div>;
    } else {
      return (
        <>
          <Navigation />
          <Movie />
        </>
      );
    }
  };

  return (
    <>
      <RenderContent {...data} />
    </>
  );
};

export default Content;
