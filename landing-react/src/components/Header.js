import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header-blur" role="banner">
    <div className="header-container">
      <div className="logo" tabIndex={0} aria-label="Papá Luchón logo">
        Papá <span className="logo-bold">Luchón</span>
      </div>
      <nav className="nav" aria-label="Navegación principal">
        <a href="#features" className="nav-link">Funciones</a>
        <a href="#pricing" className="nav-link">Precios</a>
        <a href="#contact" className="nav-link">Contacto</a>
      </nav>
      <a href="#login" className="btn-outline header-login">Iniciar sesión</a>
    </div>
  </header>
);

export default Header;
