// src/pages/Home.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Projects.css"; // For consistent project item styling
import { SocialLinks } from "../components/SocialLinks";
import developerPhoto from "../assets/pass.JPG";
import Typed from "typed.js";
import SkillBar from "../components/SkillBar";
import { ProjectList } from "../resources/ProjectList";
import ProjectItem from "./ProjectItem";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, I'm James Kiboi.",
        "A Full-Stack AI Engineer.",
        "An Autonomous Agent Architect.",
        "A RAG and Vector Search Specialist.",
        "A MERN Stack Expert.",
        "Let's build intelligent systems."
      ],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Get the first 3 projects to feature
  const featuredProjects = ProjectList.slice(0, 3);

  return (
    <div className="home">
      {/* ====== ABOUT SECTION ====== */}
      <div className="about">
        <div className="about-content">
          <div className="developer-photo">
            <img src={developerPhoto} alt="Developer" />
          </div>
          <div className="about-text">
            <div className="typed-container">
              <span ref={el} className="typed-text"></span>
            </div>
            <p className="bio">
              My focus is on architecting and deploying autonomous agents and sophisticated
              RAG pipelines that bridge the gap between powerful LLMs and practical business
              needs. I transform standard MERN applications into dynamic, self-sufficient
              systems, turning complex data into intelligent, actionable user experiences.
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="cta-button">
                View My Work
              </Link>
            </div>
            <div className="prompt">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ====== FEATURED PROJECTS SECTION ====== */}
      <div className="featured-projects">
        <h1 className="featured-projects-title">Featured Projects</h1>
        <div className="projectList">
          {featuredProjects.map((project) => (
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

      {/* ====== SKILLS SECTION ====== */}
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-bars-container">
          <SkillBar title="ReactJS" percentage={90} />
          <SkillBar
            title="NodeJS, ExpressJS, RESTful APIs, Mpesa DARAJA API"
            percentage={85}
          />
          <SkillBar title="MongoDB Atlas" percentage={75} />
          <SkillBar
            title="JavaScript, TypeScript, CSS3, HTML5"
            percentage={95}
          />
          <SkillBar
            title="LLM Integration, RAG, LangChain, LLM API"
            percentage={85}
          />
          <SkillBar
            title="AI Workflow Automation & Chatbot Development"
            percentage={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;