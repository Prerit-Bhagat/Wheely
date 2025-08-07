// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(null);
//   const VITE_API_URL = import.meta.env.VITE_API_URL;

//   const checkLogin = async () => {
//     try {
//       await axios.get(`${VITE_API_URL}/auth/checkLogin`, {
//         withCredentials: true,
//       });
//       setIsLoggedIn(true);
//     } catch (error) {
//       setIsLoggedIn(false);
//     }
//   };

//   useEffect(() => {
//     checkLogin();
//   }, []);

//   const logout = async () => {
//     try {
//       await axios.post(
//         `${VITE_API_URL}/auth/logout`,
//         {},
//         { withCredentials: true }
//       );
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const checkLogin = async () => {
    try {
      await axios.get(`${API_URL}/auth/checkLogin`, { withCredentials: true });
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials, {
        withCredentials: true,
      });
      setIsLoggedIn(true);
      return response.data;
    } catch (error) {
      setIsLoggedIn(false);
      console.error("Login error:", error.response?.data || error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
