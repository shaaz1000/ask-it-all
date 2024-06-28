import React from "react";
import "./modal.scss"; // Ensure the CSS file is imported

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
