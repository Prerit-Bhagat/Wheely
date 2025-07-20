import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/navbar.css' // Importing the CSS file

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img
                            src="./Logo.svg"
                            className="logo"
                            alt="Logo"
                        />
                    </Link>
                    <div className="navbar-buttons">
                        <Link to="login" className="btn login-btn">Log in</Link>
                        <Link to="register" className="btn signup-btn">Get started</Link>
                    </div>
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
