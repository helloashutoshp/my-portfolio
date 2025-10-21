import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Ashutosh Pradhan. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/ashutosh-pradhan-ba8b97237/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/helloashutoshp" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:ashutoshshradhan200210@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
