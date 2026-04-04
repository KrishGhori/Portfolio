import './About.css';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Html5' , 'CSS3', 'Tailwind CSS' , 'Bootstrap', 'JQuery'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vite'] } ,  
    { category: 'Language', items : ['c' , 'c++' , 'python' , 'SQL']}
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with +1 years of experience in creating 
              web applications. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work on the internet. 
              Today, I enjoy solving challenging problems and building products that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <ul>
                    {skillGroup.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
