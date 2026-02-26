
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="gradient-text">Bansi Sampat</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          3rd Year EXTC Engineering Student specializing in <span className="text-white">VLSI Design</span>.
        </p>
        
        {/* Technical Metadata Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span>System: Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sky-500/50">/</span>
            <span>Core: Verilog HDL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sky-500/50">/</span>
            <span>Target: Artix-7 FPGA</span>
          </div>
        </div>

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
