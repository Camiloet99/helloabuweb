import React, { useState } from "react";
import ReachSupport from "../../ReachSupport/ReachSupport";
import "./SignUp.scss";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <h1>Create an account</h1>
      <p>
        Connect with<span> certified helpers </span>now.
      </p>
      <div className="signup-content">
        <form>
          <div className="signup-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your Username"
              required
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
          <button type="button" className="google-button">
            Sign up with Google
          </button>
        </div>
        <p className="login-question">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      <ReachSupport />
    </div>
  );
};

export default SignUp;
