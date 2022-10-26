import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../resources/ProjectList";


const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => (
          <ProjectItem
          key={project.id}
          name={project.name}
          link={project.link}
          image={project.image}
          github={project.github}
          skills={project.skills}
        />
        ))}
      </div>
    </div>
  );
};

export default Projects;
