import axios from "axios";

//const API_URL = "http://localhost:8080";
//const API_KEY = "tst";
//TODO traer esto de las variables de entorno

export const registerUser = async (userData, navigate, errorStatus) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': API_KEY, // Si necesitas un token de autorización
    },
  };
  try {
    const response = await axios.post(`/auth/register`, userData, config);
    if (response?.data?.status === 201) {
      navigate();
      return response?.data;
    } else {
      errorStatus(response?.data?.error);
      return null;
    }
  } catch (error) {
    errorStatus(error?.response?.data?.error);
  }
};

export const login = async (loginRequest) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': API_KEY, // Si necesitas un token de autorización
    },
  };
  try {
    const response = await axios.post(`/auth/login`, loginRequest, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
