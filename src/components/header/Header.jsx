import React from "react";
import { useTranslation } from "react-i18next"; 
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logohorizontal.svg";
import "./Header.scss";
import "./../../i18n";

function Header() {
  const { t, i18n } = useTranslation("header"); // Utilizamos t para la traducción y i18n para cambiar el idioma
  const navigate = useNavigate();

  // Función para cambiar el idioma
  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Cambia el idioma utilizando i18n
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header-navigation">
          <a href="#home">{t("Home")}</a>
          <a href="#services">{t("Services")}</a>
          <a href="#find-helpers">{t("Find Helpers")}</a>
          <a href="#about-us">{t("About us")}</a>
          <a href="#contact-us">{t("Contact us")}</a>
        </nav>
        <button className="header-join-us" onClick={() => navigate("/helloabuweb/signup")}>{t("Join us")}</button>
        <div className="language-switcher">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("es")}>ES</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
