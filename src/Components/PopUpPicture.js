import React from "react";
import "../Styles/PopupPicture.css";

const PopupPicture = ({ isOpen, closePopup, image }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background" onClick={closePopup}>
      <div className="popup-container">
      <button className="close-button" onClick={closePopup}>X</button>
        <img
          src={image}
          alt="pop up"
          className="popup-image"
        />
      </div>
    </div>
  );
};

export default PopupPicture;
