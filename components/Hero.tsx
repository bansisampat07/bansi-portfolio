
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
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
          <div className="flex flex-col items-center gap-2">
            <a href="https://linkedin.com/in/bansi-sampat" target="_blank" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-white/5 transition-all">
              LinkedIn
            </a>
            <span className="text-[10px] text-sky-400/60 font-mono animate-pulse uppercase tracking-widest">
              Try the Silicon AI ↘
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
