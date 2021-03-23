import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMovies } from "../../store/actions";
import config from "../../config";

import Search from "../Search/Search";
import YearSelector from "../Filters/YearSelector/YearSelector";
import TypeSelector from "../Filters/TypeSelector/TypeSelector";

import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();

  const { min, max } = config.yearRange;

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
      dispatch(fetchMovies(searchData));
    }
  }, [searchData, dispatch]);

  return (
    <div className="Header">
      <div className="Header-search">
        <Search onChange={onChange} />
      </div>
      <div className="Header-filters">
        <YearSelector onChange={onChange} />
        <TypeSelector onChange={onChange} />
      </div>
    </div>
  );
};

export default Header;
