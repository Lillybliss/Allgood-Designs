import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../Assets/lightblue.svg";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Github
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Linkedin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
