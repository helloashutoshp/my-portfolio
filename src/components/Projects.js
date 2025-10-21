import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('industrial');

  const industrialProjects = [
    {
      title: 'E-commerce Websites',
      tech: ['Laravel', 'Vue.js', 'MySQL'],
      icon: '🛒',
      color: '#667eea',
      description: [
        'Designed and developed a dynamic e-commerce website and admin panel using Laravel, incorporating registration, login, secure authentication, dynamic sections, and efficient CRUD operations for product and user management',
        'Implemented a secure admin panel with role-based access, hash-based password management, ID encryption, and change password options',
        'Enhancements include API, custom filters, pagination, mail templates, and jQuery validation for form security'
      ]
    },
    {
      title: 'Art Leasing Platform',
      tech: ['Laravel', 'Next.js', 'Sanctum'],
      icon: '🎨',
      color: '#764ba2',
      description: [
        'Developed a secure authentication system with Laravel Sanctum and Next.js, applying token-based registration, login, and logout',
        'Users can update their entire profile, with protected routes and dynamic API integration between backend and frontend for a smooth experience'
      ]
    },
    {
      title: 'Blog Websites',
      tech: ['WordPress', 'ACF', 'PHP'],
      icon: '📝',
      color: '#f093fb',
      description: [
        'Crafted a robust blogging platform on WordPress leveraging ACF to facilitate smooth content organization',
        'Enhanced the reader experience by enabling easy access to hundreds of articles through intuitive navigational features'
      ]
    }
  ];

  const personalProjects = [
    {
      title: 'Real-Time Chat Application',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
      icon: '💬',
      color: '#43e97b',
      github: 'https://github.com/helloashutoshp/chatapp-frontend-master',
      githubBackend: 'https://github.com/helloashutoshp/chatapp-server-master',
      description: [
        'Developed a full-stack MERN chat application with real-time messaging using Socket.io for instant communication',
        'Implemented Redux for efficient state management across the application and seamless data flow',
        'Built RESTful APIs with Node.js and Express for user authentication, message handling, and data operations',
        'Integrated Axios for HTTP requests to communicate between frontend and backend services',
        'Designed responsive React frontend with modern UI components for an intuitive chat experience',
        'Utilized MongoDB for storing user data, chat history, and managing real-time message persistence'
      ]
    },
    {
      title: 'Dev Shop',
      tech: ['PHP', 'MySQL', 'Stripe API', 'Session Auth'],
      icon: '🛒',
      color: '#667eea',
      github: 'https://github.com/helloashutoshp/Dev-shop',
      description: [
        'Built a full-featured e-commerce platform with secure session-based authentication and user management',
        'Integrated Stripe payment gateway for seamless checkout experience and secure payment processing',
        'Developed comprehensive admin panel for managing products, orders, and users with full CRUD operations',
        'Implemented shopping cart functionality with real-time updates and order tracking system',
        'Created automated email notification system to send order confirmations and updates to customers',
        'Designed user dashboard for viewing order history, tracking deliveries, and managing account settings'
      ]
    },
    {
      title: 'Online Dukan',
      tech: ['React', 'CSS3', 'JavaScript', 'GitHub Pages'],
      icon: '🏪',
      color: '#fa709a',
      github: 'https://github.com/helloashutoshp/online-dukan-master/tree/main/online-dukan-master',
      liveDemo: 'https://helloashutoshp.github.io/online-dukan-master/',
      description: [
        'Developed a fully responsive e-commerce static template using React with modern design principles',
        'Created reusable React components for product listings, navigation, and user interface elements',
        'Implemented clean and maintainable code structure following React best practices',
        'Deployed on GitHub Pages for easy access and demonstration of frontend development skills',
        'Designed with mobile-first approach ensuring seamless experience across all devices'
      ]
    }
  ];

  const currentProjects = activeTab === 'industrial' ? industrialProjects : personalProjects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Showcasing my work across different domains</p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'industrial' ? 'active' : ''}`}
              onClick={() => setActiveTab('industrial')}
            >
              <span className="tab-icon">🏢</span>
              <span className="tab-text">Industrial Projects</span>
              <span className="tab-count">{industrialProjects.length}</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              <span className="tab-icon">👨‍💻</span>
              <span className="tab-text">Personal Projects</span>
              <span className="tab-count">{personalProjects.length}</span>
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{'--project-color': project.color}}
            >
              <div className="project-icon-wrapper">
                <span className="project-icon" style={{background: project.color}}>
                  {project.icon}
                </span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="project-description">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>
                      <span className="bullet-icon">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {(project.github || project.githubBackend || project.liveDemo) && (
                  <div className="project-links">
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link project-link-demo"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        {project.githubBackend ? 'Frontend' : 'GitHub'}
                      </a>
                    )}
                    {project.githubBackend && (
                      <a 
                        href={project.githubBackend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link project-link-secondary"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Backend
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
