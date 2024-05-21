import React from "react";
import "./_Button.scss";

function Button({
  label,
  onClick,
  width,
  height,
  variant,
  children,
  className,
}) {
  return (
    <button
      style={{ width, height }}
      className={`Button ${variant} ${className}`}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
}

export default Button;
