import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/VerticalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData";
import moth from "../Assets/Portfolio/floral_moth.jpeg";

const FloralMoth = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (image) => {
    setIsPopupOpen(true);
    setPopupImage(image);
  };

  const closePopup = () => setIsPopupOpen(false);

  const getRandomPortfolioPieces = () => {
    // Shuffle the portfolioData array
    const shuffledData = portfolioData.sort(() => Math.random() - 0.5);
    // Select the first three items from the shuffled array
    return shuffledData.slice(0, 3);
  };

  const randomPortfolioPieces = getRandomPortfolioPieces();

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
        <a href="#top" className="back-to-top" onClick={scrollToTop}></a>
      )}
      <div className="container-noImage">
        <div className="together-top-noImage">
          <div className="row-noImage">
            <h1 className="portfolio-title">"Floral Moth"</h1>
            <h2 className="header-subtitle">Ink on Paper</h2>
          </div>
        </div>
      </div>

      <div className="vertical-row-1">
        <div className="vertical-left-image">
          <img
            src={moth}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(moth)}
          />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>
        <div className="vertical-right-content">
          <div className="vertical-right-text">
            <h2 className="vertical-right-title">About</h2>
            <p className="vertical-right-text">11"x13" Ink on paper.</p>
            <p className="vertical-right-text">
              This ink drawing was created as a part of UCF's Graphic Design
              Program. The challenge was to create an image made entirely of
              dots and dashes, completely lacking contour lines.
            </p>
            <p className="vertical-right-text">
              Varying the size of the dots and dashes, as well as the density of
              the marks, creates the illusion of depth and form.
            </p>
            <div className="vertical-project-tags">
              <div className="vertical-tag">
                <img src={tag} alt="tag"></img>
                <p>Art</p>
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

export default FloralMoth;
