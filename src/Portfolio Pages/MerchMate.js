import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData";
import MMmock from "../Assets/Portfolio/merchmate_inhand_mockup.png";
import hifiMock from "../Assets/Portfolio/merchmate_mockup_transparent.png";
import MMad from "../Assets/Portfolio/MMad.png";
import MMLogo from "../Assets/Portfolio/MMLogo.png";
import MMcolors from "../Assets/Portfolio/MMcolors.png";
import MMtypography from "../Assets/Portfolio/Frame 3.png";

const MerchMate = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

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

  return (
    <div className="portfolio-background">
      <div className="container">
        <div className="together-top">
          <div className="row">
            <h1 className="portfolio-title">MerchMate Project</h1>
            <h2 className="header-subtitle">Mobile App Prototype</h2>
            <a
              href="https://www.figma.com/proto/T8VR19INyceYt6xXxw1XWa/MerchMate-Mobile-Prototype-(Copy)?type=design&node-id=1-2&t=J7FynIHyF4GWKb0t-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">View Prototype</button>
            </a>
          </div>
          <div className="mockup-image">
            <img src={MMmock} alt="Mockup" />
          </div>
        </div>
      </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
          As the designer of MerchMate, a hypothetical mobile app concept, I
          initiated the project with thorough research and user feedback.
          Utilizing Figma, I progressed from wireframes to low-fidelity
          prototypes, refining features along the way. The high-fidelity
          prototype, guided by a visual design guide, ensured a visually
          appealing interface. Although the concept is hypothetical,
          considerations such as project management, scope, and budget were
          carefully addressed. The focus remained on user experience throughout,
          resulting in a seamless and enjoyable mobile app concept aimed at
          revolutionizing event experiences.
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
          <img
            src={MMad}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(MMad)}
          />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Concept</h2>
          <p className="right-text">
            MerchMate is a mobile app designed to revolutionize the way fans
            engage with concert merchandise, transforming a traditionally
            time-consuming process into a quick and enjoyable experience. By
            embracing technology and user-centric design, MerchMate ensures that
            every concertgoer can purchase merchandise without compromising on
            the live event experience. The app is made to empower users with
            real-time information, convenience, and a seamless interface.
          </p>
        </div>
      </div>

      <div className="row-3-three">
        <img src={MMLogo} alt="Mockup" />
        <img src={MMcolors} alt="MerchMate Logo" />
        <img src={MMtypography} alt="Mockup" />
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
      </div>
      <div className="padding"></div>

      <div className="row-1">
        <div className="left-image">
          <img
            src={hifiMock}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(hifiMock)}
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
              <li>Real-time updates on merchandise availability</li>
              <li>Vendor search</li>
              <li>Easy-to-use online store</li>
              <li>Order tracking</li>
              <li>Personalized user profiles</li>
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

export default MerchMate;
