import React from 'react';
import { Project } from '../types/portfolio';
import { ProjectPreviewVisual } from './ProjectPreviewVisual';
import { ExternalLink, Github, ChevronRight, Users, Check } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="group rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
      
      {/* Visual Architectural Preview Mockup */}
      <ProjectPreviewVisual projectId={project.id} />

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header metadata: Category & Team status */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-sky-600 dark:text-sky-400 font-semibold">{project.category}</span>
            {project.isTeamProject ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                <Users className="w-3 h-3" />
                <span>Team Project</span>
              </span>
            ) : (
              <span className="text-[11px] text-slate-400 font-mono">
                {project.metricsOrHighlight || "Production Code"}
              </span>
            )}
          </div>

          {/* Project Title & Subtitle */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Key bullets preview */}
          <div className="space-y-1.5 mb-5">
            {project.keyFeatures.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <span className="text-sky-500 font-bold shrink-0 mt-0.5">•</span>
                <span className="line-clamp-2">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech stack: Clean, non-pill text badges */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mb-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded border border-slate-200/60 dark:border-slate-700/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono text-slate-400 self-center">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Functional Actions */}
          <div className="flex items-center justify-between gap-2 pt-1 text-xs">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 font-medium py-1 group/btn cursor-pointer"
            >
              <span>Architecture & Details</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="View GitHub Repository"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 font-semibold text-[11px] text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded transition-colors"
                  title="Visit Live Application"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
