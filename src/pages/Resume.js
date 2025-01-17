import React from "react";
import "../styles/Resume.css";
import resume from "../assets/software resume.pdf"; // Path from public folder

const Resume = () => {
    return (
      <div className="resume-download-container">
        <h1>My Resume</h1>
        <p>Click the button below to download my resume:</p>
        <a href={resume} download="james_kiboi_resume.pdf" className="download-button">Download Resume</a>
      </div>
    );
  };

export default Resume;