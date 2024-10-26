// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

const App = () => (
  <>
    <Helmet>
      <title>Clínica Cuidar Bem </title>
      <meta
        name="description"
        content="Clínica Cuidar Bem oferece serviços médicos de qualidade para cuidar da sua saúde."
      />
      <meta
        name="keywords"
        content="clínica, saúde, médicos, cuidar bem, serviços médicos"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.clinicacuidarbem.com.br" />
    </Helmet>
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
