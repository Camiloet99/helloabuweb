import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header-navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#find-helpers">Find Helpers</a>
          <a href="#about-us">About us</a>
          <a href="#contact-us">Contact us</a>
        </nav>
        <button className="header-join-us">Join us</button>
      </div>
    </header>
  );
}

export default Header;
