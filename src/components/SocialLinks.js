import React from "react";
import { Email, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import "../styles/SocialLinks.css";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/JKiboi?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHub />
      </a>
      <a
        href="https://twitter.com/home"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter />
      </a>
      <a
        href="https://www.linkedin.com/login"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </a>
      <a
        href="mailto:anythingtechke@gmail.com"
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Email />
      </a>
    </div>
  );
};