import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Your Portfolio. All rights reserved.</p>
        <p>Designed & Built with React ⚛️</p>
      </div>
    </footer>
  );
}
