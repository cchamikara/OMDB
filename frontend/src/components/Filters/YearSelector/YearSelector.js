import { useState } from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";
import "./YearSelector.scss";

const YearSelector = () => {
  const [value, setValue] = useState({
    min: 1970,
    max: 2015,
  });

  return (
    <div className="YearSelector">
      <span className="YearSelector-title">Year</span>
      <div className="YearSelector-Slider">
        <span className="YearSelector-Slider-label">{value.min}</span>
        <InputRange
          maxValue={2021}
          minValue={1950}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <span className="YearSelector-Slider-label">{value.max}</span>
      </div>
    </div>
  );
};

export default YearSelector;
