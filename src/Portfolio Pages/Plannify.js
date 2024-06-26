import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData.json";
import Planmock from "../Assets/Portfolio/plannify_inhand_mockup.png";
import PlanHifi from "../Assets/Portfolio/plannifyhifi.png";
import themes from "../Assets/Portfolio/Frame 2.png";
import popupPlannify from "../Assets/Portfolio/Popup.png";
import dropdowns from "../Assets/Portfolio/dropdowns.png";

const Plannify = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (image) => {
    setIsPopupOpen(true);
    setPopupImage(image);
  };

  const closePopup = () => setIsPopupOpen(false);

  const currentProjectId = 5;

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
            <h1 className="portfolio-title">Plannify</h1>
            <h2 className="header-subtitle">UX/UI Design & Prototyping</h2>
            <a
              href="https://www.figma.com/proto/Lr1NH2SpJ1A3VKEq1cNDfu/Pannify-Wireframes-Portfolio?type=design&node-id=2009-766&t=uahUYmMtfq42NfLG-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2009%3A766&show-proto-sidebar=1"
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
          Introducing Plannify, the ultimate all-in-one planner app designed to
          simplify your daily routine. With Plannify, users can effortlessly
          track daily activities, manage workout routines, and cultivate
          positive habits—all in a single, intuitive interface. The app caters
          to individuals with busy lifestyles, offering a "one stop shop" to
          enhance productivity and organization. As the designer of Plannify, I
          initiated the project with thorough research and user feedback.
          Utilizing Figma, I progressed from wireframes to low-fidelity
          prototypes, refining features along the way. The high-fidelity
          prototype, guided by a visual design guide, ensures a visually
          appealing interface.
        </p>
        <div className="project-tags">
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>User Research</p>
          </div>
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>UI Design</p>
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
            src={PlanHifi}
            alt="Mockup"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(PlanHifi)}
          />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>

        <div className="right-text">
          <h2 className="right-title">Interactive Prototype</h2>
          <p className="right-text">
            Carefully designed with Figma, this interactive prototype serves as
            the foundational blueprint for developing a user-friendly mobile
            experience.
          </p>
          <a
            href="https://www.figma.com/proto/Lr1NH2SpJ1A3VKEq1cNDfu/Pannify-Wireframes-Portfolio?type=design&node-id=37-2&t=uahUYmMtfq42NfLG-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=37%3A2&show-proto-sidebar=1"
            target="_blank"
            rel="noreferrer"
          >
            View the mid fidelity prototype here.
          </a>
          <a
            href="https://www.figma.com/proto/Lr1NH2SpJ1A3VKEq1cNDfu/Pannify-Wireframes-Portfolio?type=design&node-id=2009-766&t=uahUYmMtfq42NfLG-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2009%3A766&show-proto-sidebar=1"
            target="_blank"
            rel="noreferrer"
          >
            View the high fidelity prototype here.
          </a>
          <p className="right-text">
            Key features include:
            <ul>
              <li>Workout tracker</li>
              <li>Goal setting</li>
              <li>Task management</li>
              <li>Progress tracking</li>
              <li>Habit Tracking</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="row-3-three">
        <img src={themes} alt="Themes" className="left-pic" />
        <img src={popupPlannify} alt="pop up example" className="middle-pic" />
        <img src={dropdowns} alt="dropdown example" className="right-pic" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">Visual Design Guide</h2>
        <p className="row-4-text">
          The app's visual design guide outlines essential elements like brand
          colors, button designs, and font choices. Several themes were
          developed to accommodate diverse user tastes, with feedback guiding
          the selection of the ultimate design. The app boasts a refreshing
          aesthetic characterized by light and cool tones, featuring blue-grey
          accents and subtle drop shadows on various elements. This
          comprehensive guide forms the foundation for establishing a cohesive
          brand identity, guaranteeing uniformity throughout the app's
          interface.{" "}
          <a
            href="https://www.figma.com/proto/RkUoUIWyckCWJ4gaYe7MOf/Plannify-User-Feedback-%2F-Style-Guide-Portfolio?type=design&node-id=1-16&t=wnO5IFOFeYm3m5F8-1&scaling=scale-down&page-id=0%3A1&mode=design"
            target="_blank"
            rel="noreferrer"
          >
            View the Visual Design Guide here.
          </a>
        </p>
      </div>

      <div className="row-4">
        <h2 className="row-4-title">User Research</h2>
        <p className="row-4-text">
          I began my user research with a series of usability tests conducted on
          similar existing apps, supplemented by a think-aloud protocol and task
          analysis involving a cohort of 5 users. By recording both the user’s
          face as well as the mobile screen, I captured errors, user expressions
          of confusion, and task completion rates. This analysis provided
          invaluable insights, enabling targeted solutions to address identified
          issues within my design framework. Additionally, I conducted
          preliminary user experience surveys to gauge satisfaction levels with
          existing apps and assess the significance of specific features to
          potential users. These surveys provided valuable insights into user
          preferences and expectations, informing the prioritization of features
          and functionalities within the design process.
        </p>
        <p className="row-4-text">
          To validate my design iterations, I engaged in a rigorous cycle of
          user testing and feedback loops, continuously refining the interface
          to cater to the diverse needs of the target audience. Alpha and beta
          user testing phases were conducted across the mid-fidelity and
          high-fidelity prototypes, utilizing think-aloud protocols and task
          analysis methodologies to delve into user behaviors and identify pain
          points.
        </p>
        <p className="row-4-text">
          Upon the completion of the high-fidelity prototype, meticulous
          attention was paid to ensure adherence to WCAG guidelines. This
          entailed meticulous adjustments to address color contrast ratios for
          enhanced readability and the implementation of consistent navigation
          structures to streamline user interactions.
        </p>
        <p className="row-4-text">
          User Experience Surveys: Following the think-aloud protocol sessions
          for the final design iteration, I administered a survey to solicit
          extensive feedback from participants. This survey aimed to capture
          insights into overall experience, usability, and satisfaction,
          including perspectives on accessibility from users with disabilities.
        </p>
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
