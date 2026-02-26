
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight flex items-center justify-center gap-4">
          <span className="text-sky-500 font-mono text-2xl">03.</span>
          Technical <span className="text-sky-500">Specifications</span>
        </h2>
        <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Hardware Stack & Domain Expertise</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div key={category.title} className="glass p-8 rounded-2xl border-t-2 border-sky-500/50 relative group">
            <div className="absolute -top-3 left-6 px-2 bg-slate-900 text-[10px] font-bold text-sky-500 uppercase tracking-tighter">
              Module_{category.title.replace(/\s+/g, '_')}
            </div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
              {category.title}
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {category.skills.map((skill) => (
                <div 
                  key={skill} 
                  className="group/item flex items-center justify-between px-4 py-2 bg-slate-900/50 text-slate-400 text-xs font-mono border border-white/5 rounded hover:border-sky-500/30 hover:text-sky-400 transition-all"
                >
                  <span>{skill}</span>
                  <span className="opacity-0 group-hover/item:opacity-100 text-[8px] text-sky-500">READY</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
