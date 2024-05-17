import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Empowering your health at every step</h1>
          <p>
            Experience personalized medical care from the comfort of your home.
            Connect with <span>certified helpers</span> with ease.
          </p>
          <button>Book an Appointment {">"}</button>
        </div>
      </div>
      <div className="hero-booking">
        <BookAppointment />
      </div>
    </div>
  );
}

export default HeroSection;
