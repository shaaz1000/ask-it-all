import React, { useState, useEffect } from "react";
import "./Snackbar.scss";

const Snackbar = ({ message, color, icon, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="snackbar" style={{ backgroundColor: color }}>
      {icon && <span className="snackbar-icon">{icon}</span>}
      <span>{message}</span>
    </div>
  );
};

export default Snackbar;
