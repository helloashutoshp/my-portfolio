import React from 'react';
import './Education.css';
import trainee from '../assets/trainee.pdf';
import internship from "../assets/Ashutosh Pradhan intership.pdf";

const Education = () => {
  const education = [
    {
      degree: 'B.Tech (CSE)',
      institution: 'Gandhi Engineering College (BPUT), Odisha',
      year: '2020-2024',
      percentage: '80%'
    },
    {
      degree: '12th',
      institution: 'Govt. Autonomous College, Rourkela, Odisha',
      year: '2018-2020',
      percentage: '68%'
    },
    {
      degree: '10th',
      institution: 'Saraswati Shisu Vidya Mandir, ShivajiMarg',
      year: '2018',
      percentage: '93%'
    }
  ];

  const certifications = [
    {
      title: 'PHP Trainee Certifcate',
      organization: 'Concent Infoway Pvt. Ltd.',
      duration: '4 months',
      period: 'Jan 2024 - July 2024',
      url: trainee,
      linkText: 'trainee'
    },
    {
      title: 'PHP Internship Certificate',
      organization: 'Edevlop Services Pvt. Ltd.',
      duration: '3 months',
      period: 'Sep 2023 - Nov 2023',
      url: internship,
      linkText: 'Ashutosh Pradhan intership'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-content">
          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h4 className="degree">{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <div className="edu-details">
                    <span className="year">{edu.year}</span>
                    <span className="percentage">{edu.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certification-section">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certification-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-org">{cert.organization}</p>
                  <div className="cert-details">
                    <span className="cert-duration">{cert.duration}</span>
                    <span className="cert-period">{cert.period}</span>
                  </div>
                  {cert.url && (
                    <div className="cert-actions">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
