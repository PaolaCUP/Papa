import React from 'react';
import './FaqSection.css';

const faqs = [
  {
    q: '¿Papá Luchón es solo para papás primerizos?',
    a: 'No, es para cualquier hombre en proceso de paternidad: buscando bebé, esperando, o con hijos pequeños.'
  },
  {
    q: '¿Tengo que pagar algo por registrarme?',
    a: 'El pre-registro es totalmente gratis. Te avisaremos antes del lanzamiento.'
  },
  {
    q: '¿Qué tipo de contenido encontraré?',
    a: 'Desde artículos y videos hasta mentorías y foros, todo enfocado en prepararte para ser un mejor papá.'
  }
];

const FaqSection = () => (
  <section className="faq-section" data-aos="fade-left" data-aos-delay="120">
    <h3>Preguntas frecuentes</h3>
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div className="faq-item" key={i} data-aos="fade-up" data-aos-delay={180 + i * 100}>
          <strong>{f.q}</strong>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FaqSection;
