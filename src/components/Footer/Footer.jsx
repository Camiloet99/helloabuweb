import React from "react";
import logo from "../../assets/images/logo/logovertical.svg";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import facebookIcon from "../../assets/images/icons/socialmedia/Facebook.svg";
import instagramIcon from "../../assets/images/icons/socialmedia/Instagram.svg";
import linkedinIcon from "../../assets/images/icons/socialmedia/LinkedIn.svg";
import youtubeIcon from "../../assets/images/icons/socialmedia/Youtube.svg";

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
          <div className="social-logos">
            <a href="/" className="social-link">
              <img src={facebookIcon} alt="Facebook logo" />
            </a>
            <a href="/" className="social-link">
              <img src={instagramIcon} alt="Instagram logo" />
            </a>
            <a href="/" className="social-link">
              <img src={youtubeIcon} alt="Youtube logo" />
            </a>
            <a href="7" className="social-link">
              <img src={linkedinIcon} alt="Linkedin logo" />
            </a>
          </div>
          <span>{t("Footer.Rights")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
