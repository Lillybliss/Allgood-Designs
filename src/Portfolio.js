import React, { useState, useEffect } from "react";
import "./Styles/Portfolio.css";
import { Link } from "react-router-dom";
import portfolioData from "./Data/orderedPortData.json";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [filteredPortfolioData, setFilteredPortfolioData] =
    useState(portfolioData);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    console.log("Selected category:", category);
    if (category === "All") {
      setFilteredPortfolioData(portfolioData);
    } else {
      const lowercaseCategory = category.toLowerCase();
      const filteredData = portfolioData.filter((piece) =>
        piece.categories.includes(lowercaseCategory)
      );
      setFilteredPortfolioData(filteredData);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down a certain distance
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 200);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="gradient-body">
      {/* Back-to-top button */}
      {isVisible && (
        <a href="#top" className="back-to-top" onClick={scrollToTop}>
          {""}
        </a>
      )}

      <div className="header-container">
        <h1 className="header-title">Portfolio</h1>
      </div>
      <div className="category-bts">
        {[
          "All",
          "UI Design",
          "Development",
          "Graphic Design",
          "Digital Marketing",
          "Art",
        ].map((category) => (
          <button
            key={category}
            className={`category-btn${
              category === activeCategory ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* This is the Portfolio Pieces section */}
      <div className="portfolio">
        {filteredPortfolioData.map((piece) => (
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
                  <h2 className="piece-title">{piece.title}</h2>
                  <p>{piece.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="portfolio-piece"></div>{" "}
        {/* Empty div to fill the last row */}
        <div className="portfolio-piece"></div>{" "}
        {/* Empty div to fill the last row */}
        <div className="portfolio-piece"></div>{" "}
        {/* Empty div to fill the last row */}
      </div>
    </div>
  );
};

export default Portfolio;
