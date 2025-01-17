import React from "react";
import "../styles/Home.css";
import { SocialLinks } from "../components/SocialLinks";
import { Link } from "react-router-dom";

const SkillItem = ({ title, skills }) => (
    <li className="item">
        <h2>{title}</h2>
        <span>{skills}</span>
    </li>
);

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is James</h2>
        <div className="prompt">
          <p>
            A software developer with a deep passion for learning and creating
            solutions that solve real-life challenges.
          </p>
          <SocialLinks />
        </div>
        <div className="resume">
          <Link to="/resume">View Resume</Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <SkillItem title="Front-End" skills="ReactJS" />
          <SkillItem
            title="Back-End"
            skills="NodeJS, ExpressJS, RESTful APIs, Mpesa DARAJA API"
          />
          <SkillItem title="Database" skills="MongoDB Atlas" />
          <SkillItem title="Languages" skills="JavaScript, TypeScript, CSS3, HTML5" />
        </ol>
      </div>
    </div>
  );
};

export default Home;