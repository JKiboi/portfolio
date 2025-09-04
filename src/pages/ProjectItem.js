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
            <p className="view-project-prompt">
              View Project <ArrowRight size={18} />
            </p>
          </div>
        </div>
      </a>

      {/* --- Content Area with Permanently Visible Title --- */}
      <div className="project-content">
        <h1>{name}</h1>
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
    </div>
  );
};

export default ProjectItem;