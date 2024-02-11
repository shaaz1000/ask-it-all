import React from "react";
import "./_Button.scss";

function Button({ label, onClick, width, height }) {
  return (
    <button style={{ width, height }} className="Button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
