import React from "react";
import { useTranslation } from "react-i18next";
import "./WhyUs.scss";

const WhyUs = () => {
  const { t } = useTranslation("home");

  return (
    <div className="why-us-section">
      <div className="why-us-content">
        <div className="why-us-image"></div>
        <div className="why-us-text">
          <h3 dangerouslySetInnerHTML={{ __html: t("WhyUs.Title") }}></h3>
          <h2 dangerouslySetInnerHTML={{ __html: t("WhyUs.SubTitle") }}></h2>
          <p dangerouslySetInnerHTML={{ __html: t("WhyUs.Description") }}></p>
          <div className="why-us-values">
            <div
              className="why-us-value"
              dangerouslySetInnerHTML={{ __html: t("WhyUs.QualitySupport") }}
            ></div>
            <div
              className="why-us-value"
              dangerouslySetInnerHTML={{ __html: t("WhyUs.ElderCare") }}
            ></div>
            <div
              className="why-us-value"
              dangerouslySetInnerHTML={{ __html: t("WhyUs.CaringStaff") }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
