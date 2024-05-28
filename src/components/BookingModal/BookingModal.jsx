import React, { useEffect, useState } from "react";
import model from "../../assets/images/icons/profileexample.jpg";
import { assignBooking } from "../../api/bookings/bookingsApi";
import { getUserById } from "../../api/users/usersApi";
import "./BookingModal.scss";

const BookingModal = ({ booking, onClose, refresh }) => {
  const [userData, setUserData] = useState({});

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
    await assignBooking(booking.bookingId);
    refresh();
    switch (booking.selectedPlatform) {
      case "wpp":
      case "facebook":
      case "google":
      case "zoom":
        window.location.href = booking.link;
        break;
      case "phone":
      default:
        window.location.href = `tel:${userData.phoneNumber}`;
    }
  };

  return (
    <div className="booking-modal">
      <div className="booking-modal-content">
        <h2>Detalles del Booking</h2>
        <div className="booking-person">
          <img src={model} alt="profile" />
        </div>
        <ul className="booking-modal-list">
          <li>
            <span>ID de Reserva: </span>#{booking.bookingId}
          </li>
          <li>
            <span>Name:</span> {booking.userName}
          </li>
          <li>
            <span>Estado: </span>
            {booking.bookingStatus}
          </li>
          {booking?.takenBy && (
            <li>
              <span>Assignee: </span>
              {booking?.takenBy}
            </li>
          )}
          <li>
            <span>Fecha de Creación: </span>
            {formatDate(booking.creationDate)}
          </li>
          <li>
            <span>Phone: </span>
            {userData?.phoneNumber + " "}
          </li>
        </ul>
        {booking.bookingStatus === "PENDING" && (
          <div className="call-group">
            <button onClick={handleTakeBooking}>Call this guy!</button>
            <span>
              *By calling this person this booking is going to be assigned to
              you
            </span>
          </div>
        )}
        <button onClick={onClose} className="close-option">
          X
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
