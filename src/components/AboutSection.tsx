import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  GitBranch, 
  CheckCircle,
  GraduationCap,
  Building2,
  FolderGit2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { info } = usePortfolio();

  return (
    <section id="about" className="py-20 border-t border-slate-200/40 dark:border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            01. Background & Perspective
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Software That Solves Real Operational Problems
          </h2>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Focused Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {info.aboutBio.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}

            {/* Core Values / Working Tenets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  <Code2 className="w-4 h-4 text-sky-500" />
                  <span>Maintainable Architecture</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Separating business concerns, enforcing strict domain models, and writing clear API documentation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  <Cpu className="w-4 h-4 text-indigo-500" />
                  <span>Pragmatic AI Systems</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Grounding transformer models and NLP workflows in practical services through containerized FastAPI endpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights & Verified Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-slate-100 shadow-xl">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Snapshot & Education</span>
                <span className="text-sky-400">CUET</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Academic Program</span>
                  <p className="font-semibold text-white flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                    <span>B.Sc. in Computer Science & Engineering</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Chittagong University of Engineering & Technology
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Primary Backend Stack</span>
                  <p className="font-medium text-slate-200">
                    Java · Spring Boot · Spring Security · Hibernate / JPA
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Frontend & State Management</span>
                  <p className="font-medium text-slate-200">
                    Vue.js (Pinia) · React.js · Tailwind CSS
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Databases & Infrastructure</span>
                  <p className="font-medium text-slate-200">
                    PostgreSQL · MySQL · Docker · Linux
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block mb-0.5">Practical Experience</span>
                  <p className="text-xs text-slate-300">
                    Software Development at <strong className="text-white">Quantum Foundation</strong> & AI Internship at <strong className="text-white">CodeAlpha</strong>
                  </p>
                </div>
              </div>

              {/* Verified Work Banner */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Real-World Tested Code</span>
                </span>
                <span>Dhaka, BD</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
