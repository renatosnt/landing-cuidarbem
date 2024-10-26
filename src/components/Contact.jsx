// src/components/Contact.jsx
import React from 'react';
import './Contact.scss';

const Contact = () => (
  <section id="contato" className="contact">
    <div className="container">
      <h2>Contato</h2>
      <p>Entre em contato conosco para agendar sua consulta.</p>
      {/* <form action="https://formspree.io/f/{your_form_id}" method="POST">
        <input type="text" name="nome" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu Email" required />
        <input type="tel" name="telefone" placeholder="Seu Telefone" required />
        <textarea name="mensagem" placeholder="Sua Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form> */}
    </div>
  </section>
);

export default Contact;
