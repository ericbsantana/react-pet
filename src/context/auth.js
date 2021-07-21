import { createContext, useState, useEffect } from "react";
import api from "../helpers/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storageUser = localStorage.getItem("user");
    const storageToken = localStorage.getItem("token");

    if (storageUser && storageToken) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storageUser));
      api.defaults.headers.common["Authorization"] = `Bearer ${storageToken}`;
    }
  }, []);

  const Login = async (email, pwd) => {
    try {
      const response = await api.post("http://localhost:3001/login", {
        email: email,
        password: pwd,
      });

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setUser(response.data.username);

      localStorage.setItem("user", JSON.stringify(response.data.username));
      localStorage.setItem("token", response.data.token);

      setIsLoggedIn(true);
      setIsValid(response.data.auth);
    } catch (err) {
      setIsValid(err.response.data.auth);
      console.log(err.response.data.auth);
    }
  };

  const Logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setIsValid(false);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isValid, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
