import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/VerticalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData";
import todopic from "../Assets/Portfolio/CoverPhotos/todo_inhand_mockup.png";

const ToDo = () => {
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
            <h1 className="portfolio-title">To-Do App</h1>
            <h2 className="header-subtitle">React Native Mobile App</h2>
            <a
              href="https://lillybliss.github.io/Todo-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">View App</button>
            </a>
          </div>
          <div className="mockup-image">
            <img src={todopic} alt="Mockup" />
          </div>
        </div>
      </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
          The To-Do App is a React Native application designed for efficient
          task management and organization. Users can effortlessly create and
          remove tasks while also filtering them based on completion status.
          Additionally, the app offers user registration functionality, securely
          storing login credentials locally and establishing personalized user
          profiles.
        </p>
        <p className="port-about-text">
          As the sole contributor to this project, I set up the structure of the
          application through multiple stack navigators/screens. This involved
          implementing each screen and integrating robust form validation
          mechanisms for user login and registration screens. Furthermore, I
          engineered the logic responsible for storing personal data locally,
          seamlessly transmitting it to user profiles via navigation parameters.
        </p>
        <p className="port-about-text">
          In terms of task management, I engineered the functionality enabling
          users to seamlessly add and delete tasks. The code also displays task
          search functionality, allowing users to effortlessly sift through
          tasks based on completion status and presenting the filtered results.
          Additionally, I performed comprehensive testing and debugging,
          ensuring the app's seamless functionality.
        </p>
        <p className="port-about-text">
          Key features include:
          <ul>
            <li>Create and delete tasks</li>
            <li>Filter tasks by completion</li>
            <li>Account registration & login</li>
            <li>User profile</li>
          </ul>
          <a
            href="https://lillybliss.github.io/Todo-App/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Github repository here.
          </a>
        </p>
        <div className="project-tags">
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>Development</p>
          </div>
        </div>
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

export default ToDo;
