
import React from 'react';
import { EXPERIENCES, EXTRACURRICULAR, CERTIFICATIONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            Professional Experience
            <span className="ml-4 h-[1px] bg-white/10 flex-grow"></span>
          </h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-sky-500/30">
                <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-medium text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <p className="text-lg text-slate-400 font-medium mb-4">{exp.organization}</p>
                <ul className="space-y-3">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-300 text-sm flex items-start">
                      <span className="mr-3 mt-1.5 text-sky-500 text-xs">◆</span>
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
            <h2 className="text-2xl font-bold mb-8">Extracurricular Impact</h2>
            <div className="space-y-6">
              {EXTRACURRICULAR.map((extra, idx) => (
                <div key={idx} className="glass p-6 rounded-xl border border-white/5 hover:border-sky-500/20 transition-all">
                  <h4 className="font-bold text-sky-400 mb-1">{extra.title}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase mb-3">{extra.org}</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{extra.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Certifications</h2>
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center p-4 bg-slate-800/40 rounded-lg border border-white/5">
                  <div className="w-10 h-10 rounded bg-sky-500/10 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-200">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.org} • {cert.date}</p>
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
