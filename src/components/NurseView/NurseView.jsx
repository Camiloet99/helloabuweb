import React, { useEffect, useState } from "react";
import { getBookingsList } from "../../api/bookings/bookingsApi";
import { finishBooking } from "../../api/bookings/bookingsApi";
import BookingModal from "../BookingModal/BookingModal";
import profileExample from "../../assets/images/icons/profileexample.jpg";
import location from "../../assets/images/icons/forms/location.svg";
import messenger from "../../assets/images/icons/socialmedia/Messenger.svg";
import whatsapp from "../../assets/images/icons/socialmedia/Whatsapp.svg";
import google from "../../assets/images/icons/socialmedia/Messenger.svg";
import zoom from "../../assets/images/icons/socialmedia/Messenger.svg";
import phone from "../../assets/images/icons/forms/phone.svg";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import "./NurseView.scss";
import { useToast } from "../../context/ToastContext";

const itemsPerPage = 4;

const NurseView = () => {
  const [usersBookings, setUsersBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const user = useSelector((state) => state.user);
  const { triggerToast } = useToast();

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

  const getPlatformLogo = (platform) => {
    switch (platform) {
      case "wpp":
        return whatsapp;
      case "facebook":
        return messenger;
      case "google":
        return google;
      case "phone":
        return phone;
      case "zoom":
        return zoom;
      default:
        return phone;
    }
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const fetchUsersBookings = async () => {
    try {
      const response = await getBookingsList();
      const sortedBookings = response.sort((a, b) => {
        return new Date(b.creationDate) - new Date(a.creationDate);
      });
      setUsersBookings(sortedBookings);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsersBookings();
    setIsLoading(false);
  }, []);

  const handleFinishBooking = async (booking) => {
    await finishBooking(booking?.bookingId);
    fetchUsersBookings();
    triggerToast("Booking has been finished successfully!");
  };

  return (
    <div className="nurse-view">
      <h1>Active bookings</h1>
      {isLoading ? (
        <div className="nurse-loader">
          <ThreeDots
            visible={true}
            height="100"
            width="100"
            color="#1d352e"
            radius="4"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <div className="nurse-view-content">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>ID</th>
                <th>Date</th>
                <th>Hour</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings?.map((booking) => (
                <tr key={booking.bookingId}>
                  <td className="patient-profile">
                    <div className="section-content">
                      <div className="profile-picture">
                        <img src={profileExample} alt="profile" />
                      </div>
                      <div className="profile-text">
                        <p className="profile-name">{booking.userName}</p>
                        <p className="profile-location">
                          <img src={location} alt="location" />
                          San Francisco.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>#{booking.bookingId}</td>
                  <td>{formatDate(booking.creationDate)}</td>
                  <td>{formatTime(booking.creationDate)}</td>
                  <td className="booking-status">{booking.bookingStatus}</td>
                  <td>
                    {booking.bookingStatus === "PENDING" ? (
                      <button onClick={() => handleDetailsClick(booking)}>
                        <img
                          src={getPlatformLogo(booking?.selectedPlatform)}
                          alt="platform-logo"
                        />
                      </button>
                    ) : booking.bookingStatus === "PROGRESS" ? (
                      <>
                        <button
                          onClick={() => handleFinishBooking(booking)}
                          disabled={!booking?.takenBy === user?.email}
                        >
                          Finish
                        </button>
                        <button onClick={() => handleDetailsClick(booking)}>
                          Details
                        </button>
                      </>
                    ) : (
                      <span></span>
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
            <BookingModal
              booking={selectedBooking}
              onClose={handleCloseModal}
              refresh={fetchUsersBookings}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default NurseView;
