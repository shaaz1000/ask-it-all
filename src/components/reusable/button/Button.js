import React from "react";
import "./_Button.scss";

function Button({ label, onClick, width, height, variant }) {
  return (
    <button
      style={{ width, height }}
      className={`Button ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
