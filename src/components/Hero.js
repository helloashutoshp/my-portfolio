import React from 'react';
import './Hero.css';
import profileImage from '../assets/Profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image-section">
          <div className="profile-image-wrapper">
            <img
              src={profileImage}
              alt="Ashutosh Pradhan"
              className="profile-image"
            />
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1 className="hero-title">ASHUTOSH PRADHAN</h1>
            <p className="hero-subtitle">Full Stack Web Developer</p>
            <p className="hero-description">
              Passionate about building modern web applications with clean code and great user experiences.
            </p>
          </div>

          <div className="hero-contact">
            <a href="tel:+919090245081" className="contact-item">
              <span className="icon">📞</span>
              <span>+91-9090245081</span>
            </a>
            <a href="mailto:ashutoshshradhan200210@gmail.com" className="contact-item">
              <span className="icon">✉️</span>
              <span>ashutoshshradhan200210@gmail.com</span>
            </a>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="cta-button primary">Get In Touch</a>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/ashutosh-pradhan-ba8b97237/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8.339 19.004H5.662V9.004h2.677v10zm-1.339-11.45c-.855 0-1.55-.694-1.55-1.55s.695-1.55 1.55-1.55c.856 0 1.55.694 1.55 1.55s-.694 1.55-1.55 1.55zM19.003 19.004h-2.675v-5.403c0-1.286-.025-2.937-1.79-2.937-1.791 0-2.066 1.398-2.066 2.842v5.498H9.797V9.004h2.565v1.366h.037c.358-.677 1.232-1.39 2.537-1.39 2.716 0 3.067 1.787 3.067 4.111v5.913z"
                  /></svg>
              </a>
              <a href="https://github.com/helloashutoshp" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.237-3.221-.124-.303-.536-1.524.118-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.004-.404c1.02.005 2.045.137 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.656 1.652.244 2.873.12 3.176.771.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
