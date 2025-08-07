import React from 'react';
import './Footer.css';

const Footer = () => {
  const focusEmail = () => {
    const input = document.querySelector('.hero-form input');
    if (input) input.focus();
  };

  return (
    <footer className="footer" data-aos="fade-up" data-aos-delay="120">
      <div className="footer-cta">
        <span>Da el primer paso para ser el papá que tu hijo recordará.</span><br />
        <button className="footer-btn" onClick={focusEmail}>Quiero enterarme</button>
      </div>
      <div className="footer-disclaimer">
        <small>No compartiremos tu correo con nadie. © 2025 Papá Luchón</small>
      </div>
    </footer>
  );
};

export default Footer;
