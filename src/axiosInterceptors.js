import axios from "axios";
import { logoutUser } from "./store/user/userActions";

const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        logoutUser();
        window.location.reload();
      }
      return Promise.reject(error);
    }
  );
};

export default setupAxiosInterceptors;
