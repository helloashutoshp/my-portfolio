import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages & Frameworks',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: ['PHP', 'Java', 'JavaScript', 'Laravel', 'React.js', 'Node.js', 'Express.js', 'Next.js', 'Vue.js', 'TypeScript']
    },
    {
      category: 'CMS & Database',
      icon: '🗄️',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: ['WordPress', 'MySQL', 'MongoDB']
    },
    {
      category: 'Authentication & Security',
      icon: '🔐',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: ['Token-based authentication (JWT)', 'Session management', 'Role-based access']
    },
    {
      category: 'Other Skills',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      skills: ['Git', 'DSA', 'Time management', 'Quick learner']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header" style={{background: category.gradient}}>
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.category}</h3>
              </div>
              
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    <span className="skill-dot"></span>
                    {skill}
                  </span>
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
