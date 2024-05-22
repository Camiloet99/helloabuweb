import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ imageSrc, description, title, logo }) => {
  return (
    <div className="service-card">
      <div className="service-container">
        <img src={imageSrc} alt="Consultation" className="background-image"/>
        <div className="service-info">
          <div className="service-info-logo">
            <img src={logo} alt="service-logo" />
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
