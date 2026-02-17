
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight">
          <span className="text-sky-400">BS</span>.Portfolio
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
          <a href="#contact" className="px-4 py-2 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 hover:bg-sky-500/20 transition-all">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
