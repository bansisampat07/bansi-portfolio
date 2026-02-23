
export interface Project {
  title: string;
  description: string;
  points: string[];
  tags: string[];
  github?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
