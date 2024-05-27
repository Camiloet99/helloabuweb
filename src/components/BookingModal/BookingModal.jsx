import React from "react";
import "./BookingModal.scss";

const BookingModal = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="modalOverlay">
      <div className="modal">
        <h2>Detalles del Booking</h2>
        <ul>
          <li>ID de Reserva: {booking.bookingId}</li>
          <li>Nombre: {booking.userName}</li>
          <li>Estado: {booking.bookingStatus}</li>
          <li>Fecha de Creación: {booking.creationDate}</li>
        </ul>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default BookingModal;
