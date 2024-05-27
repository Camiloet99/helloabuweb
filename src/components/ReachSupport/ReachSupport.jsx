import React from "react";
import { useTranslation } from "react-i18next";
import name from "../../assets/images/icons/forms/firstname.svg";
import email from "../../assets/images/icons/forms/email.svg";
import "./ReachSupport.scss";

const ReachSupport = () => {
  const { t } = useTranslation("home");

  return (
    <div className="reach-support-section">
      <div className="reach-support-section-container">
        <h2>{t("ReachSupport.Title")}</h2>
        <p>{t("ReachSupport.Description")}</p>
        <form action="">
          <div className="reach-support-content">
            <div className="label-content">
              <img src={name} alt="name logo" />
              <label htmlFor="first-name">{t("ReachSupport.NameLabel")}</label>
            </div>
            <input
              type="text"
              id="first-name"
              placeholder={t("ReachSupport.FirstNamePlaceholder")}
            />
          </div>
          <div className="reach-support-content">
            <div className="label-content">
              <img src={email} alt="email logo" />
              <label htmlFor="email">{t("ReachSupport.EmailLabel")}</label>
            </div>
            <input
              type="email"
              id="support-email"
              placeholder={t("ReachSupport.EmailPlaceholder")}
            />
          </div>
          <button>{t("ReachSupport.ContactButton")}</button>
        </form>
      </div>
    </div>
  );
};

export default ReachSupport;
