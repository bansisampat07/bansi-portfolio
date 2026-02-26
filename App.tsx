
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Wafer Background Element */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full border border-sky-500/10 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full border border-sky-500/5 scale-90"></div>
        <div className="absolute inset-0 rounded-full border border-sky-500/5 scale-75"></div>
        <div className="absolute inset-0 rounded-full border border-sky-500/5 scale-50"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sky-500/5"></div>
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-sky-500/5"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;
