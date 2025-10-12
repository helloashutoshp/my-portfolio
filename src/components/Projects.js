import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Websites',
      tech: 'Laravel & Vue.js',
      description: [
        'Designed and developed a dynamic e-commerce website and admin panel using Laravel, incorporating registration, login, secure authentication, dynamic sections, and efficient CRUD operations for product and user management',
        'Implemented a secure admin panel with role-based access, hash-based password management, ID encryption, and change password options',
        'Enhancements include API, custom filters, pagination, mail templates, and jQuery validation for form security'
      ]
    },
    {
      title: 'Art Leasing',
      tech: 'Laravel & Next.js',
      description: [
        'Developed a secure authentication system with Laravel Sanctum and Next.js, applying token-based registration, login, and logout',
        'Users can update their entire profile, with protected routes and dynamic API integration between backend and frontend for a smooth experience'
      ]
    },
    {
      title: 'Blog Websites',
      tech: 'WordPress',
      description: [
        'Crafted a robust blogging platform on WordPress leveraging ACF to facilitate smooth content organization',
        'Enhanced the reader experience by enabling easy access to hundreds of articles through intuitive navigational features'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
              </div>
              <ul className="project-description">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
