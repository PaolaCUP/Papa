import React from "react";
import "./VentajasSection.css";

const ventajas = [
  {
    icon: "🧠", // Placeholder
    title: "Preparación emocional real",
    desc: "Aprende a manejar tus miedos y expectativas con apoyo profesional y de otros papás.",
  },
  {
    icon: "🤝", // Placeholder
    title: "Comunidad masculina auténtica",
    desc: "Comparte dudas y experiencias en un espacio seguro, solo para hombres.",
  },
  {
    icon: "🛠️", // Placeholder
    title: "Herramientas prácticas",
    desc: "Descubre consejos y recursos útiles para cada etapa de la paternidad.",
  },
  {
    icon: "🌳", // Placeholder
    title: "Inspiración mexicana",
    desc: "Contenido adaptado a nuestra cultura y realidad.",
  },
];

function VentajasSection() {
  return (
    <section className="ventajas-section">
      <h3>¿Por qué unirte a Papá Luchón?</h3>
      <div className="ventajas-list">
        {ventajas.map((v, i) => (
          <div className="ventaja-item" key={i}>
            <span className="ventaja-icon">{v.icon}</span>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VentajasSection;
