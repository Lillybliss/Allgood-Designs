import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../Assets/lightblue.svg";
import github from "../Assets/icons/icons8-github.svg";
import linkedin from "../Assets/icons/icons8-linkedin-50.svg";
import HamburgerMenu from "./HamburgerMenu";

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
          <a href="https://templates.allgoodesigns.com/" className="nav-link" target="_blank" rel="noopener noreferrer">
    The Template Shop
  </a>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
        <a
          href="https://github.com/Lillybliss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/lillian-allgood-39213a127/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="icon-linkedin" />
        </a>
      </div>
      <div className="mobile-menu">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
