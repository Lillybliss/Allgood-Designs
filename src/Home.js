import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import logo from "./Assets/lightblue.svg";
import headshot from "./Assets/headshot_circle_2.png";
import roundHeadshot from "./Assets/rounded_headshot.png";
import "./Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-image">
        <img src={logo} alt="Lilly Allgood Logo" className="homeLogo" />
        <div className="home-content">
          <h2 className="tagline">
            Elevating Digital Experiences Through Design, Development, and
            More...
          </h2>
          <div className="home-buttons">
            <Link to="/Allgood-Designs/resume" className="Link">
              <Button className="home-btn">View Resume</Button>
            </Link>

            <Link to="/Allgood-Designs/portfolio" className="Link">
              <Button className="home-btn">View Portfolio</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="round-div">
        <div className="about-content">
          <div className="about-text">
            <h1>About Me</h1>
            <h2>Hello and welcome to my online portfolio!</h2>
            <p>
              My name is Lilly Allgood. I'm a visual designer and web developer
              based in Orlando, Florida. I'm deeply passionate about crafting
              exceptional user experiences and leveraging my creativity to
              enhance the digital world. While obtaining my BA in Digital Media
              at the University of Central Florida, I have immersed myself in
              industry standard coding languages and design software. In fact, I
              designed and developed this portfolio website from scratch,
              employing the MERN stack.{" "}
            </p>{" "}
            <p>
              I have maintained a place on the Honor's List, Dean's List, and
              President's Honor Roll, maintaining a 4.0 GPA throughout my
              academic career. Outside of academia I enjoy painting and
              showcasing my art in local markets. I believe in art as a powerful
              form of self-expression, and I'm committed to using my diverse
              skills to make a meaningful impact in today's digital landscape.
            </p>
          </div>

          <img src={headshot} alt="Headshot" className="headshot" />
        </div>
      </div>

      <div className="services">
        <div className="topRow">
          <div className="services-1">
            <h2>Web Design</h2>
          </div>

          <div className="services-2">
            <h2>Web Development</h2>
          </div>

          <div className="services-3">
            <Link to="/Allgood-Designs/resume" className="viewMore Link">
              <Button className="viewMore">
                View More <FontAwesomeIcon icon={faArrowRightLong} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="bottomRow">
          <div className="services-4">
            <h2>Graphic Design</h2>
          </div>

          <div className="services-5">
            <h2>Digital Marketing</h2>
          </div>

          <div className="services-6">
            <h2>User Experience</h2>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="working-together">
          <img
            src={roundHeadshot}
            alt="Headshot"
            className="headshot_round"
          ></img>
          <div className="working-together-text">
            <h2>Curious about working together?</h2>
            <p>
              If you're interested in learning more about my work or would like
              to discuss potential opportunities, please don't hesitate
              to contact me. 
            </p>
            <Link to="/Allgood-Designs/contact" className="Link">
              <Button>Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
