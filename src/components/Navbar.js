import { Menu, Home, Briefcase, GraduationCap, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
   const [expandNavbar, setExpandNavbar] = useState(false);
   const navigate = useNavigate();

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
      </div>
    </div>
   );
};

export default Navbar;
