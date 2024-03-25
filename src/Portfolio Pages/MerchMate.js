import React, { useState } from "react";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import TSSmock from "../Assets/Portfolio/CoverPhotos/TSS_hifi_mockup.png";

const MerchMate = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (image) => {
    setIsPopupOpen(true);
    setPopupImage(image);
  };

  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="portfolio-background">
      <div className="container">
        <div className="together-top">
          <div className="row">
            <h1 className="portfolio-title">MerchMate Project</h1>
            <h2 className="header-subtitle">Mobile App Prototype</h2>
            <a
              href="https://www.figma.com/proto/T8VR19INyceYt6xXxw1XWa/MerchMate-Mobile-Prototype-(Copy)?type=design&node-id=1-2&t=J7FynIHyF4GWKb0t-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">View Prototype</button>
            </a>
          </div>
          <div className="mockup-image">
            <img src="https://via.placeholder.com/500" alt="Mockup" />
          </div>
        </div>
      </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
        <p className="port-about-text">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
        <div className="project-tags">
          <img src={tag} alt="tag"></img>
          <p>Tag 1</p>
          <img src={tag} alt="tag"></img>
          <p>Tag 2</p>
          <img src={tag} alt="tag"></img>
          <p>Tag 3</p>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src="https://via.placeholder.com/500"
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(TSSmock)}
          />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Title</h2>
          <p className="right-text">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
          <p className="right-text">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src="https://via.placeholder.com/500"
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(TSSmock)}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Title</h2>
          <p className="right-text">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
          <p className="right-text">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
        </div>
      </div>

      <div className="row-3">
        <img src="https://via.placeholder.com/500" alt="Mockup" />
        <img src="https://via.placeholder.com/500" alt="Mockup" />
        <img src="https://via.placeholder.com/500" alt="Mockup" />
        <img src="https://via.placeholder.com/500" alt="Mockup" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Title</h2>
        <p className="row-4-text">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
      </div>
    </div>
  );
};

export default MerchMate;
