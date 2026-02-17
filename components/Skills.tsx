
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-slate-400">The tools and domains I master to build efficient hardware.</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div key={category.title} className="glass p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
            <h3 className="text-xl font-bold mb-6 text-sky-400 border-b border-white/10 pb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
