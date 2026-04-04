import './Hero.css';

export default function Hero() {
  const handleViewWorkClick = () => {
    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Krish Ghori</h1>
        <p className="hero-subtitle">
          Creating beautiful and functional web experiences
        </p>
        <button type="button" className="cta-button" onClick={handleViewWorkClick}>
          View My Work
        </button>
      </div>
    </section>
  );
}
