import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

import "./Search.scss";

const Search = () => {
  return (
    <div className="Search">
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <input
        className="Search-input"
        type="text"
        placeholder="Search movie title..."
      />
    </div>
  );
};

export default Search;
