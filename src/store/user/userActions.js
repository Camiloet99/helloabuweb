import { login } from "../../api/users/usersApi";

export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export const loginUser =
  (userData, navigate, errorStatus) => async (dispatch) => {
    try {
      const userResponse = await login(userData);
      if (userResponse?.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(userResponse?.result));
        localStorage.setItem("authToken", userResponse?.result?.token);
        dispatch({
          type: USER_LOGIN,
          payload: userResponse?.result,
        });
        navigate();
      } else {
        errorStatus(userResponse?.error);
      }
    } catch (error) {
      errorStatus(error?.error);
    }
  };

export const updateUser = (userData) => {
  localStorage.setItem("userInfo", JSON.stringify(userData));
  return {
    type: UPDATE_USER_PROFILE,
    payload: userData,
  };
};

export const logoutUser = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("authToken");
  return {
    type: USER_LOGOUT,
  };
};

export const updateUserProfile = (userInfo) => {
  return (dispatch, getState) => {
    /*
    fetch('ENDPOINT_URL', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: data,
      });
    })
    .catch(error => {
      console.error('Error al actualizar el perfil:', error);
    });
    */

    // Por ahora, solo actualizamos la store de Redux
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: userInfo,
    });
  };
};
