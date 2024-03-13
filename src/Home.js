import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import logo from "./Assets/lightblue.svg";
import headshot from "./Assets/headshot_circle.png";
import roundHeadshot from "./Assets/rounded_headshot.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="home-image">
        <img src={logo} alt="Lilly Allgood Logo" className="homeLogo" />
        <div className="home-content">
          <h2 className="tagline">
            Elevating Digital Experiences Through Design, Development, and
            More...
          </h2>
          <div className="home-buttons">
            <Button className="home-btn">
              <Link to="/resume" className="Link">
                Download Resume
              </Link>
            </Button>

            <Button className="home-btn">
              <Link to="/portfolio" className="Link">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="white-box">
          <div className="about-text">
            <h1>About Me</h1>
            <h2>Hello and welcome to my online portfolio!</h2>
            <p>
              My name is Lilly Allgood, and I'm a visual designer and web
              developer based in Orlando, Florida. I'm deeply passionate about
              crafting exceptional user experiences and leveraging my creativity
              to enhance the digital world. Currently pursuing a BA in Digital
              Media at UCF, I have immersed myself in various coding languages
              and design software. Throughout my academic journey, I've earned a
              place on the Honor's List, Dean's List, and President's Honor
              Roll, maintaining a stellar 4.0 GPA. Outside of academia, I enjoy
              painting and showcasing my art in local galleries and markets. I
              believe in the power of art as a form of self-expression, and I'm
              committed to using my diverse skills to make a meaningful impact
              in today's digital landscape.
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
            <Button className="viewMore">
              <Link to="/resume" className="Link">
                View More <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </Button>
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

      <div className="working-together">
        <img
          src={roundHeadshot}
          alt="Headshot"
          className="headshot_round"
        ></img>
        <div className="working-together-text">
          <h2>Curious about working together?</h2>
          <p>
            If you're interested in learning more about my work or would like to
            discuss potential opportunities, please don't hesitate to contact
            me. 
          </p>
          <Button>
            <Link to="/contact" className="Link">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
