import React from "react";
import "./ConfirmationModal.scss";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="yes">Yes</button>
          <button onClick={onCancel} className="cancel">No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
