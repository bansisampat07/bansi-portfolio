
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 animate-pulse">
          India AI Impact Summit 2026
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="gradient-text">Bansi Sampat</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          3rd Year EXTC Engineering Student specializing in <span className="text-white">VLSI Design</span> & <span className="text-white">Semiconductor Hardware</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-lg shadow-sky-500/20 transition-all">
            View My Projects
          </a>
          <a href="https://linkedin.com/in/bansi-sampat" target="_blank" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-white/5 transition-all">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
