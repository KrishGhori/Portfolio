import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <p>Building intelligent web solutions that actually work</p>
      </div>
    </footer>
  );
}
