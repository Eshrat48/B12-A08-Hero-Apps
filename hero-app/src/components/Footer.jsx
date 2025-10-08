import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

// Assuming you still have this import from your assets:
import myLogo from '../assets/logo.png'; 

// Import social icons (requires 'react-icons' package: npm install react-icons)
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        
        {/* Left Section: Logo and Name */}
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo-link">
            <div className="logo-container">
              {/* Logo Image */}
              <img src={myLogo} alt="MERO.IO Logo" className="logo-image" />
              {/* Logo Text (using the gradient style from the header) */}
              <span className="logo-text">MERO.IO</span>
            </div>
          </Link>
          {/* If you have quick links, they would go here */}
        </div>

        {/* Right Section: Social Links */}
        <div className="footer-social-section">
          <p className="social-links-title">Social Links</p>
          <div className="social-icons">
            {/* Social Icons */}
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaLinkedinIn className="social-icon" />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaFacebookF className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section: Copyright Bar */}
      <div className="footer-copyright">
        <p>Copyright &copy; {new Date().getFullYear()} &bull; All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;