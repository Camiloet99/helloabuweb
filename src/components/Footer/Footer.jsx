import React from "react";
import logo from "../../assets/images/logovertical.png";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
//import facebookIcon from "./path-to-facebook-icon.svg";
//import twitterIcon from "./path-to-twitter-icon.svg";
//import linkedinIcon from "./path-to-linkedin-icon.svg";

const Footer = () => {
  const { t } = useTranslation("home");

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h4>{t("Footer.SupportTitle")}</h4>
              <ul>
                <li>{t("Footer.GettingStarted")}</li>
                <li>{t("Footer.FAQ")}</li>
                <li>{t("Footer.ReportIssue")}</li>
                <li>{t("Footer.ContactHelpDesk")}</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{t("Footer.ServicesTitle")}</h4>
              <ul>
                <li>{t("Footer.BookingAppointments")}</li>
                <li>{t("Footer.OnlineConsultations")}</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>{t("Footer.LegalTitle")}</h4>
              <ul>
                <li>{t("Footer.TermsConditions")}</li>
                <li>{t("Footer.PrivacyPolicy")}</li>
                <li>{t("Footer.TrustCenter")}</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="cut-line" />
        <div className="footer-socials">
          <div>{t("Footer.SocialMedia")}</div>
          <span>{t("Footer.Rights")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
