import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import { SocialLinks } from "../components/SocialLinks";
import developerPhoto from "../assets/pass.JPG";
import Typed from "typed.js";
import SkillBar from "../components/SkillBar";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, My name is James",
        "A software developer with a deep passion for learning and creating solutions that solve real-life challenges.",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <div className="about">
        <div className="developer-photo">
          <img src={developerPhoto} alt="Developer" />
        </div>
        <span ref={el} className="typed-text"></span>
        <div className="prompt">
          <SocialLinks />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-bars-container">
          <SkillBar title="ReactJS" percentage={90} />
          <SkillBar title="NodeJS, ExpressJS, RESTful APIs, Mpesa DARAJA API" percentage={85} />
          <SkillBar title="MongoDB Atlas" percentage={75} />
          <SkillBar title="JavaScript, TypeScript, CSS3, HTML5" percentage={95} />
        </div>
      </div>
    </div>
  );
};

export default Home;