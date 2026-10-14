import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Server, 
  Layout, 
  Database, 
  Brain, 
  Wrench, 
  Check, 
  Layers
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Backend Development": <Server className="w-4 h-4 text-sky-500" />,
  "Frontend Development": <Layout className="w-4 h-4 text-emerald-500" />,
  "Databases": <Database className="w-4 h-4 text-amber-500" />,
  "AI / Machine Learning": <Brain className="w-4 h-4 text-indigo-500" />,
  "DevOps and Tools": <Wrench className="w-4 h-4 text-purple-500" />
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-200/40 dark:border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
              02. Technical Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Core Technologies & Engineering Stack
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Grounded in actual project implementations — no arbitrary percentage scores or superficial metrics.
          </p>
        </div>

        {/* Filter Tabs / Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg mb-10 max-w-fit">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {displayedCategories.map((catGroup) => (
            <div key={catGroup.name} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
                {categoryIcons[catGroup.name] || <Layers className="w-4 h-4 text-sky-500" />}
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                  {catGroup.name}
                </h3>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {catGroup.description}
                </span>
              </div>

              {/* Technology Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-colors group"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-snug">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
