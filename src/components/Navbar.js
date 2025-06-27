import { Menu, Home, Briefcase, GraduationCap, Mail, FileText, Sun, Moon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import resume from "../assets/software resume.pdf";
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
   const [expandNavbar, setExpandNavbar] = useState(false);
   const navigate = useNavigate();
   const { theme, toggleTheme } = useTheme();

   useEffect(() => {
    setExpandNavbar(false);
   }, [navigate]);

   return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={() => setExpandNavbar(prev => !prev)}>
           <Menu />
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
