import React from "react";
import "./_Button.scss";

function Button({ label, onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
