import React from "react";
import "./Styles/Portfolio.css";
import { Link } from "react-router-dom";
import portfolioData from "./Data/portfolioData";

const Portfolio = () => {
  return (
    <div>
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
                  <img src={piece.imageUrl} alt={piece.title} />
                </div>
                <div className="portfolio-info">
                  <h2>{piece.title}</h2>
                  <p>{piece.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
