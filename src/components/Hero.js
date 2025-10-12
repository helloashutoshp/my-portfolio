import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ASHUTOSH PRADHAN</h1>
        <p className="hero-subtitle">Full Stack Web Developer</p>
        <div className="hero-contact">
          <a href="tel:+919090245081" className="contact-item">
            <span className="icon">📞</span> +91-9090245081
          </a>
          <a href="mailto:ashutoshshradhan200210@gmail.com" className="contact-item">
            <span className="icon">✉️</span> ashutoshshradhan200210@gmail.com
          </a>
          <span className="contact-item">
            <span className="icon">📍</span> Bhubaneswar, Odisha, India
          </span>
        </div>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/ashutosh-pradhan-ba8b97327/" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/helloashutoshp" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
        </div>
        <a href="#contact" className="cta-button">Get In Touch</a>
      </div>
    </section>
  );
};

export default Hero;
