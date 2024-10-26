// src/components/Header.jsx
import React from 'react';
import './Header.scss';

const Header = () => (
  <header>
    <div className="container">
      <h1>Clínica Cuidar Bem</h1>
      <nav>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre Nós</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  </header>
);

export default Header;
