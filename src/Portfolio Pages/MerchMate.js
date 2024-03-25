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
          MerchMate is a mobile app designed to revolutionize the way fans
          engage with concert merchandise, transforming a traditionally
          time-consuming process into a quick and enjoyable experience. By
          embracing technology and user-centric design, MerchMate ensures that
          every concertgoer can effortlessly access and enjoy their favorite
          artist's merchandise without compromising on the live event
          experience. This revolutionary platform is meticulously crafted to
          empower users with real-time information, convenience, and a seamless
          interface.
        </p>
        <p className="port-about-text">
          In essence, MerchMate is more than just an app; it's a game-changer
          for concert enthusiasts, bringing together the excitement of live
          events with the ease of modern technology.
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
            onClick={() => openPopup(MMmock)}
          />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Title</h2>
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

      <div className="row-1">
        <div className="left-image">
          <img
            src={hifiMock}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup({ hifiMock })}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Title</h2>
          <p className="right-text">
            Experience the pinnacle of our design ingenuity through the
            high-fidelity prototype of MerchMate, our revolutionary mobile app.
            Meticulously crafted using the collaborative power of Figma, this
            prototype is the embodiment of our vision, showcasing a thoughtfully
            designed layout. It encompasses an array of features including user
            profiles, favorites, vendor search, online store, real-time stock
            levels, order tracking, and a streamlined checkout process. This
            sophisticated prototype not only reflects our commitment to
            excellence but also serves as the guiding blueprint for creating a
            seamless and responsive mobile experience, ensuring users can
            effortlessly navigate the app and enjoy their favorite concerts
            without missing a beat.
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
        <img src={MMLogo} alt="Mockup" />
        <img src={MMcolors} alt="MerchMate Logo" />
        <img src="https://via.placeholder.com/500" alt="Mockup" />
        <img src="https://via.placeholder.com/500" alt="Mockup" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Title</h2>
        <p className="row-4-text">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
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

export default MerchMate;
