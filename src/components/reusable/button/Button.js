import React from "react";
import "./_Button.scss";

function Button({
  label,
  onClick,
  width,
  height,
  color = "white",
  fontColor = "black",
}) {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor: color,
        paddingTop: 5,
        paddingBottom: 5,
        color: fontColor,
      }}
      className="Button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
