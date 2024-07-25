import { Reorder, Home as HomeIcon, Work as WorkIcon, School as SchoolIcon, Contacts as ContactsIcon } from '@material-ui/icons';
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
           <Reorder />
        </button>
      </div>
      <div className='links'>
         <Link to="/">
            <HomeIcon className='nav-icon' />
            Home
         </Link>
         <Link to="/projects">
            <WorkIcon className='nav-icon' />
            Projects
         </Link>
         <Link to="/experience">
            <SchoolIcon className='nav-icon' />
            Experience
         </Link>
         <Link to="/contacts">
            <ContactsIcon className='nav-icon' />
            Contacts
         </Link>
      </div>
    </div>
   );
};

export default Navbar;
