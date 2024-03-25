import React, { useState } from "react";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import TSSmock from "../Assets/Portfolio/CoverPhotos/TSS_hifi_mockup.png";

const HorizontalTemplate = () => {
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
            <h1 className="portfolio-title">The Title</h1>
            <h2 className="header-subtitle">The Subtitle</h2>
            <a
              href="https://github.com/Lillybliss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">The Button</button>
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

export default HorizontalTemplate;
