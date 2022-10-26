import { GitHub } from "@material-ui/icons";
import React from "react";

const ProjectItem = ({ image, name, link, github, skills }) => {
  return (
    <div className="projectItem">
      <a href={link} target="_blank" rel="noreferrer">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1>{name}</h1>
      </a>
      <a href={github} target="_blank" rel="noreferrer" className="github">
        <GitHub />
      </a>
      <p>Skills:<span style={{ fontWeight: "bold" }}>{skills}</span></p>
    </div>
  );
};

export default ProjectItem;
