import React, { useState } from "react";
import ReachSupport from "../../ReachSupport/ReachSupport";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/user/userActions";
import RedirectIfAuthenticated from "../../../utils/RedirectIfAuthenticated";
import visibleIcon from "../../../assets/images/icons/forms/eyeopen.svg";
import invisibleIcon from "../../../assets/images/icons/forms/eyeclosed.svg";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation("login");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    try {
      await dispatch(loginUser(userData));
      navigate("/helloabuweb");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>{t("LoginTitle")}</h1>
      <div className="login-content">
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              onChange={handleEmailChange}
              required
              placeholder="example@email.com"
            />
          </div>
          <div className="login-form-group ">
            <label htmlFor="password">{t("Password")}</label>
            <div className="password-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={handlePasswordChange}
                required
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
          </div>
          <div className="login-form-group forgot-password">
            <a href="/forgot-password">{t("ForgotPassword")}</a>
          </div>
          <div className="login-form-group">
            <button type="submit" className="login-button">
              {loading ? (
                <ThreeDots
                  visible={true}
                  height="30"
                  width="30"
                  color="#1d352e"
                  radius="4"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                t("Login")
              )}
            </button>
          </div>
        </form>
        <p className="or-with-separation">
          <span /> {t("Separator")}
          <span />
        </p>
        <div className="login-social-buttons">
          <button type="button" className="facebook-button">
            {t("Facebook")}
          </button>
          <button type="button" className="google-button">
            {t("Google")}
          </button>
        </div>
        <p className="signup-question">
          {t("DontHaveAccount")}{" "}
          <Link to={"/helloabuweb/signup"}>{t("SignUp")}</Link>
        </p>
      </div>

      <ReachSupport />
    </div>
  );
};

export default RedirectIfAuthenticated(Login);
