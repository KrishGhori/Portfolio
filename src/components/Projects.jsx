import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Music',
      description: 'A music web-application with React, Tailwindcss',
      tags: ['React', 'Tailwindcss'],
      link: 'https://music-player-web-mu.vercel.app/'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management system with drag-and-drop functionality',
      tags: ['React', 'Mongodb', 'Tailwindcss' , 'Node.js'],
      link: 'https://github.com/KrishGhori/Task_managment.git'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Intelligent chatbot powered by machine learning algorithms',
      tags: ['React', 'API', 'Tailwindcss'],
      link: 'https://ai-smart-chatbot.vercel.app/'
    },
    {
      id: 4,
      title: 'Restaurant-Management-System',
      description: 'Community-driven social media app with user profiles and messaging',
      tags: ['React', 'TailwindCss', 'Express', 'Node.js' , 'MongoDB'],
      link: 'https://restaurant-management-system-7h8o.vercel.app/'
    },
    
    {
      id: 5,
      title: 'Vlog Website',
      description: 'Comprehensive analytics platform with data visualization',
      tags: ['Html5', 'Css3', 'Bootstrap' , 'JS'],
      link: 'https://vlog-sable.vercel.app/'
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
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} project`}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
