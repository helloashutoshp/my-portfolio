import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Concent Infoway Pvt.Ltd',
      period: 'May 2024 - Present',
      position: 'PHP Developer (WordPress, Laravel)',
      responsibilities: [
        {
          title: 'Laravel & Vue.js & Next.js',
          points: [
            'Created secure user login (register, login, logout, forgot password) with token-based authentication and role-based access',
            'Implemented Laravel as backend API coupled with Next.js frontend for end-to-end user experience and real-time engagement',
            'Utilized applied middleware for route security and role-based access'
          ]
        },
        {
          title: 'WordPress',
          points: [
            'Designed and maintained 10+ custom post types and taxonomies for the WordPress site, enhancing content organization which improved loading speeds by reducing database queries needed to access structured data'
          ]
        }
      ]
    },
    {
      company: 'EDevlon services Pvt Ltd',
      period: 'Aug 2023 - Nov 2024 (14 months)',
      position: 'PHP developer (intern, Core PHP, Laravel)',
      responsibilities: [
        {
          title: 'Core Development',
          points: [
            'Developed and maintained web applications using core PHP and Laravel framework',
            'Assisted in database design and management using MySQL'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="company-name">{exp.company}</h3>
                <p className="period">{exp.period}</p>
                <p className="position">{exp.position}</p>
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="responsibility-section">
                    <h4 className="responsibility-title">{resp.title}</h4>
                    <ul className="responsibility-list">
                      {resp.points.map((point, pointIdx) => (
                        <li key={pointIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
