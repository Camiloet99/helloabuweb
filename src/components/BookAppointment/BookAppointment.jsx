import React from "react";
import "./BookAppointment.scss"; // Asegúrate de tener este archivo CSS

function BookAppointment() {
  return (
    <div className="appointment-card">
      <h2>Easily book an appointment in 3 simple steps.</h2>
      <form className="appointment-card-form">
        <div className="input-content">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="input-content">
          <label htmlFor="contact">Contact Number</label>
          <input
            id="contact"
            type="text"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="input-content">
          <label htmlFor="date">Date of Appointment</label>
          <input
            id="date"
            type="date"
            placeholder="Select Date of Appointment"
          />
        </div>
        <div className="input-content">
          <label htmlFor="">d</label>
          <button type="submit" className="bookNow">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookAppointment;
