// App.js
import React from 'react';
import './App.css';

import Fade from 'react-reveal';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Fade>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </Fade>
      </main>
      <Footer />
    </div>
  );
}

export default App;