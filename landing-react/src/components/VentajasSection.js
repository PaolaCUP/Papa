import React from 'react';
import './VentajasSection.css';

const ventajas = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2D5A27" strokeWidth="2"><rect x="3" y="7" width="18" height="10" rx="4"/><path d="M7 17v2a2 2 0 002 2h6a2 2 0 002-2v-2"/></svg>
    ),
    title: 'Asistencia 24/7',
    desc: 'Especialistas disponibles cualquier hora. Para crisis, dudas diarias o cuando necesites orientación.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2D5A27" strokeWidth="2"><path d="M12 3l7 4v5c0 5.25-3.75 9.25-7 10-3.25-.75-7-4.75-7-10V7l7-4z"/><path d="M9.5 12.5l2 2 3.5-3.5" stroke="#2D5A27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Preparación completa',
    desc: 'Te preparamos para todas las situaciones: desde cambiar pañales hasta hablar con adolescentes.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2D5A27" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16 10,8" fill="#2D5A27"/></svg>
    ),
    title: 'Videos prácticos',
    desc: 'Te mostramos cómo hacer las cosas bien. Rutinas diarias, emergencias y todo lo que necesitas saber.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2D5A27" strokeWidth="2"><path d="M13 2L3 14h9l-1 8L21 10h-8l1-8z"/></svg>
    ),
    title: 'Apoyo constante',
    desc: 'No solo para crisis. Te acompañamos en tu crecimiento como papá, día a día.'
  }
];


const VentajasSection = () => (
  <section className="ventajas-section" data-aos="fade-up" data-aos-delay="120">
    <h3>¿Por qué unirte a Papá Luchón?</h3>
    <div className="ventajas-list">
      {ventajas.map((v, i) => (
        <div className="ventaja-item" key={i} data-aos="zoom-in-up" data-aos-delay={180 + i * 100}>
          <span className="ventaja-icon">{v.icon}</span>
          <h4>{v.title}</h4>
          <p>{v.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default VentajasSection;
