//components/Navbar.js
import { Menu, Home, Briefcase, GraduationCap, Mail, FileText, Sun, Moon, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import resume from "../assets/software resume.pdf";
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
   const [expandNavbar, setExpandNavbar] = useState(false);
   const navigate = useNavigate();
   const { theme, toggleTheme } = useTheme();

   // Effect to close the navbar whenever the route changes
   useEffect(() => {
    setExpandNavbar(false);
   }, [navigate]);

   // Effect to prevent scrolling when the mobile menu is open
   useEffect(() => {
    if (expandNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandNavbar]);

   return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button 
          onClick={() => setExpandNavbar(prev => !prev)}
          aria-label={expandNavbar ? 'Close navigation menu' : 'Open navigation menu'}
        >
           {expandNavbar ? <X /> : <Menu />}
        </button>
      </div>
      <div className='links'>
         <Link to="/">
            <Home className='nav-icon' />
            Home
         </Link>
         <Link to="/projects">
            <Briefcase className='nav-icon' />
            Projects
         </Link>
         <Link to="/experience">
            <GraduationCap className='nav-icon' />
            Experience
         </Link>
         <Link to="/contacts">
            <Mail className='nav-icon' />
            Contacts
         </Link>
         <a href={resume} target='_blank' rel='noopener noreferrer'>
            <FileText className='nav-icon' />
            Resume
         </a>
         <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === 'light' ? <Moon className='nav-icon' /> : <Sun className='nav-icon' />}
         </button>
      </div>
    </div>
   );
};

export default Navbar;