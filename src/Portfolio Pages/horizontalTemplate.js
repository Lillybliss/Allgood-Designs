import React from "react";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";

const HorizontalTemplate = () => {
  return (
    <div className="portfolio-background">
      <div className="container">
        <div className="row">
          <h1 className="portfolio-title">The Title</h1>
          <h2 className="header-subtitle">The Subtitle</h2>
          <button className="portfolio-btn">The Button</button>
        </div>
        <div className="mockup-image">
          <img src="https://via.placeholder.com/500" alt="Mockup" />
        </div>
      </div>

      <div className="about-container">
        <h2 className="about-title">About</h2>
        <p className="about-text">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </p>
        <p className="about-text">
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
          <img src="https://via.placeholder.com/500" alt="Mockup" />
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
          <img src="https://via.placeholder.com/500" alt="Mockup" />
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
