import React from "react";
import { useTranslation } from "react-i18next";
import email from "../../assets/images/icons/forms/email.svg";
import phone from "../../assets/images/icons/forms/email.svg";
import calendar from "../../assets/images/icons/forms/calendar.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./BookAppointment.scss";

const BookAppointment = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("home");
  const user = useSelector((state) => state.user);

  return (
    <div className="appointment-card">
      <h2>{t("BookAppointment.Title")}</h2>
      <form className="appointment-card-form">
        <div className="input-content">
          <div className="label-content">
            <img src={email} alt="email logo" />
            <label htmlFor="email">{t("BookAppointment.EmailLabel")}</label>
          </div>
          <input
            id="booking-email"
            type="email"
            placeholder={t("BookAppointment.EmailPlaceholder")}
          />
        </div>
        <div className="input-content">
          <div className="label-content">
            <img src={phone} alt="email logo" />
            <label htmlFor="contact">{t("BookAppointment.ContactLabel")}</label>
          </div>
          <input
            id="contact"
            type="text"
            placeholder={t("BookAppointment.ContactPlaceholder")}
          />
        </div>
        <div className="input-content">
          <div className="label-content">
            <img src={calendar} alt="email logo" />
            <label htmlFor="date">{t("BookAppointment.DateLabel")}</label>
          </div>
          <input
            id="date"
            type="date"
            placeholder={t("BookAppointment.DatePlaceholder")}
          />
        </div>
        <div className="input-content bookNow">
          <button type="submit">{t("BookAppointment.BookNowButton")}</button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
