import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import { useTranslation } from "react-i18next";
import "./WelcomeSection.scss";

const WelcomeSection = () => {
  const { t } = useTranslation("home");

  return (
    <div className="welcome-container">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>{t("WelcomeSection.Title")}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: t("WelcomeSection.Description"),
            }}
          />
          <button>{t("WelcomeSection.BookButton")}</button>
        </div>
      </div>
      <div className="welcome-booking">
        <BookAppointment />
      </div>
    </div>
  );
};

export default WelcomeSection;
