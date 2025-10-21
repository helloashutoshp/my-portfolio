import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: 'Concent Infoway Pvt.Ltd',
      period: 'Jan 2024 - Present',
      position: 'Web Developer (Laravel,Vue js,Wordpress)',
      type: 'Full-time',
      icon: '💼',
      color: '#667eea',
      responsibilities: [
        {
          title: 'Laravel & Vue.js & Next.js',
          icon: '⚡',
          points: [
            'Created secure user login (register, login, logout, forgot password) with token-based authentication and role-based access',
            'Implemented Laravel as backend API coupled with Next.js frontend for end-to-end user experience and real-time engagement',
            'Utilized applied middleware for route security and role-based access'
          ]
        },
        {
          title: 'WordPress',
          icon: '🎨',
          points: [
            'Designed and maintained 10+ custom post types and taxonomies for the WordPress site, enhancing content organization which improved loading speeds by reducing database queries needed to access structured data'
          ]
        }
      ]
    },
    {
      company: 'EDevlon services Pvt Ltd',
      period: 'Aug 2023 - Nov 2024 (14 months)',
      position: 'PHP Developer Intern (Core PHP, Laravel)',
      type: 'Internship',
      icon: '🎓',
      color: '#764ba2',
      responsibilities: [
        {
          title: 'Core Development',
          icon: '🔧',
          points: [
            'Developed and maintained web applications using core PHP and Laravel framework',
            'Assisted in database design and management using MySQL'
          ]
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and achievements</p>
        </div>
        
        <div className="accordion-container">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                style={{'--accent-color': exp.color}}
              >
                <div className="accordion-header-left">
                  <div className="accordion-icon" style={{background: exp.color}}>
                    <span>{exp.icon}</span>
                  </div>
                  <div className="accordion-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="experience-meta" style={{marginTop: '0.5rem'}}>
                      <span className="period">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                        {exp.period}
                      </span>
                      <span className="job-type" style={{background: exp.color}}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="position" style={{marginTop: '0.5rem'}}>{exp.position}</p>
                  </div>
                </div>
                <div className="accordion-toggle">
                  <svg 
                    className="toggle-icon" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>

              <div className="accordion-content">
                <div className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="responsibility-section">
                      <h4 className="responsibility-title">
                        <span className="resp-icon">{resp.icon}</span>
                        {resp.title}
                      </h4>
                      <ul className="responsibility-list">
                        {resp.points.map((point, pointIdx) => (
                          <li key={pointIdx}>
                            <span className="bullet-point"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
