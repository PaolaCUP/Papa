import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    const value = (email || '').trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValid) {
      setError('Ingresa un email válido.');
      return;
    }
    
    // Verificar configuración de Supabase
    console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
    console.log('Supabase Key exists:', !!process.env.REACT_APP_SUPABASE_ANON_KEY);
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('emails')
        .insert([{ email: value }]);
      
      console.log('Supabase response:', { data, error });
      
      setLoading(false);
      if (error) {
        console.error('Supabase error details:', error);
        if (error.code === '23505') {
          // Violación de unique: ya existe ese email
          setSuccess(true);
          setError('');
        } else {
          setError(`Error: ${error.message || 'Intenta de nuevo.'}`);
        }
      } else {
        setSuccess(true);
        setEmail('');
      }
    } catch (err) {
      console.error('Network or other error:', err);
      setLoading(false);
      setError('Error de conexión. Verifica tu internet.');
    }
    
    // Limpiar mensajes después de 4s
    setTimeout(() => {
      setSuccess(false);
      setError('');
    }, 4000);
  };
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8F6F0 0%, #e5e7eb 100%)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              color: '#1a1a1a',
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >¿Ya te dijeron que cargas mal al bebé?</h1>
          <p
            style={{
              fontSize: '1.5rem',
              color: '#6b7280',
              marginBottom: '2rem',
              maxWidth: '600px'
            }}
            data-aos="fade-up"
            data-aos-delay="250"
          >Aquí aprendes a ser papá sin que tu mujer te vea con cara de 'ay, no mames'.</p>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Únete a +2,500 papás luchones
            </span>
          </div>
          <form className="hero-form" onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                flex: 1
              }}
            />
            <button
              type="submit"
              className="btn-primary hero-cta-main"
              disabled={loading}
              style={{ minWidth: '180px' }}
            >{loading ? 'Enviando...' : 'Quiero ser papá luchón'}</button>
          </form>
          {success && <div style={{ color: 'green', marginBottom: '1rem' }}>¡Email registrado! 🎉</div>}
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          <button className="btn-outline hero-cta-secondary">Ver demo</button>
        </div>
        <div style={{ position: 'relative' }}>
          <img 
            src="/papa.jpg" 
            alt="Papá cargando bebé correctamente" 
            style={{
              width: '48vw',
              minWidth: '420px',
              maxWidth: '700px',
              height: '70vh',
              minHeight: '420px',
              maxHeight: '80vh',
              objectFit: 'cover',
              borderRadius: '26px',
              boxShadow: '0 32px 80px 0 #1B365D33, 0 4px 32px 0 #EB6D1E22',
              transition: 'box-shadow 0.3s, transform 0.3s',
              background: '#fff',
              border: '4px solid #fff',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
