import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/auth/checkLogin`, { withCredentials: true })
      .then(() => {
        setIsAuth(true);
        setLoading(false);
      })
      .catch(() => {
        setIsAuth(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
