import { useState } from "react";
import Radio from "../Radio/Radio";

import "./TypeSelector.scss";

const TypeSelector = ({ onChange }) => {
  const [selected, setSelected] = useState("");

  const onTypeChange = (value) => {
    setSelected(value);
    onChange({ value, type: "type" });
  };

  return (
    <div className="Types">
      <span className="Types-title">Types</span>
      <div className="Types-radio">
        <Radio
          value=""
          selected={selected}
          text="Any"
          onChange={onTypeChange}
        />
        <Radio
          value="movie"
          selected={selected}
          text="Movies"
          onChange={onTypeChange}
        />
        <Radio
          value="series"
          selected={selected}
          text="Series"
          onChange={onTypeChange}
        />
        <Radio
          value="episode"
          selected={selected}
          text="Episodes"
          onChange={onTypeChange}
        />
      </div>
    </div>
  );
};

export default TypeSelector;
