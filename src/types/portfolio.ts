export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & ML' | 'EdTech & Campus';
  description: string;
  roleDescription?: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  isTeamProject?: boolean;
  featured?: boolean;
  accentColor?: string;
  metricsOrHighlight?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    description?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  headline: string;
  intro: string;
  aboutBio: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string; // If empty, UI gracefully hides or offers configure
  isOpenToOpportunities: boolean;
  statusText: string;
  cuetAffiliation: string;
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
}
