import React, { useState, useEffect } from "react";
import PopUpContact from "./Components/PopUpContact";
import "./Styles/Contact.css";
import email from "./Assets/icons/contact-email.png";
import FormSpree from "./Components/FormSpree";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);


  const handleNameInputChange = (event) => {
    setNameValue(event.target.value);
  };
  
  const handleNameInputBlur = () => {
    const isValidName = nameValue.trim() !== '';;
    setNameError(!isValidName);
  };

  const handleEmailInputChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleEmailInputBlur = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setEmailError(!isValidEmail);
  };

  const handleCompanyInputChange = (event) => {
    setCompanyValue(event.target.value);
  };

  const handleMessageInputChange = (event) => {
    setMessageValue(event.target.value);
  };

  const handleMessageInputBlur = () => {
    const isValidName = messageValue.trim() !== '';;
    setMessageError(!isValidName);
  };


  const resetForm = () => {
    setNameValue("");
    setCompanyValue("");
    setEmailValue("");
    setMessageValue("");
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  {/*const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      email: emailValue,
      company: companyValue,
      message: messageValue
    }
    // Handle form submission, e.g., send form data to server
    console.log("name: " + formData.name + " company: " + formData.company + " email: " + formData.email +" message: " + formData.message);


    try {
      const response = await fetch('https://formspree.io/f/mgegpagb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        resetForm();
        openPopup();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending your message. Please try again later.');
    }
  };*/}


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-background">
      <div className="contact-background">
        <div className="contact-header-container">
          <h1 className="header-title">Contact Me</h1>
          <h2 className="contact-h2">
            Please contact me if you're interested in learning more about my
            work or would like to discuss potential opportunities.
          </h2>
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
          {/*
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">{""}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name *"
                value={nameValue}
                onChange={handleNameInputChange}
                onBlur={handleNameInputBlur}
                required
              />
              {nameError && (
                <p style={{ color: "red" }}>
                 Please enter your name.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="company">{""}</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={companyValue}
                onChange={handleCompanyInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">{""}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                value={emailValue}
                onChange={handleEmailInputChange}
                onBlur={handleEmailInputBlur}
                required
              />
              {emailError && (
                <p style={{ color: "red" }}>
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message">{""}</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                value={messageValue}
                onChange={handleMessageInputChange}
                onBlur={handleMessageInputBlur}
                rows="4"
                required
              ></textarea>
              {messageError && (
                <p style={{ color: "red" }}>
                  Message cannot be blank.
                </p>
              )}
            </div>
            <button
            type="submit"
            style={{
              color:
                nameValue &&
                emailValue &&
                messageValue &&
                !nameError &&
                !messageError &&
                !emailError
                  ? "black"
                  : "#646464",
              cursor:
                nameValue &&
                emailValue &&
                messageValue &&
                !nameError &&
                !messageError &&
                !emailError
                  ? "pointer"
                  : "not-allowed",
            }}
              className="contact-btn"
              disabled={
                !nameValue ||
                !emailValue ||
                !messageValue ||
                nameError ||
                messageError ||
                emailError
              }
            >
              Send Message
            </button>
            <PopUpContact isOpen={isPopupOpen} closePopup={closePopup} />
          </form> */}
      </div>
    </div>
  );
};

export default Contact;
