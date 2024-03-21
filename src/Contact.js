import React, { useState } from "react";
import PopUpContact from "./Components/PopUpContact";
import "./Styles/Contact.css";
import email from "./Assets/icons/icons8-email-100.png";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleImageClick = () => {
    openPopup();
  };

  return (
    <div className="home-background">
      <div className="contact-background">
        <div className="contact-header-container">
          <h1 className="header-title">Contact Me</h1>
          <h2 className="contact-h2">
            If you're interested in learning more about my work or would like to
            discuss potential opportunities, please don't hesitate to contact
            me.
          </h2>
          <div className="contact-email">
            <img src={email} alt="Email" className="contact-email-icon" />
            <p className="resume-p">Lillyallgood@ucf.edu</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Let's get in touch!</h2>
          <button style={{ cursor: "pointer" }} onClick={handleImageClick}>
            Submit
          </button>
          <PopUpContact isOpen={isPopupOpen} closePopup={closePopup} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
