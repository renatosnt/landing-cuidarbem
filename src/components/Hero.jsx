// src/components/Hero.jsx
import React from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente de ícones
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone específico do WhatsApp

const Hero = () => {
  const whatsappNumber = '5531998014303';
  const whatsappMessage = encodeURIComponent(
    'Olá, gostaria de agendar uma consulta.',
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="hero">
      <div className="container">
        <h2>Cuidado Especializado para Sua Saúde</h2>
        <p>Profissionais dedicados ao seu bem-estar.</p>
        <a
          href={whatsappLink}
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          Agende uma Consulta
        </a>
      </div>
    </section>
  );
};

export default Hero;
