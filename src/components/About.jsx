// src/components/About.jsx
import React from 'react';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const About = () => (
  <section id="sobre" className="about">
    <div className="container">
      <h2>Sobre Nós</h2>
      <p>
        A Clínica Cuidar Bem oferece atendimento médico de excelência com uma
        equipe multidisciplinar.
      </p>
      <div className="info">
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <h3>Endereço</h3>
          <p>
            Av. Sebastião de Brito, 805 - Loja 10 - 2º Andar
            <br />
            Dona Clara, Belo Horizonte - MG, 31260-000
          </p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faClock} className="info-icon" />
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>Segunda a Sexta: 8h às 12h, 13h40 às 18h</li>
            <li>Sábado e Domingo: Fechado</li>
          </ul>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhoneAlt} className="info-icon" />
          <h3>Contato</h3>
          <p>Telefone: (31) 99801-4303</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
