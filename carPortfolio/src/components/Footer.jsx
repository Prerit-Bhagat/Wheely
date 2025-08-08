import React from "react";
import { Link } from "react-router-dom";
import "@/components/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Your trusted platform for finding the perfect ride. We connect
            buyers with a vast selection of quality vehicles.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Car Lane, Auto City, CA 90210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
