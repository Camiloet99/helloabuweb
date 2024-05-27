import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/logo/logohorizontal.svg";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/user/userActions";
import "./Header.scss";
import "./../../i18n";

function Header() {
  const { t, i18n } = useTranslation("header");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/helloabuweb");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Logo" onClick={() => navigate("/helloabuweb")} />
        </div>
        <nav className="header-navigation">
          <Link to={"/helloabuweb/"}>{t("Home")}</Link>
          <a href="#services">{t("Services")}</a>
          <a href="#find-helpers">{t("Find Helpers")}</a>
          <a href="#about-us">{t("About us")}</a>
          <a href="#contact-us">{t("Contact us")}</a>
        </nav>
        {user.email ? (
          <div className="user-dropdown">
            <span className="user-name">{user?.fullName}</span>
            <div className="dropdown-content">
              <Link to="/profile">{t("Profile")}</Link>
              <Link to="/preferences">{t("Preferences")}</Link>
              <Link to="/help">{t("Help")}</Link>
              <button onClick={handleLogout} className="logout-button">
                {t("Logout")}
              </button>
            </div>
          </div>
        ) : (
          <div className="login-buttons">
            <button
              className="header-join-us"
              onClick={() => navigate("/helloabuweb/signup")}
            >
              {t("Join us")}
            </button>
            <button
              className="header-join-us"
              onClick={() => navigate("/helloabuweb/login")}
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
