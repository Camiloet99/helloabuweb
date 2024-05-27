import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../../api/bookings/bookingsApi";
import "./WelcomeSection.scss";

const WelcomeSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("home");
  const user = useSelector((state) => state.user);

  const handleBooking = async () => {
    if (user?.fullName) {
      const booking = {
        userId: user?.userId,
        userName: user?.fullName,
      };
      const response = await createBooking(booking);
      console.log(response);
    } else {
      navigate("/helloabuweb/login");
    }
  };

  return (
    <div className="welcome-container">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>{t("WelcomeSection.Title")}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: t("WelcomeSection.Description"),
            }}
          />
          <button onClick={() => handleBooking()}>
            {t("WelcomeSection.BookButton")}
          </button>
        </div>
      </div>
      <div className="welcome-booking">
        <BookAppointment />
      </div>
    </div>
  );
};

export default WelcomeSection;
