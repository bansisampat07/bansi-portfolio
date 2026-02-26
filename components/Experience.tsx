
import React from 'react';
import { EXPERIENCES, EXTRACURRICULAR, CERTIFICATIONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl">05.</span>
            Experience
            <span className="h-[1px] bg-sky-500/20 flex-grow"></span>
          </h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-800 hover:border-sky-500/50 transition-colors group">
                <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-950 border-2 border-slate-800 rounded-sm group-hover:border-sky-500 transition-colors flex items-center justify-center">
                  <div className="w-1 h-1 bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-400/5 border border-sky-400/20 px-3 py-1 rounded uppercase tracking-widest">{exp.period}</span>
                </div>
                <p className="text-sm text-sky-500/80 font-mono mb-4 uppercase tracking-tighter">{exp.organization}</p>
                <ul className="space-y-3">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-400 text-sm flex items-start group/point">
                      <span className="mr-3 mt-1.5 w-1 h-1 bg-slate-700 group-hover/point:bg-sky-500 transition-colors"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-sky-500 font-mono text-lg">06.</span>
              Extracurricular
            </h2>
            <div className="space-y-6">
              {EXTRACURRICULAR.map((extra, idx) => (
                <div key={idx} className="glass p-6 rounded-xl border border-white/5 hover:border-sky-500/20 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 -rotate-45 translate-x-8 -translate-y-8 group-hover:bg-sky-500/10 transition-colors"></div>
                  <h4 className="font-bold text-white mb-1">{extra.title}</h4>
                  <p className="text-[10px] text-sky-500 font-mono font-bold uppercase mb-3 tracking-widest">{extra.org}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{extra.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-sky-500 font-mono text-lg">07.</span>
              Certifications
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center p-4 bg-slate-900/50 rounded border border-white/5 hover:border-sky-500/30 transition-all group">
                  <div className="w-10 h-10 rounded bg-sky-500/5 flex items-center justify-center mr-4 shrink-0 border border-sky-500/10 group-hover:bg-sky-500/10 transition-colors">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-200">{cert.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono uppercase">{cert.org} // {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
