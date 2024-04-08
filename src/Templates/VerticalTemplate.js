import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/VerticalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData.json";
import TSSmock from "../Assets/Portfolio/CoverPhotos/TSS_hifi_mockup.png";

const VerticalTemplate = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (image) => {
    setIsPopupOpen(true);
    setPopupImage(image);
  };

  const closePopup = () => setIsPopupOpen(false);

  // CHECK THE ID WITH THE JSON DATA
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
            <h1 className="portfolio-title">The Title</h1>
            <h2 className="header-subtitle">The Subtitle</h2>
            <a
              href="https://github.com/Lillybliss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn-noImage">The Button</button>
            </a>
          </div>
        </div>
      </div>

      <div className="vertical-row-1">
        <div className="vertical-left-image">
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
        <div className="vertical-right-content">
          <div className="vertical-right-text">
            <h2 className="vertical-right-title">The Title</h2>
            <p className="vertical-right-text">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <p className="vertical-right-text">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <div className="vertical-project-tags">
              <div className="vertical-tag">
                <img src={tag} alt="tag"></img>
                <p>Tag 1</p>
              </div>
              <div className="vertical-tag">
                <img src={tag} alt="tag"></img>
                <p>Tag 2</p>
              </div>
              <div className="vertical-tag">
                <img src={tag} alt="tag"></img>
                <p>Tag 3</p>
              </div>
            </div>
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

export default VerticalTemplate;
