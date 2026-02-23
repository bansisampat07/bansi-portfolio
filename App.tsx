
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
