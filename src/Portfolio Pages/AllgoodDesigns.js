import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData";
import TSSmock from "../Assets/Portfolio/CoverPhotos/TSS_hifi_mockup.png";
import AllgoodSmall from "../Assets/Portfolio/CoverPhotos/Allgood_Designs_Mockup_smaller.png";
import ADlofi from "../Assets/Portfolio/AllgoodDesigns_lofi.png";
import brand1 from "../Assets/Portfolio/ADbranding1.png";
import brand2 from "../Assets/Portfolio/ADbranding2.png";
import brand3 from "../Assets/Portfolio/ADbranding3.png";
import brand4 from "../Assets/Portfolio/ADbranding4.png";

const AllgoodDesigns = () => {
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
      <div className="container">
        <div className="together-top">
          <div className="row">
            <h1 className="portfolio-title">Allgood Designs</h1>
            <h2 className="header-subtitle">
              Branding, Web Design, & Responsive Development
            </h2>
            <a
              href="https://github.com/Lillybliss/Allgood-Designs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">View Code</button>
            </a>
          </div>
          <div className="mockup-image">
            <img src={AllgoodSmall} alt="Mockup" />
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
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Branding</p>
          </div>
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Web Design</p>
          </div>
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Responsive Development</p>
          </div>
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>WireFrame & Prototyping</p>
          </div>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src={ADlofi}
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
          <h2 className="right-title">The Design Phase</h2>
          <p className="right-text">
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:ef1b201a-9341-4ea5-b7e1-7251b36fdd5f">
              Access the Low Fidelity Prototype here.
            </a>
            <a href="https://www.figma.com/proto/Ln6ise2FDmAL8XocUqWsp5/My-Portfolio?type=design&node-id=97-2893&t=k9DFvPjazrnfEzjC-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=97%3A2893&show-proto-sidebar=1">
              Access the High Fidelity Prototype here.
            </a>
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
        <img src={brand4} alt="Mockup" />
        <img src={brand2} alt="Mockup" />
        <img src={brand1} alt="Mockup" />
        <img src={brand3} alt="Mockup" />
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
          <h2 className="right-title">The Development Phase</h2>
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

      {/*three images instead of 4*/}
      <div className="row-3-three">
        <img src="https://via.placeholder.com/500" alt="Mockup" alt="Mockup" />
        <img
          src="https://via.placeholder.com/500"
          alt="Mockup"
          alt="MerchMate Logo"
        />
        <img src="https://via.placeholder.com/500" alt="Mockup" alt="Mockup" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Deployment Phase</h2>
        <p className="row-4-text">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum.{" "}
          <a href="https://github.com/Lillybliss/Allgood-Designs">
            View my Github Repository here.
          </a>
        </p>
      </div>

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

export default AllgoodDesigns;
