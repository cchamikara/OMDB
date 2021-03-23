import { useState } from "react";
import InputRange from "react-input-range";

import config from "../../../config";
import "react-input-range/lib/css/index.css";

import "./YearSelector.scss";

const YearSelector = ({ onChange }) => {
  const [value, setValue] = useState(config.yearRange);

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
          onChangeComplete={(value) => {
            const { min, max } = value;
            onChange({ value: `${min}-${max}`, type: "year" });
          }}
        />
        <span className="YearSelector-Slider-label">{value.max}</span>
      </div>
    </div>
  );
};

export default YearSelector;
