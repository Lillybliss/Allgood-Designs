import React, { useState } from "react";
import PopUpContact from "./Components/PopUpContact";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleImageClick = () => {
    openPopup();
  };

  return (
    <div className="home-background">
      <h1>Contact</h1>
      <p>Testing 1</p>
      <button style={{ cursor: "pointer" }} onClick={handleImageClick}>
        Submit
      </button>
      <PopUpContact isOpen={isPopupOpen} closePopup={closePopup} />
    </div>
  );
};

export default Contact;
