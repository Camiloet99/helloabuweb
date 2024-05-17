import React from "react";
import { useTranslation } from "react-i18next";
import "./ReachSupport.scss";

const ReachSupport = () => {
  const { t } = useTranslation("home");

  return (
    <div className="reach-support-section">
      <div className="reach-support-section-container">
        <h1>{t("ReachSupport.Title")}</h1>
        <p>{t("ReachSupport.Description")}</p>
        <form action="">
          <input
            type="text"
            placeholder={t("ReachSupport.FirstNamePlaceholder")}
          />
          <input
            type="email"
            placeholder={t("ReachSupport.EmailPlaceholder")}
          />
          <button>{t("ReachSupport.ContactButton")}</button>
        </form>
      </div>
    </div>
  );
};

export default ReachSupport;
