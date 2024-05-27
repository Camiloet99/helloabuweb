import React, { useState } from "react";
import ReachSupport from "../../ReachSupport/ReachSupport";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/user/userActions";
import RedirectIfAuthenticated from "../../../utils/RedirectIfAuthenticated";
import "./Login.scss";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
    console.log("Logging in...");
    setLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    try {
      await dispatch(loginUser(userData));
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Hi, Welcome Back</h1>
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
          <div className="login-form-group password-group">
            <label htmlFor="password">Password</label>
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
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          <div className="login-form-group forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
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
                "Login"
              )}
            </button>
          </div>
        </form>
        <p className="or-with-separation">
          <span /> Or With
          <span />
        </p>
        <div className="login-social-buttons">
          <button type="button" className="facebook-button">
            Login with Facebook
          </button>
          <button type="button" className="google-button">
            Login with Google
          </button>
        </div>
        <p>
          Don't have an account? <Link to={"/helloabuweb/signup"}>Sign up</Link>
        </p>
      </div>

      <ReachSupport />
    </div>
  );
};

export default RedirectIfAuthenticated(Login);
