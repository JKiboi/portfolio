import React from "react";
import { GitHub } from "@material-ui/icons";

const ProjectItem = ({ image, name, link, github, skills }) => {
  return (
    <div className="projectItem">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1>{name}</h1>
      </a>
      <div className="git-skills">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <GitHub />
        </a>
        <p>
          Skills:<span style={{ fontWeight: "bold" }}>{skills}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
