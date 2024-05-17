import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logovertical.png";
//import facebookIcon from "./path-to-facebook-icon.svg";
//import twitterIcon from "./path-to-twitter-icon.svg";
//import linkedinIcon from "./path-to-linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>Getting Started</li>
                <li>FAQ</li>
                <li>Report an Issue</li>
                <li>Contact Help Desk</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Booking Appointments</li>
                <li>Online Consultations</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Trust Center</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="cut-line" />
        <div className="footer-socials">
          <div>social media</div>
          <span>Hello Abu 2024 © All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
