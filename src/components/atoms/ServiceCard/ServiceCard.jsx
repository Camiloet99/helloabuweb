import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ imageSrc, description, title }) => {
  return (
    <div className="service-card">
      <div className="service-container">
        <img src={imageSrc} alt="Consultation" />
        <div className="service-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
