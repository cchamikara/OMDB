import Search from "../Search/Search";
import YearSelector from "../Filters/YearSelector/YearSelector";
import TypeSelector from "../Filters/TypeSelector/TypeSelector";

import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-search">
        <Search />
      </div>
      <div className="Header-filters">
        <YearSelector />
        <TypeSelector />
      </div>
    </div>
  );
};

export default Header;
