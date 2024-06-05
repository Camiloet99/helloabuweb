import { useTranslation } from "react-i18next";
import React from "react";
import "./ConfirmationModal.scss";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  const { t } = useTranslation("common");

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="yes">{t("ConfirmationModal.affirmative")}</button>
          <button onClick={onCancel} className="cancel">{t("ConfirmationModal.negative")}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
