import React, { useEffect, useRef, useState } from 'react';
import '../styles/SkillBar.css'; // We will create this CSS file

const SkillBar = ({ title, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const currentRef = skillBarRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="skill-bar-container" ref={skillBarRef}>
      <div className="skill-title">{title}</div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
      <span className="skill-percentage">{percentage}%</span>
    </div>
  );
};

export default SkillBar;