import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import PopUpContact from "./PopUpContact";

const FormSpree = () => {
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

  const [state, handleSubmit] = useForm("mgegpagb");

  useEffect(() => {
    if (state.succeeded) {
      resetForm();
      openPopup();
    }
  }, [state.succeeded]);

  const handleNameInputChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleNameInputBlur = () => {
    const isValidName = nameValue.trim() !== "";
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
    const isValidName = messageValue.trim() !== "";
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

  return (
    <div className="contact-form-container">
      <h2>Let's get in touch!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          placeholder="Full Name *"
          id="name"
          type="text"
          name="name"
          required
          value={nameValue}
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
        />
        {nameError && <p className="contact-error">Please enter your name.</p>}

        <label htmlFor="company"></label>
        <input
          placeholder="Company"
          id="company"
          type="text"
          name="company"
          value={companyValue}
          onChange={handleCompanyInputChange}
        />

        <label htmlFor="email"></label>
        <input
          placeholder="Email *"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          required
        />
        {emailError && (
          <p className="contact-error">Please enter a valid email address.</p>
        )}

        <label htmlFor="message"></label>
        <textarea
          placeholder="Message *"
          id="message"
          name="message"
          rows="4"
          value={messageValue}
          onChange={handleMessageInputChange}
          onBlur={handleMessageInputBlur}
          required
        />
        {messageError && (
          <p className="contact-error">Message cannot be blank.</p>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="contact-btn"
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
        >
          Send Message
        </button>
        <PopUpContact isOpen={isPopupOpen} closePopup={closePopup} />
      </form>
    </div>
  );
};

export default FormSpree;
