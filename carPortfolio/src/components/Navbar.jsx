// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import './css/navbar.css' // Importing the CSS file

// export default function Header() {
//     return (
//         <header className="header">
//             <nav className="navbar">
//                 <div className="navbar-container">
//                     <Link to="/" className="navbar-logo">
//                         <img
//                             src="./Logo.svg"
//                             className="logo"
//                             alt="Logo"
//                         />
//                     </Link>
//                     <div className="navbar-buttons">
//                         <Link to="login" className="btn login-btn">Log in</Link>
//                         <Link to="register" className="btn signup-btn">Get started</Link>
//                     </div>
//                     <div className="navbar-menu">
//                         <ul className="menu-list">
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         `menu-item ${isActive ? "active" : ""}`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/about"
//                                     className={({ isActive }) =>
//                                         `menu-item ${isActive ? "active" : ""}`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/services"
//                                     className={({ isActive }) =>
//                                         `menu-item ${isActive ? "active" : ""}`
//                                     }
//                                 >
//                                     Services
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/News"
//                                     className={({ isActive }) =>
//                                         `menu-item ${isActive ? "active" : ""}`
//                                     }
//                                 >
//                                     Latest
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "@/components/Navbar.css"; // Importing the CSS file
import axios from "axios";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status from backend on mount
  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.get("http://localhost:4000/auth/checkLogin", {
          withCredentials: true,
        });
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
      } catch (error) {
        localStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false);
      }
    };
    const savedLoginStatus = localStorage.getItem("isLoggedIn");
    if (savedLoginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      checkLogin();
    }
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="./Logo.svg" className="logo" alt="Logo" />
          </Link>

          {}
          <div className="navbar-buttons">
            {isLoggedIn ? (
              <button className="btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn login-btn">
                  Log in
                </Link>
                <Link to="/register" className="btn signup-btn">
                  Get started
                </Link>
              </>
            )}
          </div>

          {/* Navigation menu */}
          <div className="navbar-menu">
            <ul className="menu-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/News"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  Latest
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
