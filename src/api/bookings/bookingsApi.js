import axios from "axios";

//const API_URL = "http://localhost:8080";

export const getBookingsList = async () => {
  const token = localStorage.getItem("authToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`/bookings/list`, config);
    return response?.data?.result;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const finishBooking = async (bookingId) => {
  const token = localStorage.getItem("authToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(
      `/bookings/${bookingId}/finish`,
      {},
      config
    );
    return response?.data?.result;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const assignBooking = async (bookingId) => {
  const token = localStorage.getItem("authToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(`/bookings/${bookingId}`, {}, config);
    return response?.data?.result;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const createBooking = async (booking) => {
  const token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(`/bookings`, booking, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const createBookingNoLogin = async (booking) => {
  try {
    const response = await axios.post(`/open/bookings`, booking, {});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
