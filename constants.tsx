
import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    title: "FPGA-Controlled Swarm Robotics System for Disaster Search Operations",
    description: "Architected a master-slave swarm system on a Digilent Basys3 FPGA coordinating 2 ESP32-based robot nodes via a gateway ESP32 over UART for wireless command relay.",
    points: [
      "Implemented a frontier-based exploration algorithm in Verilog RTL, dynamically partitioning a 10×10 spatial grid into different zones to eliminate inter-robot collision and search redundancy.",
      "Utilized True Dual-Port BRAM to construct and update a real-time spatial map, storing per-coordinate exploration status across the partitioned search zones.",
      "Verified FPGA communication, grid mapping, and partitioning logic independently in Xilinx Vivado; full hardware integration with physical bots currently in progress."
    ],
    tags: ["Verilog", "FPGA", "RTL", "BRAM", "Vivado", "Swarm Robotics"],
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

