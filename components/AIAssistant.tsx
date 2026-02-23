
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, SKILLS } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm Bansi's Silicon Architect Assistant. Ask me anything about her VLSI projects, hardware expertise, or her work in swarm robotics!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, 
        { role: 'user', text: input.trim() },
        { role: 'ai', text: "I'm currently in 'offline' mode because the API key isn't configured for this deployment. Please check the environment settings!" }
      ]);
      setInput('');
      return;
    }

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `
        You are an expert Silicon Architect Assistant representing Bansi Sampat, a 3rd-year EXTC Engineering student at DJSCE.
        Bansi is attending the India AI Impact Summit 2026.
        Your goal is to answer questions about Bansi's portfolio based on these facts:
        - Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
        - Skills: ${SKILLS.map(s => `${s.title}: ${s.skills.join(', ')}`).join('; ')}
        - Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.organization}`).join('; ')}
        
        Tone: Professional, technically deep, enthusiastic about VLSI and AI-hardware intersection. 
        If asked about things not in Bansi's background, steer the conversation back to her expertise in RTL coding and digital logic.
        Be concise but informative. Mention she is seeking 2026 Summer Internships.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm processing the semiconductor logic... please try again!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Connection to the logic gates timed out. Please check your network or API key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
          isOpen ? 'bg-slate-800 rotate-90 scale-90' : 'bg-sky-500 hover:bg-sky-400 animate-bounce shadow-sky-500/50'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/10 animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-4 text-white">
            <h3 className="font-bold flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Silicon Architect AI
            </h3>
            <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold mt-1">Impact Summit 2026 Edition</p>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth bg-slate-900/40"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-sky-500 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5 shadow-lg'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-white/5 animate-pulse text-sky-400 text-xs font-mono">
                  Synthesizing logic gates...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-900/80 border-t border-white/5">
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about VLSI or projects..."
                className="flex-grow bg-slate-800 text-white text-sm rounded-xl px-4 py-2 border border-white/10 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-50 disabled:bg-slate-700 text-white rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
