import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { updateMovieTitle } from "../../store/actions";

import config from "../../config";

import "./Search.scss";

const Search = ({ onChange }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(
    debounce((value) => {
      dispatch(updateMovieTitle({ title: value }));
      if (value.length >= config.minTitleLength) {
        onChange({ value, type: "title" });
      }
    }, config.debounce),
    []
  );

  const handleOnChange = (event) => {
    const title = event.target.value.trim();
    delayedQuery(title);
  };

  return (
    <div className="Search">
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <input
        className="Search-input"
        type="text"
        placeholder="Search movie title..."
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Search;
