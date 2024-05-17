import React from "react";
import ServiceCard from "../atoms/ServiceCard/ServiceCard";
import abu1 from "../../assets/images/servicecards/abu1.jpg";
import abu2 from "../../assets/images/servicecards/abu2.jpg";
import { useTranslation } from "react-i18next";
import "./HomeServices.scss";

const HomeServices = () => {
  const { t } = useTranslation("home");

  return (
    <div className="home-services">
      <div className="home-services-container">
        <h1
          className="home-services-title"
          dangerouslySetInnerHTML={{
            __html: t("HomeServices.Title"),
          }}
        />
        <p className="home-services-description">
          {t("HomeServices.Description")}
        </p>
        <div className="home-services-cards-container">
          <ServiceCard
            imageSrc={abu1}
            title={t("HomeServices.OnlineConsultTitle")}
            description={t("HomeServices.OnlineConsultations")}
          />
          <ServiceCard
            imageSrc={abu2}
            title={t("HomeServices.BookingTitle")}
            description={t("HomeServices.BookAppointments")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
