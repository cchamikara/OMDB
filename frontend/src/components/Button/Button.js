import "./Button.scss";

const Button = ({ children, onClick, selected }) => {
  return (
    <button
      className={`Button ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
