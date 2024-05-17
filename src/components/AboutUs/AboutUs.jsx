import React from "react";
import happyabu from "../../assets/images/aboutus/happyabu.jpg";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="about-us-section">
      <h1>
        <span>Hello Abu Story:</span> Get to know us
      </h1>
      <div className="about-us-section-container">
        <div className="about-us-section-content">
          <img src={happyabu} alt="about-us-happy" />
          <div className="about-us-section-content-text">
            <p>
              Hello Abu transcends the typical online medical service by
              embodying a movement aimed at delivering accessible, efficient,
              and compassionate healthcare for abus. Our plataform rests on
              trust, innovation, and a focus on the patient, ensuring each
              interaction is tailored to individual needs. Featuring a wide
              network of licensed professionals across various medical
              specialties, we provide thorough care that is easily accessible
              with just a click
            </p>
            <button>Learn more about us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
