import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import TSSmock from "../Assets/Portfolio/CoverPhotos/TSS_hifi_mockup.png";
import mainTSSMock from "../Assets/Portfolio/TSS_mockup_web_updates.png";
import lowfiTSSmock from "../Assets/Portfolio/TSS_lofi_mockup.png";
import colorblind from "../Assets/Portfolio/colorblind.png";
import react from "../Assets/icons/react.svg";
import node from "../Assets/icons/node.svg";
import mongo from "../Assets/icons/mongoDB.svg";
import express from "../Assets/icons/express.svg";
import PopUpPicture from "../Components/PopUpPicture";
import portfolioData from "../Data/portfolioData.json";

const TSS = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = (image) => {
    setIsPopupOpen(true);
    setPopupImage(image);
  };

  const closePopup = () => setIsPopupOpen(false);

  const currentProjectId = 1;

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
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 200);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

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
            <h1 className="portfolio-title">The Suite Spot</h1>
            <h2 className="header-subtitle">
              UX/UI Design & Responsive Development
            </h2>

            <a
              href="https://the-suite-spot.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-btn">View Website</button>
            </a>
          </div>
          <div className="mockup-image">
            <img src={mainTSSMock} alt="Mockup" />
          </div>
        </div>
      </div>

      <div className="port-about-container">
        <h2 className="port-about-title">About</h2>
        <p className="port-about-text">
          Over the course of my final year at UCF, I collaborated closely with a
          team of four fellow students on an extensive project dedicated to
          crafting 'The Suite Spot,' a salon suites website. “The Suite Spot" is
          a salon suites website designed to empower users by providing
          information about the company, facilitating appointment bookings with
          service providers, enabling interaction with the online shop, and
          managing orders/appointments through user accounts.
        </p>
        <p className="port-about-text">
          Our collaborative efforts involved comprehensive user research, UI
          design, and responsive development for the platform. Here, I will
          break down each phase of our project: the design phase, development
          phase, and deployment phase. My primary contributions involve shaping
          the design guide, designing prototypes, developing the user account
          system in React.js, and interacting with the database through MongoDB.
        </p>
        <p className="port-about-text">
          Throughout the project, our team showcased exceptional communication
          skills. We efficiently allocated tasks, conducted regular meetings,
          and seamlessly integrated everyone's contributions. This collaborative
          effort not only elevated the quality of our deliverables but also
          cultivated a positive working atmosphere.
        </p>
        <p className="port-about-text">
          My team members include Lindsey Wolbrink, Brianna Lattimore, Callie
          Vaughn, and Quynh Vo.
        </p>
        <div className="project-tags">
          <div className="tag">
            <img src={tag} alt=""></img>
            <p>User Research</p>
          </div>
          <div className="tag">
            <img src={tag} alt=""></img>
            <p>UI Design</p>
          </div>
          <div className="tag">
            <img src={tag} alt=""></img>
            <p>Responsive Development</p>
          </div>
          <div className="tag">
            <img src={tag} alt=""></img>
            <p>Wireframe & Prototyping</p>
          </div>
        </div>
      </div>

      <div className="oneimageinrow">
        <img
          src={lowfiTSSmock}
          alt="Low Fidelity Mockup"
          style={{ cursor: "pointer" }}
          onClick={() => openPopup(lowfiTSSmock)}
        />
      </div>

      <div className="padding"> </div>

      <div className="row-4">
        <h2 className="row-4-title">The Design Phase</h2>
        <p className="row-4-text">
          In the Design Phase, we meticulously crafted "The Suite Spot"{" "}
          <a
            href="https://www.figma.com/proto/k4C2KZmCtMaxVQGRtdfbsn/Design-Phase-Portfolio?type=design&node-id=1-2&t=wkGeYFbm50NuNsrP-1&scaling=min-zoom&page-id=0%3A1&mode=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Design Guide
          </a>
          , a roadmap for visual consistency and brand integrity. This involved
          establishing a unified color palette, defining typography, creating
          logo variations, and detailing each design element. We began our
          design with{" "}
          <a
            href="https://app.uizard.io/p/39a0e03a"
            target="_blank"
            rel="noopener noreferrer"
          >
            wireframe sketches
          </a>{" "}
          that were then iterated into interactive, low fidelity prototypes. Our{" "}
          <a
            href="https://www.figma.com/proto/uWYDFIJV0JLLFfSclhmAns/Mobile-LoFi-Prototype-(Copy)?type=design&node-id=1-2&t=H0qNFjaxjNCALpUX-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            low-fidelity mobile prototype
          </a>{" "}
          is an early representation of the site's design, developed as part of
          our iterative design process. Using the collaborative design tool
          Figma, we created a simplified mobile layout that outlines the basic
          structure and user interactions. This prototype enables us to test and
          refine the design's functionality, ensuring that our website is
          user-friendly on smaller screens.
        </p>
        <p className="row-4-text">
          The{" "}
          <a
            href="https://www.figma.com/proto/EUTAwSICIDWIAJ6Uv4loN4/Web-LoFi-Prototype-(Copy)?type=design&t=6v64mAEcuvCof0RW-1&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            low-fidelity web prototype
          </a>{" "}
          was also developed collaboratively with Figma. The concept provides a
          foundational layout for larger screens, emphasizing content
          organization, navigation, and information hierarchy. Although it lacks
          visual finesse, this prototype aids us in planning the spatial
          arrangements and user interactions for the desktop experience. It's an
          integral part of our design process, enabling us to create a visually
          pleasing and user-friendly desktop layout.
        </p>
      </div>

      <div className="row-4">
        <h2 className="row-4-title">Accessibility & Responsive Guidelines</h2>
        <p className="row-4-text">
          In preparation for user research, we created robust{" "}
          <a
            href="https://www.figma.com/proto/k4C2KZmCtMaxVQGRtdfbsn/Design-Phase-Portfolio?type=design&node-id=133-3&t=x4m22RXVf4QxFpNa-0&scaling=min-zoom&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            guidelines for accessibility and responsiveness
          </a>{" "}
          to enhance the user experience on our final website deployment. Our
          approach to responsiveness prioritizes a mobile-first strategy,
          employing fluid layout units, multiple breakpoints, and relative
          typography units such as ems. This ensures seamless adaptation across
          various screen sizes while maintaining optimal readability and
          usability.
        </p>
        <p className="row-4-text">
          Furthermore, our dedication to accessibility aligns with WCAG
          guidelines, encompassing practices such as semantic HTML utilization,
          comprehensive alternative text implementation, deliberate focus
          styles, and form accessibility enhancements. We meticulously address
          color contrast ratios to facilitate readability for all users,
          alongside implementing consistent navigation structures. To validate
          our efforts, we engage in thorough user testing and feedback loops,
          continually refining our design to meet the diverse needs of our
          audience.
        </p>
      </div>

      <div className="row-4">
        <h2 className="row-4-title">User Research</h2>
        <p className="row-4-text">
          Initiating our user research, we formulated{" "}
          <a
            href="https://www.figma.com/proto/k4C2KZmCtMaxVQGRtdfbsn/Design-Phase-Portfolio?type=design&node-id=9-32&t=x4m22RXVf4QxFpNa-0&scaling=min-zoom&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            real-world use cases
          </a>{" "}
          tailored to our target audience, ensuring alignment with their needs
          and expectations. With a{" "}
          <a
            href="https://www.figma.com/proto/k4C2KZmCtMaxVQGRtdfbsn/Design-Phase-Portfolio?type=design&node-id=459-3&t=x4m22RXVf4QxFpNa-0&scaling=min-zoom&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            robust testing plan
          </a>{" "}
          meticulously crafted for each phase—alpha and beta testing for the
          low-fidelity prototype, high-fidelity prototype, and deployed
          website—we embarked on a comprehensive examination of user
          interactions and experiences.
        </p>
        <p className="row-4-text">
          Utilizing{" "}
          <a
            href="https://docs.google.com/document/d/1O7vDT5TvPpgZyDgUO4ZrOcXz0Cx4ijcMYh_pSlMsDcM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            think-aloud protocols and task analysis methodologies
          </a>{" "}
          during usability testing sessions, we delved into user behaviors,
          identifying areas of confusion, error occurrences, and task completion
          rates. This deep dive into interaction analysis played a pivotal role
          in refining our prototypes as we progressed towards the final design
          iteration.
        </p>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img
            src={colorblind}
            alt="colorblind test"
            style={{ cursor: "pointer" }}
            onClick={() => openPopup(colorblind)}
          />
          <PopUpPicture
            isOpen={isPopupOpen}
            closePopup={closePopup}
            image={popupImage}
          />
        </div>
        <div className="right-text">
          <h2 className="right-title">Accessibility Testing</h2>
          <p className="right-text">
            Our testing scope encompassed various disabilities. We prioritized
            functionalities enabling screen reader compatibility, keyboard
            navigation, and other essential tools utilized by diverse user
            groups.
          </p>
          <p className="right-text">
            Leveraging online resources such as the WAVE accessibility
            evaluation tool and Google PageSpeed Insights, we assessed
            accessibility compliance and performance optimization. Additionally,
            the Toptal color blind test aided in evaluating contrast levels.
          </p>
        </div>
      </div>

      <div className="row-4">
        <h2 className="row-4-title">Test Mitigation Report</h2>
        <p className="row-4-text">
          Following our user research, we compiled a{" "}
          <a
            href="https://www.figma.com/proto/lo1byXOalM5blNw7NzhTeX/Develop-Phase-Portfolio?type=design&node-id=9-32&t=9Jn8491jwRexfMLF-0&scaling=min-zoom&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            test mitigation report
          </a>{" "}
          . This report contains an overview of our testing methodologies, key
          findings, and mitigation strategies adopted to address identified
          issues.
        </p>
        <p className="row-4-text">
          <strong>Testing Plan Review: </strong>Our detailed testing plan,
          established during the design phase, served as the cornerstone for our
          testing procedures.
        </p>
        <p className="row-4-text">
          <strong>Think Aloud Protocol: </strong>To ensure comprehensive
          coverage of our user interface, we implemented think-aloud protocols
          involving 15 participants. This structured approach facilitated
          balanced task distribution across participant groups, enabling
          thorough data collection and analysis.{" "}
        </p>
        <p className="row-4-text">
          <strong>Task/Interaction Analysis: </strong>Our task analysis
          methodology involved meticulous recording of errors, user expressions
          of confusion, and task completion rates. This detailed analysis
          enabled us to pinpoint areas requiring attention and implement
          necessary improvements.{" "}
        </p>
        <p className="row-4-text">
          <strong>User Experience Surveys: </strong>Post think-aloud protocol,
          we administered a{" "}
          <a
            href="https://www.figma.com/proto/lo1byXOalM5blNw7NzhTeX/Develop-Phase-Portfolio?type=design&node-id=824-2&t=9Jn8491jwRexfMLF-0&scaling=min-zoom&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            survey to gather extensive feedback from our participants
          </a>
          . This survey aimed to capture insights into overall experience,
          usability, and satisfaction, including perspectives on accessibility
          from users with disabilities.{" "}
        </p>
      </div>

      <div className="padding"></div>

      <div className="oneimageinrow">
        <img
          src={TSSmock}
          alt="High Fidelity Mockup"
          style={{ cursor: "pointer" }}
          onClick={() => openPopup(TSSmock)}
        />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Development Phase</h2>
        <p className="row-4-text">
          In this Phase, we applied our visual design guide to create{" "}
          <a
            href="https://www.figma.com/proto/tOqTtka7fghoRRHIc56d1U/Mobile-Hifi-Portfolio?type=design&node-id=1-77&t=KF0wuzSpdvDF4Dgm-0&scaling=scale-down&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            high-fidelity prototypes for mobile
          </a>{" "}
          and{" "}
          <a
            href="https://www.figma.com/proto/rWEF1VH3mkzMKWngkHzHhd/Web-HiFi-Portfolio?type=design&t=KF0wuzSpdvDF4Dgm-0&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            web screens
          </a>{" "}
          . Comprehensive Final Page Tables were compiled, outlining all textual
          content featured across the site. Additionally, a final strategy guide
          was formulated, delineating the practical implementation aspects of
          the website, encompassing coding languages and recommended database
          programs. Our database collections and values spreadsheets
          meticulously documented the intricacies of user interactions,
          delineating the CRUD operations performed in response to user actions.
          This phase also saw the culmination of our design guide and
          high-fidelity prototype, following the conclusion of final user
          testing rounds.
        </p>
      </div>

      <div className="row-3">
        <img src={mongo} alt="MongoDB" />
        <img src={express} alt="Express" />
        <img src={react} alt="React" />
        <img src={node} alt="Node" />
      </div>

      <div className="row-4">
        <h2 className="row-4-title">The Deployment Phase</h2>
        <p className="row-4-text">
          In the Deployment phase, our team successfully implemented a MongoDB
          database tailored to meet the diverse data storage needs of our
          website, encompassing user accounts, product details, appointment
          bookings, and newsletter/blog subscriptions. MongoDB, selected for its
          scalability and seamless integration with our chosen backend
          framework, Express.js on Node.js, ensures efficient handling of
          various data types. Programmed in a MERN (MongoDB, Express.js,
          React.js, Node.js) stack, our website benefits from the flexibility
          and scalability provided by these technologies. The custom API,
          developed to bridge the gap between the React.js-powered frontend and
          MongoDB, facilitates real-time data interactions. Notably, we
          introduced a user validation system to enhance security, ensuring that
          only authenticated users can make purchases and appointments. This
          comprehensive back-end development work establishes a sturdy
          foundation for a scalable, efficient, and user-friendly website,
          setting the stage for future enhancements and features in our
          React.js-based platform.{" "}
          <a
            href="https://github.com/lwolbrink23/group8"
            target="_blank"
            rel="noopener noreferrer"
          >
            View our Github Repository here.
          </a>
        </p>
      </div>
      <div className="row-4">
        <h2 className="row-4-title">You May Also Like:</h2>
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
  );
};

export default TSS;
