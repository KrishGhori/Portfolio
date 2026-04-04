import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'menu-open' : ''}`}>
          <li><button type="button" onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button type="button" onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button type="button" onClick={() => scrollToSection('about')}>About</button></li>
          <li><button type="button" onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}
