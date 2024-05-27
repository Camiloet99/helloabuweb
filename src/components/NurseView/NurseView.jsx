import React, { useEffect, useState } from "react";
import { getBookingsList } from "../../api/bookings/bookingsApi";
import BookingModal from "../BookingModal/BookingModal";
import "./NurseView.scss";

const itemsPerPage = 10;

const NurseView = () => {
  const [usersBookings, setUsersBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Correcting the use of selectedBooking to usersBookings for pagination
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentBookings = usersBookings.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(usersBookings.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDetailsClick = (booking) => {
    setSelectedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const formatDateTime = (dateTimeString) => {
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

  useEffect(() => {
    const fetchUsersBookings = async () => {
      try {
        const response = await getBookingsList();
        const sortedBookings = response.sort((a, b) => {
          return new Date(b.creationDate) - new Date(a.creationDate);
        });
        setUsersBookings(sortedBookings);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsersBookings();
  }, []);

  useEffect(() => {
    console.log(usersBookings);
  }, [usersBookings]);

  return (
    <div className="nurse-view">
      <div className="nurse-view-content">
        <h1>Active bookings</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Fecha de Creación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>{booking.userName}</td>
                <td className="booking-status">{booking.bookingStatus}</td>
                <td>{formatDateTime(booking.creationDate)}</td>
                <td>
                  {booking.bookingStatus === "PENDING" && (
                    <button onClick={() => handleDetailsClick(booking)}>
                      Detalles
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="nurse-pagination">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          ))}
        </div>
        {selectedBooking && (
          <BookingModal booking={selectedBooking} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default NurseView;
