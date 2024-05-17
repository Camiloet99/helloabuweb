import React from "react";
import nurse from "../../assets/images/doctor.png";
import { useTranslation } from "react-i18next";
import "./PlatformWorks.scss";

const PlatformWorks = () => {
  const { t } = useTranslation("home");

  return (
    <div className="platform-section">
      <div className="platform-section-content">
        <div className="platform-text">
          <h2
            dangerouslySetInnerHTML={{ __html: t("PlatformWorks.Title") }}
          ></h2>
          <p>{t("PlatformWorks.Description")}</p>
        </div>
        <div className="platform-steps">
          <ul className="platform-steps-list">
            <li>
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("PlatformWorks.Step1Title"),
                }}
              ></h3>
              <p>{t("PlatformWorks.Step1Description")}</p>
            </li>
            <li>
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("PlatformWorks.Step2Title"),
                }}
              ></h3>
              <p>{t("PlatformWorks.Step2Description")}</p>
            </li>
            <li>
              <h3
                dangerouslySetInnerHTML={{
                  __html: t("PlatformWorks.Step3Title"),
                }}
              ></h3>
              <p>{t("PlatformWorks.Step3Description")}</p>
            </li>
            <span className="steps-line" />
          </ul>
          <div className="steps-image">
            <img src={nurse} alt="nurse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformWorks;
