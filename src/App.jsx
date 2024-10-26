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
      <title>Clínica Cuidar Bem - Sua Saúde em Boas Mãos</title>
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

      {/* Meta Tags Open Graph */}
      <meta
        property="og:title"
        content="Clínica Cuidar Bem - Sua Saúde em Boas Mãos"
      />
      <meta
        property="og:description"
        content="Clínica Cuidar Bem oferece serviços médicos de qualidade para cuidar da sua saúde."
      />
      <meta
        property="og:image"
        content="https://www.clinicacuidarbem.com.br/og-image.jpg"
      />
      <meta property="og:url" content="https://www.clinicacuidarbem.com.br" />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta
        name="twitter:title"
        content="Clínica Cuidar Bem - Sua Saúde em Boas Mãos"
      />
      <meta
        name="twitter:description"
        content="Clínica Cuidar Bem oferece serviços médicos de qualidade para cuidar da sua saúde."
      />
      <meta
        name="twitter:image"
        content="https://www.clinicacuidarbem.com.br/twitter-image.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
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
