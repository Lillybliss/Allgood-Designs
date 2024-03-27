import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData";
import trifold from "../Assets/Portfolio/CoverPhotos/revolution-trifold-small.png";
import trifoldExpanded from "../Assets/Portfolio/trifold-expanded.png";
import lookbook from "../Assets/Portfolio/Lookbook1.png";
import Menu1 from "../Assets/Portfolio/Menu1.png";
import Asign from "../Assets/Portfolio/Asign.png";
import Revsocial from "../Assets/Portfolio/Insta1.png";

const Revolution = () => {
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
      <div className="container-noImage">
        <div className="together-top-noImage">
          <div className="row-noImage">
            <h1 className="portfolio-title">Revolution Lash Studio</h1>
            <h2 className="header-subtitle">Rebrand Marketing Collateral</h2>
            <a
              href="https://github.com/Lillybliss"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        </div>
      </div>

      <div className="noImage-main">
            
            <a href="https://www.canva.com/design/DAGAuTwJe2A/2EqBaCg-8C8qbu8DjhhLrQ/view?utm_content=DAGAuTwJe2A&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
            <img src={trifold} alt="Trifold brochure"          />
            </a>
          </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
        In 2021, Revolution Lash Studio underwent a complete rebrand, necessitating a comprehensive overhaul to capture their new brand identity. 
        This required crafting a new company name, logo design, and refining their online presence with an updated website and social media strategy. 
        Central to the rebrand was the creation of updated marketing collateral. Collaborating closely with the studio, I conceptualized and designed digital 
        assets for email campaigns and social media. Additionally, I designed impactful print materials, ranging from A-frame signs to 
        service menus and operations manuals. These efforts culminated in a unified brand identity that resonates with both existing and potential clients. 
        </p>
        <div className="project-tags">
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Branding</p>
          </div>
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Graphic Design</p>
          </div>
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Digital Marketing</p>
          </div>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src={lookbook}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(lookbook)}
          />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">The "Look Book"</h2>
          <p className="right-text">
          The 'Look Book' serves as a versatile tool catering to both clients and service providers alike. Positioned strategically in the salon's
           waiting area, it offers clients a visual journey through various services, 
           serving as a source of inspiration for their preferred styles. Particularly beneficial for first-time visitors, 
           it simplifies service terminology for easy comprehension. The Look Book also doubles as a sales booster,
            incentivizing additional services while also promoting the company's social media presence.
          </p>
          <p className="right-text">
          <a href="https://www.canva.com/design/DAGAudG4tuw/U3tVX3eOrGZL4i6U3tQYPw/view?utm_content=DAGAudG4tuw&utm_campaign=designshare&utm_medium=link&utm_source=editor"  target="_blank">
              View the digital version here.
            </a>
          </p>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src={Revsocial}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(Revsocial)}
          />
        </div>
        <div className="right-text">
        <h2 className="right-title">Manuals</h2>
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
          <p className="right-text">
          <a href="https://www.canva.com/design/DAGAuYY9hqM/2F06lxqZCXeF-Y1rXfSiEQ/view?utm_content=DAGAuYY9hqM&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
              View the digital Operations Manual here.
            </a>
          </p>
          <p className="right-text">
          <a href="https://www.canva.com/design/DAGAuWEdViQ/ESC7q7MPvuyIjg87r-fgmw/view?utm_content=DAGAuWEdViQ&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
              View the digital Training Manual here.
            </a>
          </p>
        </div>
      </div>


      <div className="row-1">
        <div className="left-image">
          <img
            src={Revsocial}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(Revsocial)}
          />
        </div>
        <div className="right-text">
        <h2 className="right-title">Marketing Campaigns</h2>
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
      
      {/*two images instead*/}
      <div className="row-3-two">
        <div className="servicemenu">
        <img src={Menu1} alt="Menu" style={{ cursor: "pointer" }}
            onClick={() => openPopup(Menu1)}/>
        <p>Service menu.</p>
        </div>
        <div className="asign">
        <img
          src={Asign}
          alt="Asign"
          style={{ cursor: "pointer" }}
            onClick={() => openPopup(Asign)}
        />
        <p>A frame sign.</p>
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

export default Revolution;
