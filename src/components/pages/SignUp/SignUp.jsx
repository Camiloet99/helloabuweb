import React, { useState, useEffect } from "react";
import ReachSupport from "../../ReachSupport/ReachSupport";
import { registerUser } from "../../../api/users/usersApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RedirectIfAuthenticated from "../../../utils/RedirectIfAuthenticated";
import visibleIcon from "../../../assets/images/icons/forms/eyeopen.svg";
import invisibleIcon from "../../../assets/images/icons/forms/eyeclosed.svg";
import "./SignUp.scss";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState();

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: countryCode,
    userRole: "abu",
  });
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,}$/;
  const [passwordError, setPasswordError] = useState("");
  const { t } = useTranslation("signup");
  const [signupError, setSignupError] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRegex.test(userData.password)) {
      setPasswordError(
        "The password must be at least 6 characters long, contain an uppercase letter, and a symbol"
      );
      return;
    }
    userData.phoneNumber = countryCode;
    await registerUser(
      userData,
      () => navigate("/helloabuweb/login"),
      setSignupError
    );
  };

  const handleRegisterWithGoogle = () => {
    console.log("To be implemented...");
  };

  useEffect(() => {
    setTimeout(() => {
      setSignupError("");
    }, 7000);
  }, [signupError]);

  return (
    <div className="signup-container">
      <h1>{t("SignUpTitle")}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: t("SignUpSubtitle"),
        }}
      />
      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label htmlFor="Name">{t("FormName")}</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              required
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="email">{t("FormEmail")}</label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="phone">{t("FormPhone")}</label>
            <PhoneInput
              international
              defaultCountry="US"
              value={countryCode}
              placeholder="Enter Your Phone Number"
              onChange={setCountryCode}
            />
          </div>
          <div className="signup-form-group ">
            <label htmlFor="password">{t("FormPassword")}</label>
            <div className="signup-password-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
                placeholder="Enter Your Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password-visibility"
              >
                <img
                  src={showPassword ? invisibleIcon : visibleIcon}
                  alt="password visibility"
                />
              </button>
            </div>

            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>
          <div className="signup-form-group">
            <button type="submit" className="signup-button">
              {t("SignUp")}
            </button>
            {signupError ? (
              <p className="signup-error">{signupError}</p>
            ) : (
              <></>
            )}
          </div>
        </form>
        <div className="or-with-separation">
          <span />
          <p>{t("Separator")}</p>
          <span />
        </div>
        <div className="signup-social-buttons">
          <button type="button" className="facebook-button">
            {t("Facebook")}
          </button>
          <button
            type="button"
            className="google-button"
            onClick={handleRegisterWithGoogle}
          >
            {t("Google")}
          </button>
        </div>
        <p className="login-question">
          {t("HaveAccount")} <Link to="/helloabuweb/login">{t("Login")}</Link>
        </p>
      </div>
      <ReachSupport />
    </div>
  );
};

export default RedirectIfAuthenticated(SignUp);
