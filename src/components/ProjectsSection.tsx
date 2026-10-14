import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Layers, Sparkles, Filter } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    'All',
    'Full-Stack',
    'EdTech & Campus',
    'AI & ML'
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/40 dark:border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
              03. Featured Projects
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Practical Systems & Applied Intelligence
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Production e-commerce, distributed campus platforms, and applied machine learning models.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg mb-10 max-w-fit">
          {filterTabs.map((tab) => {
            const isSelected = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {tab === 'All' ? 'All Systems' : tab}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Technical Callout Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Honest Engineering Accountability: Collaborative projects and team roles are clearly attributed.</span>
          </div>
          <a
            href="https://github.com/parvej236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-400 underline underline-offset-4"
          >
            Explore all repositories on GitHub →
          </a>
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
