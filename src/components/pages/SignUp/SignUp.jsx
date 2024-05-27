import React, { useState } from "react";
import ReachSupport from "../../ReachSupport/ReachSupport";
import { registerUser } from "../../../api/users/usersApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RedirectIfAuthenticated from "../../../utils/RedirectIfAuthenticated";
import "./SignUp.scss";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,}$/;
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordRegex.test(userData.password)) {
      setPasswordError(
        "The password must be at least 6 characters long, contain an uppercase letter, and a symbol"
      );
      return;
    }

    registerUser(userData);
    navigate("/helloabuweb/login");
  };

  const handleRegisterWithGoogle = () => {
    console.log("To be implemented...");
  };

  return (
    <div className="signup-container">
      <h1>Create an account</h1>
      <p>
        Connect with<span> certified helpers </span>now.
      </p>
      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userData.userName}
              onChange={handleChange}
              placeholder="Enter Your Username"
              required
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              required
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              required
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="signup-form-group signup-password-group">
            <label htmlFor="password">Password</label>
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
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
          </div>
          <div className="signup-form-group">
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </form>
        <div className="or-with-separation">
          <span />
          <p>Or With</p>
          <span />
        </div>
        <div className="signup-social-buttons">
          <button type="button" className="facebook-button">
            Sign up with Facebook
          </button>
          <button
            type="button"
            className="google-button"
            onClick={handleRegisterWithGoogle}
          >
            Sign up with Google
          </button>
        </div>
        <p className="login-question">
          Already have an account? <Link to="/helloabuweb/login">Login</Link>
        </p>
      </div>
      <ReachSupport />
    </div>
  );
};

export default RedirectIfAuthenticated(SignUp);
