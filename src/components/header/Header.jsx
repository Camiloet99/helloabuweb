import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png"; // Asegúrate de que la ruta sea correcta

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#find-helpers">Find Helpers</a>
        <a href="#about-us">About us</a>
        <a href="#contact-us">Contact us</a>
      </nav>
      <button className="join-us">Join us</button>
    </header>
  );
}

export default Header;
