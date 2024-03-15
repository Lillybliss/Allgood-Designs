import React from "react";
import "./Styles/Portfolio.css";
import { Link } from "react-router-dom";
import portfolioData from "./Data/portfolioData";

const Portfolio = () => {
  return (
    <div className="white-body">
      <div className="header-container">
        <h1 className="header-title">Portfolio</h1>
      </div>
      <div className="category-bts">
        <button className="category-btn">All</button>
        <button className="category-btn">Projects</button>
        <button className="category-btn">Web</button>
        <button className="category-btn">Graphic Design</button>
        <button className="category-btn">Digital Marketing</button>
        <button className="category-btn">Art</button>
      </div>

      {/* This is the Portfolio Pieces section */}
      <div className="portfolio">
        {portfolioData.map((piece) => (
          <div key={piece.id} className="portfolio-piece">
            <Link to={piece.route} className="portfolio-link">
              <div className="portfolio-content">
                <div className="portfolio-image">
                  <img
                    src={require("./Assets/Portfolio/CoverPhotos/" +
                      piece.imageUrl)}
                    alt={piece.title}
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-info">
                  <h2>{piece.title}</h2>
                  <p>{piece.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <a href="#top" className="back-to-top">
          {" "}
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
