import { useState } from "react";
import Radio from "../Radio/Radio";

import "./TypeSelector.scss";

const TypeSelector = () => {
  const [selected, setSelected] = useState("any");

  console.log(selected);

  return (
    <div className="Types">
      <span className="Types-title">Types</span>
      <div className="Types-radio">
        <Radio
          value="any"
          selected={selected}
          text="Any"
          onChange={setSelected}
        />
        <Radio
          value="movies"
          selected={selected}
          text="Movies"
          onChange={setSelected}
        />
        <Radio
          value="series"
          selected={selected}
          text="Series"
          onChange={setSelected}
        />
        <Radio
          value="episodes"
          selected={selected}
          text="Episodes"
          onChange={setSelected}
        />
      </div>
    </div>
  );
};

export default TypeSelector;
