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
      description: 'Real-time task management system',
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
      description: 'A full-stack web application for managing restaurant operations including menu handling, order processing, and user interaction. Built with React for the frontend, Node.js and Express for the backend, and MongoDB for database management.',
      tags: ['React', 'TailwindCss', 'Express', 'Node.js' , 'MongoDB'],
      link: 'https://restaurant-management-system-7h8o.vercel.app/'
    },
    
    {
      id: 5,
      title: 'Vlog Website',
      description: 'A responsive vlog website built using HTML5, CSS3, Bootstrap, and JavaScript. It features a clean UI for showcasing video content, blog-style layouts, and smooth navigation for an engaging user experience across devices.',
      tags: ['Html5', 'Css3', 'Bootstrap' , 'JS'],
      link: 'https://vlog-sable.vercel.app/'
    } ,
    {
      id: 6,
      title: 'Razorpay-UI',
      description: 'A frontend clone of the Razorpay website built using HTML5, TailwindCSS and JavaScript. It replicates the modern UI design, responsive layout, and key interface sections to demonstrate strong frontend development and styling skills.',
      tags: ['Html5', 'Css3', 'Bootstrap' , 'JS'],
      link: 'https://github.com/KrishGhori/razorpay-UI.git3'
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
