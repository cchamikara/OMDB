import { useSelector } from "react-redux";
import config from "../../config";

import { Navigation, Movie } from "../index";
import "./Content.scss";

const Content = () => {
  const data = useSelector((state) => state);
  console.log(data);

  const RenderContent = ({ isLoading, searchString, movies }) => {
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
    } else if (movies.Response === "False") {
      return <div className="Notifications">{movies.Error}</div>;
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
