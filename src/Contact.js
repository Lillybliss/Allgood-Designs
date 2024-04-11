import React, { useEffect } from "react";
import "./Styles/Contact.css";
import email from "./Assets/icons/contact-email.png";
import FormSpree from "./Components/FormSpree";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-background">
      <div className="contact-background">
        <div className="contact-header-container">
          <h1 className="header-title">Contact Me</h1>
          <p className="contact-h2">
            Please contact me if you're interested in learning more about my
            work or would like to discuss potential opportunities.
          </p>
          <div className="contact-email">
            <img src={email} alt="Email" className="contact-email-icon" />
            <p className="resume-p">
              <a href="mailto:lilly@allgoodesigns.com" className="cont-email-a">
                lilly@allgoodesigns.com
              </a>
            </p>
          </div>
        </div>

        <FormSpree></FormSpree>
      </div>
    </div>
  );
};

export default Contact;
