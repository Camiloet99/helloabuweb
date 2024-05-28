import React, { useState } from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContactModal from "../ContactModal/ContactModal";
import "./WelcomeSection.scss";

const WelcomeSection = () => {
  const { t } = useTranslation("home");
  const user = useSelector((state) => state.user);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    if (user?.fullName) {
      setModalOpen(true);
    } else {
      navigate("/helloabuweb/login");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
          <button onClick={handleOpenModal}>
            {t("WelcomeSection.BookButton")}
          </button>
        </div>
      </div>
      <div className="welcome-booking">
        <BookAppointment />
      </div>
      {isModalOpen && <ContactModal onClose={handleCloseModal} user={user} />}
    </div>
  );
};

export default WelcomeSection;
