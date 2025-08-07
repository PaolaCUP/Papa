import React, { useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí iría la lógica real de envío
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-logo-placeholder">Papá Luchón</div>
        <h1>Prepárate para ser el papá que siempre quisiste tener</h1>
        <h2>Papá Luchón es la primera comunidad en México pensada para hombres como tú: presentes, conscientes y listos para crecer junto a sus hijos.</h2>
        <form className="hero-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitted}
          />
          <button type="submit" disabled={submitted}>
            {submitted ? "¡Gracias!" : "Quiero enterarme"}
          </button>
        </form>
        <div className="hero-illustration-placeholder">
          {/* Aquí iría una ilustración o mockup */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
