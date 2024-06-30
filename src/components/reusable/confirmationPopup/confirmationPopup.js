// components/reusable/ConfirmationPopup.js
import React from 'react';
import './confirmationPopup.scss';

const ConfirmationPopup = ({ show, message, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="confirmation-popup-overlay">
      <div className="confirmation-popup">
        <p>{message}</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm} className="confirm-button">Yes</button>
          <button onClick={onCancel} className="cancel-button">No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
