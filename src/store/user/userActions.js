import { login } from "../../api/users/usersApi";

export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export const loginUser = (userData) => async (dispatch) => {
  try {
    const userResponse = await login(userData);

    localStorage.setItem("userInfo", JSON.stringify(userResponse?.result));
    localStorage.setItem("authToken", userResponse?.result?.token);
    dispatch({
      type: USER_LOGIN,
      payload: userResponse?.result,
    });
  } catch (error) {
    console.error("Login error:", error);
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
  return {
    type: USER_LOGOUT,
  };
};

//TODO implement update user
export const updateUserProfile = (userInfo) => {
  return (dispatch, getState) => {
    // Aquí se haría la llamada a la API externa para actualizar el perfil
    // Por ejemplo, usando fetch o axios. El código estará comentado ya que
    // el endpoint aún no está especificado.
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
