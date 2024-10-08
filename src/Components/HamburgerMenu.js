import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // installed react-icons
import "../Styles/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <div className="icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
      {isOpen && (
        <div className="menu">
          <nav>
            <ul className="mobile-nav-links">
              <li>
                <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
              <a href="https://templates.allgoodesigns.com/" className="mobile-nav-link">
    The Template Shop
  </a>
              </li>
              <li>
                <a
                  href="https://github.com/Lillybliss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lillian-allgood-39213a127/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
