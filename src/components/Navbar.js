//components/Navbar.js
import { Menu, Home, Briefcase, GraduationCap, Mail, FileText, Sun, Moon, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import resume from "../assets/software resume.pdf";
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
   const [expandNavbar, setExpandNavbar] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false); // State to track scroll
   const navigate = useNavigate();
   const { theme, toggleTheme } = useTheme();

   useEffect(() => {
    const handleScroll = () => {
      // Set state to true if user has scrolled more than 10px, false otherwise
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);

   useEffect(() => {
    setExpandNavbar(false);
   }, [navigate]);

   useEffect(() => {
    if (expandNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandNavbar]);

   // Conditionally build class names
   const navbarClasses = `navbar ${isScrolled ? 'scrolled' : ''} ${expandNavbar ? 'open' : 'close'}`;

   return (
    <div className={navbarClasses}>
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