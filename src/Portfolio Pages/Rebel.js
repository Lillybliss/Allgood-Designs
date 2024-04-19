import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData.json";
import RebelHifi from "../Assets/Portfolio/Rebel_Hifi.png";
import RebelLowfi from "../Assets/Portfolio/Rebel_Lowfi.png";
import Rebelcans from "../Assets/Portfolio/multiplecans.jpg";

const Rebel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (image) => {
    setIsPopupOpen(true);
    setPopupImage(image);
  };

  const closePopup = () => setIsPopupOpen(false);

  const currentProjectId = 2;

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
      <div className="container">
        <div className="together-top">
          <div className="row">
            <h1 className="portfolio-title">Rebel Brewing Co.</h1>
            <h2 className="header-subtitle">
              Branding & Responsive Web Design
            </h2>
            <a
              href="https://www.figma.com/proto/oQjLYSSJvaEtgbkDgg1OaB/Rebel-Brewing-Co.?type=design&node-id=96-7618&t=lWaxvNuyIUlkTErd-1&scaling=scale-down&page-id=72%3A608&mode=design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">View Mockup</button>
            </a>
          </div>
          <div className="mockup-image">
            <img src={RebelHifi} alt="Mockup" />
          </div>
        </div>
      </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
          The Figma prototype serves as a platform to showcase the unique brand
          identity of my fictitious company, "Rebel Brewing Company." This brand
          is characterized by its rebellious spirit and a distinctive punk rock
          aesthetic. To bring this vision to life, I created a diverse range of
          assets for the website mockup. This includes bespoke labels for beer
          cans, incorporating 3D mockups into the digital assets, crafting a
          memorable logo for the company, and compiling a comprehensive design
          guide. The goal of this portfolio project is for me to showcase my
          skills not only in web design, but also in branding, graphic design,
          and general digital marketing asset creation.
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
            <p>WireFrame & Prototyping</p>
          </div>
        </div>
      </div>
      <div className="padding"></div>
      <div className="row-1">
        <div className="left-image">
          <img
            src={RebelLowfi}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(RebelLowfi)}
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
            In the Design Phase, I crafted a preliminary vision for the Rebel
            Brewing Company website through a low-fidelity prototype. I began by
            sketching wireframes on paper, which I then translated into digital
            form using Figma. This process allowed me to visualize the site’s
            layout, ensuring a user-friendly experience on both mobile and
            larger devices.
          </p>
          <p className="right-text">
            <a
              href="https://www.figma.com/file/oQjLYSSJvaEtgbkDgg1OaB/Rebel-Brewing-Co.?type=design&node-id=1%3A3&mode=design&t=6JfrJWol6BlsMMM8-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Wireframe here.
            </a>
          </p>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src={RebelHifi}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(RebelHifi)}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Development Phase</h2>
          <p className="right-text">
            In the Development Phase, I created a visual design guide to be
            applied to the website. It defines a color scheme, typography, and a
            logo for the brand. The color scheme is comprised of contrasting,
            grayscale tones, paired with a vibrant golden accent. Drawing
            inspiration from craft brews and punk rock, my design mood board
            informed this selection. Embracing the accent color as a unifying
            element, I ensured coherence throughout the website. The chosen
            golden hue aids in highlighting calls to action. Additionally, the
            website features a high level of contrast, ensuring accessibility
            for all users.
          </p>
          <p className="right-text">
            <a
              href="https://www.figma.com/proto/oQjLYSSJvaEtgbkDgg1OaB/Rebel-Brewing-Co.?type=design&node-id=96-7618&t=lWaxvNuyIUlkTErd-1&scaling=scale-down&page-id=72%3A608&mode=design"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Mockup here.
            </a>
          </p>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src={Rebelcans}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(Rebelcans)}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">Branding</h2>
          <p className="right-text">
            A variety of assets were created to bring the Rebel Brewing Company
            brand to life. Most notably, bespoke beer can labels were designed
            to reflect the brand’s punk rock aesthetic. These labels were then
            incorporated into 3D mockups, ensuring a cohesive brand identity
            across all platforms. Other assets include merchandise mockups and a
            logo design, all of which were created with the brand’s rebellious
            spirit in mind.
          </p>
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

export default Rebel;
