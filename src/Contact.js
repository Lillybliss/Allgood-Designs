import React, { useState } from "react";
import PopUpContact from "./Components/PopUpContact";
import "./Styles/Contact.css";
import email from "./Assets/icons/icons8-email-100.png";

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
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button style={{ cursor: "pointer" }} onClick={handleSubmitClick}>
              Submit
            </button>
            <PopUpContact isOpen={isPopupOpen} closePopup={closePopup} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
