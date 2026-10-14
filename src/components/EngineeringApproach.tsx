import React from 'react';
import { engineeringPrinciples } from '../data/portfolioData';
import { 
  FileCode, 
  Layers, 
  Database, 
  GitPullRequest, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Compass
} from 'lucide-react';

const principleIcons: React.ReactNode[] = [
  <FileCode key="1" className="w-4 h-4 text-sky-500" />,
  <Layers key="2" className="w-4 h-4 text-indigo-500" />,
  <Database key="3" className="w-4 h-4 text-amber-500" />,
  <GitPullRequest key="4" className="w-4 h-4 text-emerald-500" />,
  <CheckCircle2 key="5" className="w-4 h-4 text-rose-500" />,
  <ShieldCheck key="6" className="w-4 h-4 text-blue-500" />,
  <Sparkles key="7" className="w-4 h-4 text-purple-500" />
];

export const EngineeringApproach: React.FC = () => {
  return (
    <section id="principles" className="py-20 border-t border-slate-200/40 dark:border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            06. Engineering Mindset
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            How I Approach Software Development
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            My working principles and engineering interests — grounded in pragmatic decisions, maintainability, and honest trade-offs.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {engineeringPrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {principleIcons[idx % principleIcons.length]}
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-600">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {principle.title}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
