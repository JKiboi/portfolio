import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../resources/ProjectList";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(ProjectList);

  useEffect(() => {
    let tempProjects = ProjectList;

    // Filter by category
    if (selectedCategory !== "All") {
      tempProjects = tempProjects.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      tempProjects = tempProjects.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.skills.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(tempProjects);
  }, [searchTerm, selectedCategory]);

  const categories = ["All", ...new Set(ProjectList.map(project => project.category))];

  return (
    <div className="projects">
      <h1> Projects </h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="projectList">
        {filteredProjects.map((project) => (
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
