import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <span>Da el primer paso para ser el papá que tu hijo recordará.</span>
        <button className="footer-btn">Quiero enterarme</button>
      </div>
      <div className="footer-disclaimer">
        <small>No compartiremos tu correo con nadie. © {new Date().getFullYear()} Papá Luchón</small>
      </div>
    </footer>
  );
}

export default Footer;
