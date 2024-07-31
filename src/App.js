
import React from 'react';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Dreams from './components/Dreams';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <About />
        <Projects />
        <Dreams />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
