
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-sky-400 flex items-center gap-3">
              <span className="text-sky-500/50 font-mono text-lg">01.</span>
              The Hardware Perspective
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I am an Electronics & Telecommunication student with a deep passion for the silicon that powers modern technology. My focus is on VLSI design and RTL coding—building efficient architectures and digital systems that push the boundaries of hardware performance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                <span className="text-slate-400">Seeking 2026 Summer Internships</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                <span className="text-slate-400">Focused on Digital Logic & RTL Design</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-sky-500/50 font-mono text-lg">02.</span> Education
          </h2>
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border-l-4 border-sky-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-slate-600 uppercase">Ref_EDU_01</div>
              <h4 className="font-bold text-xl mb-1">BTech in Electronics and Telecommunication</h4>
              <p className="text-sky-400 font-medium mb-3">Dwarkadas J Sanghvi College of Engineering, Mumbai</p>
              <div className="flex justify-between items-center text-sm text-slate-400 font-mono">
                <span>[ 2023 - 2027 ]</span>
                <span className="bg-sky-500/10 px-3 py-1 rounded text-sky-400 font-bold border border-sky-500/20">GPA: 8.732</span>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Core_Curriculum:</p>
                <div className="flex flex-wrap gap-2">
                  {["VLSI Design", "IOT", "Comp Architecture", "IPR & Patent Law"].map(item => (
                    <span key={item} className="text-[10px] px-2 py-1 bg-slate-900 text-slate-400 rounded border border-white/5 font-mono">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
