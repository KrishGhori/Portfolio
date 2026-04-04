import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Music',
      description: 'A music web-application with React, Tailwindcss',
      tags: ['React', 'Tailwindcss'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management system with drag-and-drop functionality',
      tags: ['React', 'Mongodb', 'Tailwindcss' , 'Node.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Intelligent chatbot powered by machine learning algorithms',
      tags: ['React', 'API', 'Tailwindcss'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Community-driven social media app with user profiles and messaging',
      tags: ['React', 'PostgreSQL', 'Express'],
      link: '#'
    },
    
    {
      id: 5,
      title: 'Vlog Website',
      description: 'Comprehensive analytics platform with data visualization',
      tags: ['html5', 'css3', 'bootstrap' , 'js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent works showcasing my skills and expertise
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
