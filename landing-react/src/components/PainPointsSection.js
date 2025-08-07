import React from 'react';
import './PainPointsSection.css';

const PAIN_POINTS = [
  {
    icon: '🧷',
    title: 'No tengo ni idea de cómo cambiar un pañal sin que sea un desastre',
  },
  {
    icon: '👨‍💼',
    title: 'Mi jefe nunca estuvo, no quiero ser el mismo ojete',
  },
  {
    icon: '🤦‍♂️',
    title: 'Mi mujer sabe todo, yo parezco el asistente que la caga',
  },
  {
    icon: '🤐',
    title: 'Los hombres no hablamos de estas cosas, ¿con quién pregunto?',
  },
];

const PainPointsSection = () => (
  <section className="painpoints-section" aria-labelledby="painpoints-title" data-aos="fade-right" data-aos-delay="120">
    <div className="painpoints-container">
      <h2 id="painpoints-title" className="painpoints-title">¿Te suena familiar esta mamada?</h2>
      <p style={{fontSize: '1.15rem', color: '#6b7280', marginBottom: '2.2rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.2rem auto'}}>No estás loco. Miles de papás pasan por lo mismo.</p>
      <div className="painpoints-grid">
        <div className="painpoint-card" tabIndex={0} aria-label="Te da pánico quedarte solo con el bebé" data-aos="fade-up" data-aos-delay="200">
          <div className="painpoint-text"><strong>Te da pánico quedarte solo con el bebé</strong><br/>"¿Qué hago si llora y no para? ¿Qué comida le doy? ¿Cómo se la preparo? ¿Y si pasa algo? Mejor que no salga mi mujer."</div>
        </div>
        <div className="painpoint-card" tabIndex={0} aria-label="Tu mujer cambió cuando se hizo mamá">
          <div className="painpoint-text"><strong>Tu mujer cambió cuando se hizo mamá</strong><br/>"Ya no es la misma. Todo lo controla, todo lo critica. Sientes que perdiste a tu pareja y ganaste una jefa."</div>
        </div>
        <div className="painpoint-card" tabIndex={0} aria-label="No sabes cómo conectar con tus hijos más grandes">
          <div className="painpoint-text"><strong>No sabes cómo conectar con tus hijos más grandes</strong><br/>"¿De qué hablo con un niño de 5 años? ¿Cómo le explico las cosas? ¿Por qué conmigo se porta diferente?"</div>
        </div>
        <div className="painpoint-card" tabIndex={0} aria-label="Terminas siendo el papá de los fines de semana">
          <div className="painpoint-text"><strong>Terminas siendo el papá de los fines de semana</strong><br/>"Solo sirves para llevarlos al parque. Las decisiones importantes las toma ella. Te sientes como visita."</div>
        </div>
      </div>
    </div>
  </section>
);

export default PainPointsSection;
