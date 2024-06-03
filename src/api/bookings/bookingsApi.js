import axios from "axios";

const API_URL = "http://ec2-3-85-87-67.compute-1.amazonaws.com";

export const getBookingsList = async () => {
  const token = localStorage.getItem("authToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      API_URL + `/bookings/list?active=true`,
      config
    );
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
      API_URL + `/bookings/${bookingId}/finish`,
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
    const response = await axios.put(
      API_URL + `/bookings/${bookingId}`,
      {},
      config
    );
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
    const response = await axios.post(API_URL + `/bookings`, booking, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const createBookingNoLogin = async (booking) => {
  try {
    const response = await axios.post(API_URL + `/open/bookings`, booking, {});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deleteBooking = async (bookingId) => {
  const token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.delete(
      API_URL + `/bookings/${bookingId}`,
      config
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};