import React from 'react';
import "../styles/Footer.css";
import { Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://instagram.com/" aria-label="Instagram">
            <Instagram className="icon" />
          </a>
          <a href="https://facebook.com/" aria-label="Facebook">
            <Facebook className="icon" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn">
            <Linkedin className="icon" />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter">
            <Twitter className="icon" />
          </a>
            <a href="mailto:anythingtechke@gmail.com" aria-label="Email">
            <Mail className="icon" />
          </a>
        </div>
        <div className="footer-text">
          <p>© {new Date().getFullYear()} anythingtechke.com</p>
          <p>
            Crafted with ❤️ by James Kiboi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;