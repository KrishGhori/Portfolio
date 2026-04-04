import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together to create something amazing.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <h4>Email</h4>
              <a href="mailto:your.email@example.com">krishghori90@gmail.com</a>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <a href="tel:+1234567890">+91 9016966936</a>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <p>Your City, Country</p>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/krish-ghori-196385370" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/KrishGhori/" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="6"
                required
              />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}


