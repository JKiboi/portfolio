//components/Footer.js
import React from 'react';
import "../styles/Footer.css";
import { 
  Linkedin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/james-kiboi',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/anythingtechke',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/anythingtechke',
      color: '#1DA1F2'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/anythingtechke',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/anythingtechke',
      color: '#E4405F'
    }
  ];

  // Updated quickLinks array
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    // Corrected the path to '/contacts' (plural) to match the router
    { name: 'Contact', path: '/contacts' } 
  ];

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <h3 className="footer-brand">James Kiboi</h3>
            <p className="footer-tagline">
              Full Stack Developer crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section links-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* Use React Router's Link for internal navigation */}
                  <Link to={link.path} className="footer-link">
                    <ExternalLink size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-section">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <a href="mailto:anythingtechke@gmail.com" className="contact-item">
                <Mail size={16} />
                anythingtechke@gmail.com
              </a>
              <a href="tel:+254712345678" className="contact-item">
                <Phone size={16} />
                +254 712 418 479
              </a>
              <div className="contact-item">
                <MapPin size={16} />
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section social-section">
            <h4 className="footer-title">Follow Me</h4>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                  style={{ '--icon-color': social.color }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} James Kiboi. All rights reserved.
            </p>
            <p className="crafted-by">
              Crafted with <span className="heart">❤️</span> by James Kiboi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;