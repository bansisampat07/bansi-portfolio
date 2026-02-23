
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
        <div className="w-20 h-1.5 bg-sky-500 rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.title} className="glass overflow-hidden rounded-2xl group border border-white/5 hover:border-sky-500/30 transition-all flex flex-col h-full">
            <div className="h-48 bg-slate-800/80 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
                <div className="text-6xl text-sky-500/20 font-mono select-none">
                    010110
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
