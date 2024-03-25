import React from "react";
import "../Styles/PopupPicture.css";

const PopupPicture = ({ isOpen, closePopup, image }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-background">
      <div className="popup-container">
        <img
          src={image}
          alt="pop up"
          className="popup-image"
          style={{ width: "100%", height: "100%" }}
        />
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default PopupPicture;
