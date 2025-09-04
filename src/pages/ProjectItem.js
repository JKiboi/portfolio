//components/ProjectItem.js
import React from "react";
import { Github, ArrowRight } from "lucide-react";

const ProjectItem = ({ image, name, link, github, skills }) => {
  return (
    <div className="projectItem">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-wrapper">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <div className="project-overlay">
          <div className="overlay-content">
            {/* Title is now part of the hover effect for a cleaner look */}
            <h1>{name}</h1>
            <p className="view-project-prompt">
              View Project <ArrowRight size={18} />
            </p>
          </div>
        </div>
      </a>

      {/* Skills and GitHub link remain permanently visible */}
      <div className="project-info">
        <p>
          <b>Skills:</b> {skills}
        </p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="GitHub Repository"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;