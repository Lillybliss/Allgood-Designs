import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import portfolioData from "../Data/portfolioData.json";
import AllgoodSmall from "../Assets/Portfolio/CoverPhotos/Allgood_Designs_Mockup_smaller.png";
import ADlofi from "../Assets/Portfolio/AllgoodDesigns_lofi.jpg";
import brand1 from "../Assets/Portfolio/ADbranding1.png";
import brand2 from "../Assets/Portfolio/ADbranding2.png";
import brand4 from "../Assets/Portfolio/ADbranding4.png";

const AllgoodDesigns = () => {
  const [isVisible, setIsVisible] = useState(false);

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
            <h1 className="portfolio-title">Allgood Designs</h1>
            <h2 className="header-subtitle">
              UX/UI Design, & Responsive Development
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
          Allgood Designs is a personal project that showcases my skills in web
          design and development. I created Allgood Designs to demonstrate my
          capabilities to potential employers and clients. The site is a
          testament to my passion for design and my commitment to excellence.
          The project is divided into three phases: Design, Development, and
          Deployment. Continue reading below to learn more about each phase.
        </p>
        <div className="project-tags">
          <div className="tag">
            <img src={tag} alt="tag"></img>
            <p>UX/UI Design</p>
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
      <div className="padding"></div>

      <div className="padding"></div>

      <div className="oneimageinrow">
        <img src={ADlofi} alt="Low Fidelity Mockup" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Design Phase</h2>
        <p className="row-4-text">
          In the Design Phase, I utilized my information architecture to craft a
          preliminary vision for the Allgood Designs website through a{" "}
          <a
            href="https://www.figma.com/proto/Ln6ise2FDmAL8XocUqWsp5/My-Portfolio?type=design&node-id=19-345&t=k9DFvPjazrnfEzjC-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=19%3A345"
            target="_blank"
            rel="noopener noreferrer"
          >
            low-fidelity prototype.
          </a>{" "}
          I began by sketching wireframes on paper, which I then translated into
          digital form using Figma. This process allowed me to visualize the
          site’s layout, ensuring a user-friendly experience.
        </p>
        <p className="row-4-text">
          My design process was informed by a mood board that I curated. The
          board featured a collection of images, colors, and typography that
          inspired the site’s aesthetic. I selected a palette of soft, calming
          tones, accented by a vibrant pink hue. This color scheme was chosen to
          evoke a sense of tranquility and creativity, reflecting the essence of
          Allgood Designs.
        </p>
      </div>

      {/*three images instead of 4*/}
      <div className="row-3-three">
        <img src={brand4} alt="Mockup" />
        <img src={brand2} alt="Mockup" />
        <img src={brand1} alt="Mockup" />
      </div>

      <div className="padding"></div>

      <div className="oneimageinrow">
        <img src={AllgoodSmall} alt="High Fidelity Mockup" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Development Phase</h2>
        <p className="row-4-text">
          In the Development Phase, I focused on user experience and developing
          my website from my final{" "}
          <a
            href="https://www.figma.com/proto/Ln6ise2FDmAL8XocUqWsp5/My-Portfolio?type=design&node-id=97-2893&t=k9DFvPjazrnfEzjC-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=97%3A2893&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            high-fidelity prototype.
          </a>{" "}
          Embracing the cloud motif as a unifying element, I ensured coherence
          throughout the website. The chosen pink hue, both subdued and
          eye-catching, serves as a distinct accent, aiding in highlighting key
          calls to action. Additionally, I opted for a modern, easily legible
          font to enhance user experience.
        </p>
        <p className="row-4-text">
          My programming language of choice for my portfolio is React.js.
          React’s component-based architecture allowed me to create reusable
          elements, streamlining the development process. I also employed React
          Router to manage the application’s navigation. Throughout development,
          I used the Toptal Colorblind Tool and the WAVE Web Accessibility
          Evaluation Tool to identify and correct any accessibility issues. I
          also tested the site on various devices to ensure its responsive
          design. I made adjustments to the layout and typography to ensure that
          the site was visually appealing on all screen sizes.
        </p>
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Deployment Phase</h2>
        <p className="row-4-text">
          For now, my site is only operating on the front end using React and
          Node.js. I plan to add a back end connection using a MERN Stack in the
          future.
        </p>
        <p className="row-4-text">
          I deployed my site using the node package "npm run build". This
          package is a script that creates a production build of the site. The
          build is minified and the filenames include the hashes. Next, I
          uploaded the build folder to my custom domain's cPanel. I then added a
          .htaccess file to the build folder to redirect all traffic to the
          index.html file. This ensures that the React Router can handle the
          routing.{" "}
          <a
            href="https://github.com/Lillybliss/Allgood-Designs"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Github Repository here.
          </a>
        </p>
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

export default AllgoodDesigns;
