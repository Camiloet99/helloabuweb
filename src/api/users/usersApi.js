import axios from "axios";

const API_URL = "http://localhost:8080";
//const API_KEY = "tst";
//TODO traer esto de las variables de entorno

export const registerUser = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': API_KEY, // Si necesitas un token de autorización
    },
  };

  try {
    const response = await axios.post(`/auth/register`, userData, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
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
