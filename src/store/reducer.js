let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : "";
let isLoggedIn = user.length > 0;

export const initialState = {
  user: "" || user,
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
        loading: false,
        errorMessage: action.error,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
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
