import React from "react";
import { useTranslation } from "react-i18next";
import "./BookAppointment.scss";

const BookAppointment = () => {
  const { t } = useTranslation("home");

  return (
    <div className="appointment-card">
      <h2>{t("BookAppointment.Title")}</h2>
      <form className="appointment-card-form">
        <div className="input-content">
          <label htmlFor="email">{t("BookAppointment.EmailLabel")}</label>
          <input
            id="email"
            type="email"
            placeholder={t("BookAppointment.EmailPlaceholder")}
          />
        </div>
        <div className="input-content">
          <label htmlFor="contact">{t("BookAppointment.ContactLabel")}</label>
          <input
            id="contact"
            type="text"
            placeholder={t("BookAppointment.ContactPlaceholder")}
          />
        </div>
        <div className="input-content">
          <label htmlFor="date">{t("BookAppointment.DateLabel")}</label>
          <input
            id="date"
            type="date"
            placeholder={t("BookAppointment.DatePlaceholder")}
          />
        </div>
        <div className="input-content">
          <button type="submit" className="bookNow">
            {t("BookAppointment.BookNowButton")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
