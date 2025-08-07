import React from 'react';
import './global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import './components/Header.css';
import PainPointsSection from './components/PainPointsSection';
import VentajasSection from './components/VentajasSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => { AOS.init({ once: true, duration: 900, easing: 'ease-out-cubic' }); }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <PainPointsSection />
      <div className="container">
        <VentajasSection />
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
