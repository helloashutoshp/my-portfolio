import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['PHP', 'Java', 'JavaScript', 'Laravel', 'React.js', 'Node.js', 'Express.js', 'Next.js', 'Vue.js', 'TypeScript']
    },
    {
      title: 'CMS & Database',
      skills: ['WordPress', 'MySQL', 'MongoDB']
    },
    {
      title: 'Authentication & Security',
      skills: ['Token-based authentication (JWT)', 'Session management', 'Role-based access']
    },
    {
      title: 'Other Skills',
      skills: ['Git', 'DSA', 'Time management', 'Quick learner']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
