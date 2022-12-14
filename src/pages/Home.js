import { Email, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is James</h2>
         <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <a href="https://github.com/JKiboi?tab=repositories">
          <GitHub />
          </a>
          <a href="https://twitter.com/home">
          <Twitter/>
          </a>
          <a href="https://www.linkedin.com/login">
          <LinkedIn/>
          </a>
          <Email />
          </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS,HTML,EmailJS,CSS,NPM,BootStrap,MaterialUI,StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript,Typescript,CSS3,HTML5</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
