
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
          <span className="text-sky-500 font-mono text-2xl">04.</span>
          Projects
        </h2>
        <div className="w-20 h-1.5 bg-sky-500 rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.title} className="glass overflow-hidden rounded-2xl group border border-white/5 hover:border-sky-500/30 transition-all flex flex-col h-full">
            <div className="h-48 bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent"></div>
                {/* Chip/IC Visual */}
                <div className="relative w-24 h-24 bg-slate-800 rounded-lg border-2 border-sky-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-sky-500/40"></div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-sky-500/40"></div>
                    <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-3 h-1 bg-sky-500/40"></div>
                    <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-1 bg-sky-500/40"></div>
                    
                    <div className="w-16 h-16 rounded border border-sky-500/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-sky-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M7 3v3m10-3v3M7 18v3m10-3v3M3 7h3m15 0h-3M3 17h3m15 0h-3" />
                            <path d="M9 9h6v6H9z" />
                        </svg>
                    </div>
                </div>
                {/* Decorative circuit lines */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-0 w-20 h-[1px] bg-sky-400"></div>
                    <div className="absolute top-10 left-20 w-[1px] h-10 bg-sky-400"></div>
                    <div className="absolute bottom-10 right-0 w-20 h-[1px] bg-sky-400"></div>
                    <div className="absolute bottom-10 right-20 w-[1px] h-10 bg-sky-400"></div>
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-sky-500/10 text-sky-400 rounded border border-sky-500/20 font-bold">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {project.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg border border-white/5 transition-colors text-center block"
              >
                View Source on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
