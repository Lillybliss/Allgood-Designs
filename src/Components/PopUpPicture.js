import React from "react";
import "../Styles/PopupPicture.css";

const PopupPicture = ({ isOpen, closePopup, image }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background" onClick={closePopup}>
      <div className="popup-container">
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
