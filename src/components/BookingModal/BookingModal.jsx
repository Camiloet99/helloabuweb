import React, { useEffect, useState } from "react";
import model from "../../assets/images/icons/profileexample.jpg";
import { getUserById } from "../../api/users/usersApi";
import { useTranslation } from "react-i18next";
import "./BookingModal.scss";

const BookingModal = ({ booking, onClose }) => {
  const [userData, setUserData] = useState({});
  const { t } = useTranslation("common");

  useEffect(() => {
    const handleGetUserById = async () => {
      const response = await getUserById(booking.userId);
      setUserData(response?.result);
    };
    if (booking) {
      handleGetUserById();
    }
  }, [booking]);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const handleTakeBooking = async () => {
    booking.bookingStatus = "PROGRESS";
    switch (booking.selectedPlatform) {
      case "wpp":
        window.open(booking.link, "_blank");
        break;
      case "facebook":
        window.open(booking.link, "_blank");
        break;
      case "google":
        window.open(booking.link, "_blank");
        break;
      case "zoom":
        window.open(booking.link, "_blank");
        break;
      case "teams":
        window.open(booking.link, "_blank");
        break;
      case "phone":
        window.location.href = `tel:${userData.phoneNumber}`;
        break;
      default:
        window.location.href = `tel:${userData.phoneNumber}`;
    }
  };

  return (
    <div className="booking-modal">
      <div className="booking-modal-content">
        <h2>{t("BookingModal.title")}</h2>
        <div className="booking-person">
          <img src={model} alt="profile" />
        </div>
        <ul className="booking-modal-list">
          <li>
            <span>{t("BookingModal.bookingId")}</span>#{booking.bookingId}
          </li>
          <li>
            <span>{t("BookingModal.name")}</span> {booking.userName}
          </li>
          <li>
            <span>{t("BookingModal.status")}</span>
            {booking.bookingStatus}
          </li>
          {booking?.takenBy && (
            <li>
              <span>{t("BookingModal.assignee")}</span>
              {booking?.takenBy}
            </li>
          )}
          <li>
            <span>{t("BookingModal.requestDate")}</span>
            {formatDate(booking.creationDate)}
          </li>
          {userData?.phoneNumber && (
            <li>
              <span>{t("BookingModal.phone")}</span>
              {userData?.phoneNumber}
            </li>
          )}
          {booking?.profileInformation && (
            <li>
              <span>{t("BookingModal.platform")}</span>
              {booking?.profileInformation}
            </li>
          )}
        </ul>
        <div className="call-group">
          <button onClick={handleTakeBooking}>{t("BookingModal.contact")}</button>
        </div>
        <button onClick={onClose} className="close-option">
          X
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
