import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/logo/logohorizontal.svg";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/user/userActions";
import { animated, useTransition } from "@react-spring/web";
import "./Header.scss";
import "./../../i18n";

function Header() {
  const { t, i18n } = useTranslation("header");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const transitions = useTransition(isMenuVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Logo" onClick={() => navigate("")} />
        </div>
        <nav className="header-navigation">
          <Link to={"/"}>{t("Home")}</Link>
          <a href="#services">{t("Services")}</a>
          <a href="#find-helpers">{t("Find Helpers")}</a>
          <a href="#about-us">{t("About us")}</a>
          <a href="#contact-us">{t("Contact us")}</a>
        </nav>
        <div className="mobile-menu-button" onClick={toggleMenu}>
          &#9776; {/* Icono de menú */}
        </div>
        {transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles} className="mobile-menu">
                <Link to={"/"}>{t("Home")}</Link>
                <a href="#services">{t("Services")}</a>
                <a href="#contact-us">{t("Contact us")}</a>
                <Link to={"/login"}>{t("Login")}</Link>
                <Link to={"/signup"}>{t("Join us")}</Link>
              </animated.div>
            )
        )}
        {user.email ? (
          <div className="user-dropdown">
            <span className="user-name">
              {user?.fullName}
              <div className="dropdown-content">
                <Link to="/profile">{t("Profile")}</Link>
                <Link to="/preferences">{t("Preferences")}</Link>
                <Link to="/help">{t("Help")}</Link>
                <button onClick={handleLogout} className="logout-button">
                  {t("Logout")}
                </button>
              </div>
            </span>
          </div>
        ) : (
          <div className="login-buttons">
            <button
              className="header-join-us join-us"
              onClick={() => navigate("/signup")}
            >
              {t("Join us")}
            </button>
            <button
              className="header-join-us login"
              onClick={() => navigate("/login")}
            >
              {t("Login")}
            </button>
          </div>
        )}
        <div className="language-switcher">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("es")}>ES</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
