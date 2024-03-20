import React from "react";
import "./Styles/Resume.css";
import resumeHeadshot from "./Assets/newone.png";

const Resume = () => {
  return (
    <div>
      <div className="pers-info-container">
        <div className="resume-header">
          <img
            src={resumeHeadshot}
            alt="Lilly Allgood"
            className="resumeHeadshot"
          />
          <div className="transparent-header">
            <h1 className="white-header">Lilly Allgood</h1>
            <button className="resume-btn">Download Resume</button>
          </div>
        </div>

        <div className="pers-info-icons">
          <h2>Orlando, FL</h2>
          <h2>Lillyallgood@ucf.edu</h2>
          <h2>(321) 704-4909</h2>
        </div>

        <div className="skills">
          <h2>What Can I Do?</h2>
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

          <h2>Software Skills</h2>
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

          <h2>Design Skills</h2>
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

          <h2>Personal Skills</h2>
          <ul>
            <li>Customer Service</li>
            <li>Organization</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Creativity</li>
          </ul>
        </div>
      </div>

      <div className="prof-summary">
        <h2>Professional Summary</h2>
        <p>
          Digital Media student with a strong passion for user-centric design
          and creative problem-solving. Skilled in designing and developing
          responsive user interfaces, combining aesthetics and functionality
          seamlessly. Proficient in various design tools and techniques, adept
          at creating impactful solutions in today's digital landscape.
          Passionate contributor to local galleries and markets, showcasing
          artistic talents and fostering self-expression through art. 
        </p>
      </div>

      <div className="Experience">
        <h2>Experience</h2>
        <h3>BLACK DOG DESIGNS</h3>
        <h4>Design Intern</h4>
        <h4>January 2024 - April 2024</h4>
        <ul>
          <li>
            Designed engaging layouts for effective email marketing campaigns,
            enhancing customer outreach.
          </li>
          <li>
            Utilized marketing analytics tools to gather insights and improve
            campaign performance.
          </li>
          <li>
            Produced digital assets for social media platforms, maintaining
            brand coherence across various channels.
          </li>
          <li>
            Worked closely with cross-functional teams to understand marketing
            goals and translated them into visually appealing design solutions.
          </li>
          <li>
            Developed aesthetically pleasing and user-friendly web page designs,
            focusing on optimal user experience and brand consistency.
          </li>
        </ul>

        <h3>Revolution Lash Studio</h3>
        <h4>Manager / Licensed Esthetician</h4>
        <h4>July 2019 - December 2023</h4>
        <ul>
          <li>Led redesign of company's brand identity during rebrand.</li>
          <li>
            Created a variety of marketing collateral, including brochures,
            manuals, and promotional materials, ensuring a cohesive brand image.
          </li>
          <li>
            Assisted in developing monthly promotional campaigns to attract new
            clients.
          </li>
          <li>
            Designed digital assets and composed copy for marketing campaigns.
          </li>
          <li>Fostered friendly, warm, and exceptional customer experience.</li>
          <li>
            Analyzed business performance to identify areas of improvement and
            make necessary adjustments.
          </li>
          <li>
            Trained new estheticians on proper techniques and safety protocols
            to develop capabilities of individuals and improve team efficiency.
          </li>
        </ul>

        <h3>Dr. Jeanette G Warner, MD</h3>
        <h4>Administrative Assistant</h4>
        <h4>February 2018 - July 2019</h4>
        <ul>
          <li>
            Conducted insurance verification and pre-authorizations and managed
            patient charts.
          </li>
          <li>
            Managed over 50 customer calls per day, routed messages and resolved
            patient inquiries within target timeframes.
          </li>
          <li>
            Built and maintained excellent customer relationships through timely
            response to inquiries and going above and beyond to accommodate
            unusual requests.
          </li>
        </ul>
      </div>

      <div className="Education">
        <h2>Education</h2>
        <div className="ucf">
          <p>
            <strong>Bachelor of Arts: Digital Media</strong> - University of
            Central Florida
          </p>
          <p>Expected: May 2024</p>
          <p>
            <strong>Honors and Achievements: </strong>Dean's List, Director's
            Honor Roll, and President's Honor Roll (4.0 GPA)
          </p>
        </div>

        <div className="efsc">
          <p>
            <strong>Associate of Arts: General Studies</strong> - Eastern
            Florida State College
          </p>
          <p>December 2017</p>
        </div>

        <div className="certifications">
          {/*<h2>Certifications</h2>
          <p>Adobe Certified Associate - Visual Design Using Adobe Photoshop</p>
          <p>Adobe Certified Associate - Graphic Design & Illustration Using Adobe Illustrator</p>
          <p>Adobe Certified Associate - Print & Digital Media Publication Using Adobe InDesign</p>
  */}
          <p>
            <strong>Esthetician's License</strong> - The Salon Professional
            Academy
          </p>
          <p>June 2019</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
