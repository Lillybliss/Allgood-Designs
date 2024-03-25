import React, { useState } from "react";
import "./Styles/Resume.css";
import resumeHeadshot from "./Assets/newone.png";
import location from "./Assets/icons/icons8-location-96.png";
import email from "./Assets/icons/icons8-email-100.png";
import phone from "./Assets/icons/icons8-phone-100.png";
import briefcase from "./Assets/icons/icons8-work-100 (1).png";
import PopUpPicture from "./Components/PopUpPicture";

const Resume = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleImageClick = () => {
    openPopup();
  };

  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = process.env.PUBLIC_URL + "/Lillian_Allgood_Resume_Updated.pdf";

    link.download = "Lillian_Allgood_Resume.pdf";

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();
    // Remove the link from the DOM once the download is initiated
    document.body.removeChild(link);
  };

  return (
    <div className="home-background">
      <div className="column-container">
        <div className="pers-info-container">
          <div className="resume-header">
            <img
              src={resumeHeadshot}
              alt="Lilly Allgood"
              className="resumeHeadshot"
              style={{ cursor: "pointer" }}
              onClick={handleImageClick}
            />
            <PopUpPicture
              isOpen={isPopupOpen}
              closePopup={closePopup}
              image={resumeHeadshot}
            />
            <div className="transparent-header">
              <h1 className="white-header">Lilly Allgood</h1>
              <button
                type="button"
                className="resume-btn"
                onClick={handleDownload}
              >
                Download Resume
              </button>
            </div>
          </div>

          <div className="pers-info-icons">
            <div className="location">
              <img src={location} alt="Location" className="location-icon" />
              <p className="resume-p">Orlando, FL</p>
            </div>

            <div className="email">
              <img src={email} alt="Email" className="email-icon" />
              <p className="resume-p"><a href="mailto:lillyallgood@ucf.edu" className="resume-email-a">lillyallgood@ucf.edu</a></p>
            </div>

            <div className="phone">
              <img src={phone} alt="Phone" className="phone-icon" />
              <p className="resume-p">(321) 704-4909</p>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="skills">
            <h2 className="underline">What I Can Do:</h2>
            <ul>
              <li>Responsive Web Design</li>
              <li>Front-End Development</li>
              <li>Branding Collateral (Brochures, Banners, etc.)</li>
              <li>Print Design</li>
              <li>Email Marketing Campaigns</li>
              <li>Social Media Graphics</li>
              <li>Image Editing</li>
              <li>Wireframe and Prototyping</li>
              <li>Mockups</li>
            </ul>

            <h2 className="underline">Software Skills</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Node.js</li>
              <li>Visual Studio Code</li>
              <li>Database Management: MongoDB & MySQL </li>
              <li>Version Control: Git</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe InDesign</li>
              <li>WordPress</li>
              <li>Digital Marketing Analytics: DashThis </li>
              <li>Problem Solving & Debugging</li>
              <li>Microsoft Office</li>
            </ul>

            <h2 className="underline">Design Skills</h2>
            <ul>
              <li>Wireframing & Prototyping</li>
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
              <li>Typography</li>
              <li>Color Theory</li>
              <li>Hand Drawing Proficiency</li>
              <li>Image Editing</li>
              <li>SEO Awareness</li>
              <li>Web Accessibility & Engagement</li>
            </ul>

            <h2 className="underline">Personal Skills</h2>
            <ul>
              <li>Customer Service</li>
              <li>Organization</li>
              <li>Collaboration</li>
              <li>Time Management</li>
              <li>Creativity</li>
            </ul>
          </div>
        </div>

        {/* horizontal rows*/}
        <div className="horizontal-rows">
          <div className="prof-summary">
            <h2 className="underline">Professional Summary</h2>
            <p className="resume-p">
              Digital Media graduate with a strong passion for user-centric
              design and creative problem-solving. Skilled in designing and
              developing responsive user interfaces, combining aesthetics and
              functionality seamlessly. Proficient in various design tools and
              techniques. Adept at creating impactful solutions in today's
              digital landscape. Passionate contributor to local art galleries
              and markets, where personal projects are showcased. 
            </p>
          </div>

          <div className="Experience">
            <h2 className="underline">Experience</h2>
            {/* 1st row */}
            <div className="resumeRow">
              <div className="left-column">
                <img
                  src={briefcase}
                  alt="Briefcase"
                  className="briefcase-icon"
                />
                <div className="vertical-line"></div>
              </div>
              <div className="right-column">
                <p className="resume-p">
                  <strong>BLACK DOG DESIGNS</strong>
                </p>
                <p className="resume-p">Design Intern</p>
                <p className="resume-p">January 2024 - April 2024</p>
                <ul>
                  <li>
                    Designed engaging layouts for effective email marketing
                    campaigns, enhancing customer outreach.
                  </li>
                  <li>
                    Utilized marketing analytics tools to gather insights and
                    improve campaign performance.
                  </li>
                  <li>
                    Produced digital assets for social media platforms,
                    maintaining brand coherence across various channels.
                  </li>
                  <li>
                    Worked closely with cross-functional teams to understand
                    marketing goals and translated them into visually appealing
                    design solutions.
                  </li>
                  <li>
                    Developed aesthetically pleasing and user-friendly web page
                    designs, focusing on optimal user experience and brand
                    consistency.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2nd row */}
            <div className="resumeRow">
              <div className="left-column">
                <img
                  src={briefcase}
                  alt="Briefcase"
                  className="briefcase-icon"
                />
                <div className="vertical-line"></div>
              </div>
              <div className="right-column">
                <p className="resume-p">
                  <strong>Revolution Lash Studio</strong>
                </p>
                <p className="resume-p">Manager / Licensed Esthetician</p>
                <p className="resume-p">July 2019 - December 2023</p>
                <ul>
                  <li>
                    Led redesign of company's brand identity during rebrand.
                  </li>
                  <li>
                    Created a variety of marketing collateral, ensuring a
                    cohesive brand image.
                  </li>
                  <li>
                    Assisted in developing monthly promotional campaigns to
                    attract new clients.
                  </li>
                  <li>
                    Designed digital assets and composed copy for marketing
                    campaigns.
                  </li>
                  <li>
                    Fostered friendly, warm, and exceptional customer
                    experience.
                  </li>
                  <li>
                    Analyzed business performance to identify areas of
                    improvement and make necessary adjustments.
                  </li>
                  <li>
                    Trained new estheticians on proper techniques and safety
                    protocols to develop capabilities of individuals and improve
                    team efficiency.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3rd row */}
            <div className="resumeRow">
              <div className="left-column">
                <img
                  src={briefcase}
                  alt="Briefcase"
                  className="briefcase-icon"
                />
              </div>
              <div className="right-column">
                <p className="resume-p">
                  <strong>Dr. Jeanette G Warner, MD</strong>
                </p>
                <p className="resume-p">Administrative Assistant</p>
                <p className="resume-p">February 2018 - July 2019</p>
                <ul>
                  <li>
                    Conducted insurance verification and pre-authorizations and
                    managed patient charts.
                  </li>
                  <li>
                    Managed over 50 customer calls per day, routed messages and
                    resolved patient inquiries within target timeframes.
                  </li>
                  <li className="bottom">
                    Built and maintained excellent customer relationships
                    through timely response to inquiries and going above and
                    beyond to accommodate unusual requests.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Education">
            <h2 className="underline">Education</h2>
            <div className="ucf">
              <p className="resume-p">
                <strong>Bachelor of Arts: Digital Media</strong> - University of
                Central Florida
              </p>
              <p className="resume-p">Expected: May 2024</p>
              <p className="honors resume-p">
                <strong>Honors and Achievements: </strong>Dean's List,
                Director's Honor Roll, and President's Honor Roll (4.0 GPA)
              </p>
            </div>
            <hr className="horizontal-line" />
            <div className="efsc">
              <p className="resume-p">
                <strong>Associate of Arts: General Studies</strong> - Eastern
                Florida State College
              </p>
              <p className="resume-p">December 2017</p>
            </div>
            <hr className="horizontal-line" />
            <div className="tspa">
              <p className="resume-p">
                <strong>Esthetician's License</strong> - The Salon Professional
                Academy
              </p>
              <p className="resume-p">June 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
