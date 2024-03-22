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
                <Link
                  to="/Allgood-Designs/"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Allgood-Designs/resume"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/Allgood-Designs/portfolio"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/Allgood-Designs/contact"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
