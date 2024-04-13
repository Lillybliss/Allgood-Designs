import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import portfolioData from "../Data/portfolioData.json";
import logopic from "../Assets/Portfolio/CoverPhotos/logo_LA_transparent.jpg";

const LAlogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const currentProjectId = 6;

  const getRandomPortfolioPieces = (currentProjectId) => {
    // Filter out the current project from the portfolioData
    const filteredData = portfolioData.filter(
      (piece) => piece.id !== currentProjectId
    );
    // Shuffle the filteredData array
    const shuffledData = filteredData.sort(() => Math.random() - 0.5);
    // Select the first three items from the shuffled array
    return shuffledData.slice(0, 3);
  };

  const randomPortfolioPieces = getRandomPortfolioPieces(currentProjectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

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
    <div className="portfolio-background">
      {/* Back-to-top button */}
      {isVisible && (
        <a href="#top" className="back-to-top" onClick={scrollToTop}>
          {""}
        </a>
      )}

      <div className="container-noImage">
        <div className="together-top-noImage">
          <div className="row-noImage">
            <h1 className="portfolio-title">L.A.</h1>
            <h2 className="header-subtitle">Logo Design</h2>
          </div>
        </div>
      </div>

      <div className="noImage-main">
        <img src={logopic} alt="logo" />
      </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
          A fusion of my initials 'L' and 'A', elegantly designed using Adobe
          Illustrator. This versatile logo shines on my business card, adding a
          touch of muted blue for contrast amid the shades of purple.
        </p>
        <div className="project-tags">
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Graphic Design</p>
          </div>
        </div>
      </div>

      <div className="padding"></div>

      <div className="row-4">
        <h2 className="row-4-title">You May Also Like:</h2>
        <div className="row-4-text">
          <div className="portfolio">
            {randomPortfolioPieces.map((piece) => (
              <div key={piece.id} className="you-may">
                <Link to={piece.route} className="portfolio-link">
                  <div className="portfolio-content">
                    <div className="portfolio-image">
                      <img
                        src={require(`../Assets/Portfolio/CoverPhotos/${piece.imageUrl}`)}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LAlogo;
