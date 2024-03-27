import React from "react";
import "../Styles/Popup.css";

const PopUpContact = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background" onClick={closePopup}>
      <div className="popup-contact">
      <button className="close-button-contact" onClick={closePopup}>X</button>
        <p>Thank you for contacting me!</p>
        <p>I look forward to hearing from you.</p>
      </div>
    </div>
  );
};

export default PopUpContact;
