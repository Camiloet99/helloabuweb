import React from "react";
import ServiceCard from "../atoms/ServiceCard/ServiceCard";
import abu1 from "../../assets/images/servicecards/abu1.jpg";
import abu2 from "../../assets/images/servicecards/abu2.jpg";
import calendar from "../../assets/images/icons/forms/calendar.svg";
import camera from "../../assets/images/icons/onlineconsultations.svg";
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
            logo={camera}
            title={t("HomeServices.OnlineConsultTitle")}
            description={t("HomeServices.OnlineConsultations")}
          />
          <ServiceCard
            imageSrc={abu2}
            logo={calendar}
            title={t("HomeServices.BookingTitle")}
            description={t("HomeServices.BookAppointments")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
