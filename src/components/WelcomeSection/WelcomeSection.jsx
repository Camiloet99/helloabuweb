import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import "./WelcomeSection.scss";

const WelcomeSection = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>Empowering your health at every step</h1>
          <p>
            Experience personalized medical care from the comfort of your home.
            Connect with <span>certified helpers</span> with ease.
          </p>
          <button>Book an Appointment {">"}</button>
        </div>
      </div>
      <div className="welcome-booking">
        <BookAppointment />
      </div>
    </div>
  );
};

export default WelcomeSection;
