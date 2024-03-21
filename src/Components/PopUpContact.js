import React from "react";
import "../Styles/Popup.css";

const PopUpContact = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background">
      <div className="popup-container">
        <p>Thank you for contacting me!</p>
        <p>I will get back to you shortly.</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default PopUpContact;
