import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import logo from "../Assets/lightblue.svg";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="footer-top">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
          <h2 className="footer-header">
            Elevating Digital Experiences Through Design, Development, and
            More...
          </h2>
        </div>
        <hr className="footer-line" />{" "}
        <div className="footer-bottom">
          <p>&copy; 2024 Allgood Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
