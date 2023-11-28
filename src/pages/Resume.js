import React from "react";
import resume from "../assets/resumedev.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <iframe
        title="My Resume"
        src={resume}
        width="100%"
        height="800px"
      ></iframe>
    </div>
  );
};

export default Resume;
