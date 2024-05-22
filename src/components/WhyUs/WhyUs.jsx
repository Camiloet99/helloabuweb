import React from "react";
import { useTranslation } from "react-i18next";
import collage from "../../assets/images/abucollage.png";
import quality from "../../assets/images/icons/qualitysupport.svg";
import elder from "../../assets/images/icons/eldercare.svg";
import caring from "../../assets/images/icons/caringstaff.svg";
import "./WhyUs.scss";

const WhyUs = () => {
  const { t } = useTranslation("home");

  return (
    <div className="why-us-section">
      <div className="why-us-content">
        <div className="why-us-image">
          <img src={collage} alt="Abu collection happy" />
        </div>
        <div className="why-us-text">
          <h3 dangerouslySetInnerHTML={{ __html: t("WhyUs.Title") }}></h3>
          <h2 dangerouslySetInnerHTML={{ __html: t("WhyUs.SubTitle") }}></h2>
          <p dangerouslySetInnerHTML={{ __html: t("WhyUs.Description") }}></p>
          <div className="why-us-values">
            <div className="why-us-value">
              <span>
                <img src={quality} alt="Quality logo" />
              </span>
              {t("WhyUs.QualitySupport")}
            </div>
            <div className="why-us-value">
            <span>
                <img src={elder} alt="Elder logo" />
              </span>
              {t("WhyUs.ElderCare")}
            </div>
            <div className="why-us-value">
            <span>
                <img src={caring} alt="Caring logo" />
              </span>
              {t("WhyUs.CaringStaff")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
