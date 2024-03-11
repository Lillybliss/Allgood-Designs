import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="home-image">
        <h2>
          Elevating Digital Experiences Through Design, Development, and More...
        </h2>
        <Button>Download Resume</Button>
        <Button>View Portfolio</Button>
      </div>

      <div className="about">
        <h1>About Me</h1>
        <h2>Hello and welcome to my online portfolio!</h2>
        <p>
          My name is Lilly Allgood, and I'm a visual designer and web developer
          based in Orlando, Florida. I'm deeply passionate about crafting
          exceptional user experiences and leveraging my creativity to enhance
          the digital world. Currently pursuing a BA in Digital Media at UCF, I
          have immersed myself in various coding languages and design software.
          Throughout my academic journey, I've earned a place on the Honor's
          List, Dean's List, and President's Honor Roll, maintaining a stellar
          4.0 GPA. Outside of academia, I enjoy painting and showcasing my art
          in local galleries and markets. I believe in the power of art as a
          form of self-expression, and I'm committed to using my diverse skills
          to make a meaningful impact in today's digital landscape.
        </p>
      </div>

      <div className="services">
        <h2>Web Design</h2>
        <h2>Web Development</h2>
        <Button>View More</Button>
        <h2>Graphic Design</h2>
        <h2>Digital Marketing</h2>
        <h2>User Experience</h2>
      </div>

      <div className="working-together">
        <image src="https://www.linkedin.com/in/lilly-allgood-0a3b3b1b3/"></image>
        <h2>Curious about working together?</h2>
        <p>
          If you're interested in learning more about my work or would like to
          discuss potential opportunities, please don't hesitate to contact me
          and Visit me on LinkedIn. 
        </p>
        <Button>Contact Me</Button>
      </div>
    </div>
  );
};

export default Home;
