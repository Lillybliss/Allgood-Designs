import React from "react";
import "../Styles/HorizontalTemplate.css";
import tag from "../Assets/icons/icons8-tag-96.png";
import { Link } from "react-router-dom";
import TSSmock from "../Assets/Portfolio/CoverPhotos/TSS_hifi_mockup.png";
import mainTSSMock from "../Assets/Portfolio/TSS_mockup_web_updates.png";
import lowfiTSSmock from "../Assets/Portfolio/TSS_lofi_mockup.png";
import react from "../Assets/icons/react.svg";
import node from "../Assets/icons/node.svg";
import mongo from "../Assets/icons/mongoDB.svg";
import express from "../Assets/icons/express.svg";

const TSS = () => {
  return (
    <div className="portfolio-background">
      <div className="container">
        <div className="together-top">
          <div className="row">
            <h1 className="portfolio-title">The Suite Spot</h1>
            <h2 className="header-subtitle">
              Branding, Web Design, & Responsive Development
            </h2>
            <button className="portfolio-btn">View Website</button>
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
          Our collaborative efforts involved comprehensive branding, web design,
          and responsive development for the platform. Here, I will break down
          each phase of our project: the design phase, development phase, and
          deployment phase. My primary contributions involve shaping the design
          guide, designing prototypes, developing the user account system in
          React.js, and interacting with the database through MongoDB.
        </p>
        <p className="port-about-text">
          Throughout the project, our team showcased exceptional communication
          skills. We efficiently allocated tasks, conducted regular meetings,
          and seamlessly integrated everyone's contributions. This collaborative
          effort not only elevated the quality of our deliverables but also
          cultivated a positive working atmosphere.
        </p>
        <div className="project-tags">
          <img src={tag} alt="tag"></img>
          <p>Branding</p>
          <img src={tag} alt="tag"></img>
          <p>Web Design</p>
          <img src={tag} alt="tag"></img>
          <p>Development</p>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img src={lowfiTSSmock} alt="Mockup" />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Design Phase</h2>
          <p className="right-text">
            In the Design Phase, we meticulously crafted "The Suite Spot" Visual
            Design Guide, a roadmap for visual consistency and brand integrity.
            This involved establishing a unified color palette, defining
            typography, creating logo variations, and detailing each design
            element.
          </p>
          <p className="right-text">
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:ef1b201a-9341-4ea5-b7e1-7251b36fdd5f">View the PDF</a> to explore:
            <ul>
              <li>Our Visual Design Guide</li>
              <li>Guidelines for Accessibility and Responsiveness</li>
              <li>Real-World Use Cases</li>
              <li>A Rigorous Testing Plan</li>
              <li>Wireframe Sketches</li>
              <li>Low Fidelity Prototypes</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="row-1">
        <div className="left-image">
          <img src={TSSmock} alt="Mockup" />
        </div>
        <div className="right-text">
          <h2 className="right-title">The Development Phase</h2>
          <p className="right-text">
            In the Development Phase, we applied our visual design guide to
            create high-fidelity prototypes for both mobile and web screens. The
            test mitigation report outlines results from our testing strategy,
            while the Final Page Tables detail all written content on the site.
            The final strategy guide covers the practical implementation of the
            website, including coding languages and the recommended database
            program.
          </p>
          <p className="right-text">
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:20f44273-1525-450b-ac1b-bb0d2663ed7d">View the PDF</a> to explore:
            <ul>
              <li>High Fidelity Prototypes</li>
              <li>User Testing & Feedback</li>
              <li>Test Mitigation Report</li>
              <li>Final Strategy Guide</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="row-3">
        <img src={mongo} alt="Mockup" />
        <img src={express} alt="Mockup" />
        <img src={react} alt="Mockup" />
        <img src={node} alt="Mockup" />
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
          React.js-based platform. <a href="https://github.com/lwolbrink23/group8">View our Github Repository here.</a>
        </p>
      </div>
    </div>
  );
};

export default TSS;
