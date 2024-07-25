import React from 'react';
import "../styles/Footer.css";
import { Instagram, Twitter, Facebook, LinkedIn } from '@material-ui/icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social-media'>
        <Instagram className='icon' />
        <Facebook className='icon' />
        <LinkedIn className='icon' />
        <Twitter className='icon' />
      </div>
      <p>&copy; 2023 anythingtechke.com</p>
    </footer>
  );
};

export default Footer;
