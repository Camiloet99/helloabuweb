import React from "react";
import "./HomeServices.scss";
import ServiceCard from "../atoms/ServiceCard/ServiceCard";
import abu1 from "../../assets/images/servicecards/abu1.jpg";
import abu2 from "../../assets/images/servicecards/abu2.jpg";

const HomeServices = () => {
  return (
    <div className="home-services">
      <h1 className="title">
        Top <span>services</span> we offer
      </h1>
      <p className="description">
        In today’s fast-paced world, your health deserves the utmost attention
        and convenience. That’s why Hello Abu offers a suite of integrated
        services designed to cater to your healthcare needs digitally:
      </p>
      <div className="cards-container">
        <ServiceCard
          imageSrc={abu1}
          title="Online Consultations"
          description="Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation."
        />
        <ServiceCard
          imageSrc={abu2}
          title="Book Appointments"
          description="Choose the best time for a call with our easy-to-use scheduling system, or proceed with our online consultation features."
        />
      </div>
    </div>
  );
};

export default HomeServices;
