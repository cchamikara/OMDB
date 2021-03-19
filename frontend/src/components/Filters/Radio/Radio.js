import "./Radio.scss";

const Radio = ({ selected, onChange, text, value }) => {
  return (
    <div
      className="Radio"
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={`Radio-outerCircle ${
          value !== selected && "Radio-unselected"
        }`}
      >
        <div
          className={`Radio-innerCircle ${
            value !== selected && "Radio-unselectedCircle"
          }`}
        />
      </div>
      <div className="Radio-helpText">{text}</div>
    </div>
  );
};

export default Radio;
