
import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    title: "UART Module for Swarm Robotics",
    description: "Designed a UART transceiver facilitating communication between Artix-7 FPGA and ESP32 modules.",
    points: [
      "Verified working via behavioral simulation in Xilinx Vivado.",
      "Developed Verilog logic using a Finite State Machine (FSM) for error-free serial data transfer.",
      "Created a self-checking testbench to validate baud rate timing and corner cases."
    ],
    tags: ["Verilog", "FPGA", "Vivado", "FSM", "Hardware Design"],
    github: "https://github.com/bansisampat07"
  },
  {
    title: "Parameterized Arithmetic Logic Unit (ALU)",
    description: "Engineered a scalable, bit-width configurable ALU supporting wide-ranging arithmetic and logical operations.",
    points: [
      "Implemented dynamic status flag generation for signed overflow and unsigned rollover.",
      "Successfully validated critical corner cases through intensive waveform analysis.",
      "Optimized for high-speed computation on semiconductor architectures."
    ],
    tags: ["VLSI", "RTL Coding", "Digital Logic", "Verilog HDL"],
    github: "https://github.com/bansisampat07"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Research and Documentation Head (Founding)",
    organization: "DJS MicroMinds (Official VLSI Club)",
    period: "Jan 2026 – Present",
    description: [
      "Leading student workshops on FPGA design and college's debut VLSI Hackathon.",
      "Fostering a semiconductor culture through advanced peer-learning sessions."
    ]
  },
  {
    role: "TechAI Co-Committee",
    organization: "DJS Nova (Official Astronomy and Astrophysics Club)",
    period: "Aug 2024 – Oct 2025",
    description: [
      "Bridged the gap between software and space research through AI-driven astronomical data analysis discussions.",
      "Significantly enhanced team collaboration via public outreach and technical workshops."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Hardware Design",
    skills: ["Verilog HDL", "RTL Coding", "Testbench Development", "Python"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Xilinx Vivado", "FPGA (Artix-7)"]
  },
  {
    title: "Domain Knowledge",
    skills: ["Computer Architecture", "CMOS Fabrication", "IPR & Patent Law", "VLSI Design"]
  }
];

export const EXTRACURRICULAR = [
  {
    title: "Asteroid Detection Campaign",
    org: "National Spaceonova / IASC",
    desc: "Collaborated with IASC to analyze real-time astronomical data. Used Astrometrica to identify and report Near-Earth Objects (NEO)."
  },
  {
    title: "IPR Awareness Guide",
    org: "Copyright Filed (Diary No: 31858/2024-CO/L)",
    desc: "Authored a copyrighted creative guide simplifying Intellectual Property Rights and Patent Law for engineering students."
  }
];

export const CERTIFICATIONS = [
  { name: "CENSE Summer School (Semiconductor Fab)", org: "IISc Bengaluru", date: "June 2025" },
  { name: "Space Science & Satellite Tech", org: "ISRO", date: "July – Aug 2023" }
];
