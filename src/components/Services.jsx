// src/components/Services.jsx
import React from 'react';
import './Services.scss';

const servicesData = [
  {
    title: 'Cirurgião geral',
    description: 'Especialista em cirurgias gerais.',
    icon: 'heart',
  },
  {
    title: 'Homeopata',
    description: 'Cuidados e terapias com medicamentos homeopáticos.',
    icon: 'leaf',
  },
  {
    title: 'Nutricionista',
    description: 'Planejamento alimentar e promoção da saúde nutricional.',
    icon: 'apple-alt',
  },
  {
    title: 'Médico de família',
    description: 'Cuidado contínuo e integral para famílias.',
    icon: 'users',
  },
  {
    title: 'Médico clínico geral',
    description: 'Diagnóstico e tratamento de doenças comuns.',
    icon: 'user-md',
  },
  {
    title: 'Generalista',
    description: 'Atendimento geral e orientação médica.',
    icon: 'stethoscope',
  },
  {
    title: 'Psicólogo',
    description: 'Apoio e tratamento psicológico.',
    icon: 'brain',
  },

  // Adicione mais serviços conforme necessário
];

const Services = () => (
  <section id="servicos" className="services">
    <div className="container">
      <h2>Nossos Serviços</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <i className={`fas fa-${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
