let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : "";
let isLoggedIn = user.length > 0;

let user_id = localStorage.getItem("user_id")
  ? JSON.parse(localStorage.getItem("user_id"))
  : "";

export const initialState = {
  user: "" || user,
  user_id: "" || user_id,
  isLoggedIn: "" || isLoggedIn,
  token: "" || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.username,
        token: action.payload.token,
        user_id: action.payload.user_id,
        loading: false,
        errorMessage: action.error,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
        user_id: "",
        isLoggedIn: false,
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
