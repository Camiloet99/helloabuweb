import React, { useEffect, useState } from "react";
import { getBookingsList } from "../../api/bookings/bookingsApi";

const NurseView = () => {
  const [usersBookings, setUsersBookings] = useState([]);

  useEffect(() => {
    console.log(usersBookings);
  }, [usersBookings]);

  const fetchUsersBookings = async () => {
    try {
      const response = await getBookingsList();
      setUsersBookings(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <span>hola </span>NurseView
    </div>
  );
};

export default NurseView;
