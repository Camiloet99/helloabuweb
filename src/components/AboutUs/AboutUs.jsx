import React from "react";
import happyabu from "../../assets/images/aboutus/happyabu.jpg";
import { useTranslation } from "react-i18next";
import "./AboutUs.scss";

function AboutUs() {
  const { t } = useTranslation("home");

  return (
    <div className="about-us-section">
      <h1 dangerouslySetInnerHTML={{ __html: t("AboutUs.Title") }}></h1>
      <div className="about-us-section-container">
        <div className="about-us-section-content">
          <div className="about-us-section-image">
            <img src={happyabu} alt="about-us-happy" />
          </div>
          <div className="about-us-section-content-text">
            <p>{t("AboutUs.Description")}</p>
            <button>{t("AboutUs.LearnMoreButton")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
