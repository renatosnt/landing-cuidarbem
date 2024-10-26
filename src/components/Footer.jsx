// src/components/Footer.jsx
import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer>
    <div className="container">
      <p>
        &copy; {new Date().getFullYear()} Clínica Cuidar Bem. Todos os direitos
        reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
