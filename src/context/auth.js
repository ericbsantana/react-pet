import { createContext, useState, useEffect } from "react";
import api from "../helpers/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const storageUser = localStorage.getItem("user");
    const storageToken = localStorage.getItem("token");

    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser));
      api.defaults.headers.common["Authorization"] = `Bearer ${storageToken}`;
      setIsLoggedIn(true);
    }
  }, []);

  const Login = async () => {
    try {
      const response = await api.post("http://localhost:3001/login", {
        email: "joaodasilva@hotmail.com",
        password: "joao123",
      });

      setUser(response.data.username);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      localStorage.setItem("user", JSON.stringify(response.data.username));
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const Logout = () => {
    setUser(null);
    setIsLoggedIn(false);

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
