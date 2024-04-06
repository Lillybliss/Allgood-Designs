import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData";
import Planmock from "../Assets/Portfolio/plannify_inhand_mockup.png";
import PlanlowfiMock from "../Assets/Portfolio/lofitogether.png";
import PlannifyConcept from "../Assets/Portfolio/plannerstock.jpg";

const Plannify = () => {
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
            <h1 className="portfolio-title">Plannify</h1>
            <h2 className="header-subtitle">Mobile App Prototype</h2>
            <a
              href="https://www.figma.com/proto/Tg7j924fNpBGgarUJoZEai/Pannify-Wireframe-Portfolio?type=design&t=J6i90oeweBBPNP4r-0&scaling=scale-down&page-id=0%3A1&node-id=37-2&starting-point-node-id=37%3A2&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">View Prototype</button>
            </a>
          </div>
          <div className="mockup-image">
            <img src={Planmock} alt="Mockup" />
          </div>
        </div>
      </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
          As the designer of Plannify, a hypothetical mobile app concept, I
          initiated the project with thorough research and user feedback.
          Utilizing Figma, I progressed from wireframes to low-fidelity
          prototypes, refining features along the way. The high-fidelity
          prototype, guided by a visual design guide, is currently being created
          in order to ensure a visually appealing interface. Check back soon to
          see the completed high fidelity prototype!
        </p>
        <div className="project-tags">
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Branding</p>
          </div>
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Wireframe & Prototyping</p>
          </div>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img src={PlannifyConcept} alt="Mockup" />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Concept</h2>
          <p className="right-text">
            Introducing Plannify, the ultimate all-in-one planner app designed
            to simplify your daily routine. With Plannify, users can
            effortlessly track daily activities, manage workout routines, and
            cultivate positive habits—all in a single, intuitive interface. The
            app caters to individuals with busy lifestyles, offering a "one stop
            shop" to enhance productivity and organization.
          </p>
        </div>
      </div>
      {/* <div className="padding"></div> 
      <div className="row-3-three">
        <img src={MMLogo} alt="Mockup" className="left-pic" />
        <img src={MMcolors} alt="MerchMate Logo" className="middle-pic" />
        <img src={MMtypography} alt="Mockup" className="right-pic" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">Visual Design Guide</h2>
        <p className="row-4-text">
          The visual design guide for the app details key features such as logo
          usage, brand colors, button styling, fonts, and more. The MerchMate
          logo features a distinctive clothing hanger, elegantly rendered in the
          brand's signature blue hue. This carefully chosen design embodies the
          essence of MerchMate, seamlessly blending functionality and style. The
          hanger symbolizes the app's primary focus on providing users with a
          convenient and efficient platform to access live concert merchandise.
          This guide served as the cornerstone for crafting a distinct brand
          identity, ensuring consistency across the app's interface.
        </p>
      </div>*
      <div className="padding"></div>
      */}

      <div className="row-1">
        <div className="left-image">
          <img
            src={PlanlowfiMock}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(PlanlowfiMock)}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">Interactive Prototype</h2>
          <p className="right-text">
            Carefully designed with Figma, this interactive prototype serves as
            the foundational blueprint for developing a smooth and adaptable
            mobile experience.
          </p>
          <p className="right-text">
            Key features include:
            <ul>
              <li>Customizable daily planner</li>
              <li>Collaborative Entries</li>
              <li>Workout tracker</li>
              <li>Goal setting</li>
              <li>Task management</li>
              <li>Progress tracking</li>
              <li>Habit Tracking</li>
              <li>Reminder notifications</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="padding"> </div>

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

export default Plannify;
