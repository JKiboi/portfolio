//components/ProjectItem.js
import React, { useState, useEffect, useRef } from "react";
import { Github, ArrowRight } from "lucide-react";

const ProjectItem = ({ image, name, link, github, skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    // Capture the ref's current value as recommended by ESLint
    const currentItemRef = itemRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the item is 60% visible, set state to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.6, // Trigger when 60% of the item is in the viewport
      }
    );

    if (currentItemRef) {
      observer.observe(currentItemRef);
    }

    // Use the captured variable in the cleanup function
    return () => {
      if (currentItemRef) {
        observer.unobserve(currentItemRef);
      }
    };
  }, []);

  // Conditionally add the 'is-visible' class
  const itemClasses = `projectItem ${isVisible ? 'is-visible' : ''}`;

  return (
    <div className={itemClasses} ref={itemRef}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-wrapper">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <div className="project-overlay">
          <div className="overlay-content">
            <p className="view-project-prompt">
              View Project <ArrowRight size={18} />
            </p>
          </div>
        </div>
      </a>

      <div className="project-content">
        {/* REQUIREMENT 1: Title is now permanently visible */}
        <h1>{name}</h1>
        <div className="project-info">
          <p>
            <b>Skills:</b> {skills}
          </p>
          <a
            href={github}
            target="_blank" rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub Repository"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;