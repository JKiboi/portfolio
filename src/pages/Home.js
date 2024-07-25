import { Email, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is James</h2>
        <div className="prompt">
          <p>A software developer with a deep passion for learning and creating solutions that solve real-life challenges.</p>
          <div className="social-links">
            <a href="https://github.com/JKiboi?tab=repositories">
              <GitHub />
            </a>
            <a href="https://twitter.com/home">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/login">
              <LinkedIn />
            </a>
            <a href="mailto:anythingtechke@gmail.com">
              <Email />
            </a>
          </div>
        </div>
        <div className="resume">
          <Link to="/resume">View Resume</Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, JavaScript, ReactJS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB Atlas, RESTful APIs, Mpesa DARAJA API</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, CSS3, HTML5</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
