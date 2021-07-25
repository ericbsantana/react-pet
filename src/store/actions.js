import api from "../helpers/axios";

export async function Login(dispatch, payload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const response = await api.post(`/login`, payload);

    if (response.data.auth) {
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data.username));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user_id", JSON.stringify(response.data.user_id));

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      return response.data;
    }

    dispatch({ type: "LOGIN_ERROR", error: response.data.message });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function Logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("id");
}
