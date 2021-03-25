import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import {
  fetchMovies,
  updateSearchData,
  toggleWatchList,
} from "../../store/actions";
import config from "../../config";

import { Search, YearSelector, TypeSelector, Button } from "../";

import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { min, max } = config.yearRange;

  const { isWatchList } = useSelector((state) => state);
  const [searchData, setSearchData] = useState({
    title: "",
    year: `${min}-${max}`,
    type: "",
  });

  const onChange = ({ type, value }) => {
    setSearchData({
      ...searchData,
      [type]: value,
    });
  };

  useEffect(() => {
    const { title } = searchData;
    if (title) {
      dispatch(fetchMovies({ ...searchData, newSearch: true }));
      dispatch(updateSearchData(searchData));
    }
  }, [searchData, dispatch]);

  return (
    <div className="Header">
      <div className="Header-search">
        <Search onChange={onChange} />
        <div className="Header-watchList">
          <Button
            selected={isWatchList}
            onClick={() => dispatch(toggleWatchList(!isWatchList))}
          >
            <FontAwesomeIcon icon={faBookmark} size="lg" />
            <span>Watchlist</span>
          </Button>
        </div>
      </div>
      <div className="Header-filters">
        <YearSelector onChange={onChange} />
        <TypeSelector onChange={onChange} />
      </div>
    </div>
  );
};

export default Header;
