import React, { useState } from "react";
import PopUpContact from "./Components/PopUpContact";
import "./Styles/Contact.css";
import email from "./Assets/icons/contact-email.png";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSubmitClick = () => {
    openPopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send form data to server
    console.log(formData);
  };

  return (
    <div className="home-background">
      <div className="contact-background">
        <div className="contact-header-container">
          <h1 className="header-title">Contact Me</h1>
          <h2 className="contact-h2">
            If you're interested in learning more about my work or would like to
            discuss potential opportunities, please don't hesitate to contact
            me.
          </h2>
          <div className="contact-email">
            <img src={email} alt="Email" className="contact-email-icon" />
            <p className="resume-p">Lillyallgood@ucf.edu</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Let's get in touch!</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="company"></label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button
              style={{ cursor: "pointer" }}
              onClick={handleSubmitClick}
              className="contact-btn"
            >
              Send Message
            </button>
            <PopUpContact isOpen={isPopupOpen} closePopup={closePopup} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
