import React, { useState } from "react";
import "./Styles/Portfolio.css";
import { Link } from "react-router-dom";
import portfolioData from "./Data/portfolioData";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All"); // State to track active category

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Logic to filter content based on category
    // You can use this filtered content to render portfolio pieces accordingly
    // For now, let's just log the selected category
    console.log("Selected category:", category);
  };

  return (
    <div className="gradient-body">
      <div className="header-container">
        <h1 className="header-title">Portfolio</h1>
      </div>
      <div className="category-bts">
        {[
          "All",
          "Projects",
          "Web",
          "Graphic Design",
          "Digital Marketing",
          "Art",
        ].map((category) => (
          <button
            key={category}
            className={`category-btn${
              category === activeCategory ? ":active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
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
        <div className="portfolio-piece"></div>{" "}
        {/* Empty div to fill the last row */}
        <a href="#top" className="back-to-top">
          {" "}
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
