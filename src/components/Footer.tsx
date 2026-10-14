import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { info, setIsResumeModalOpen, setIsConfigDrawerOpen } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/40 dark:border-slate-800/60 bg-white dark:bg-slate-950/80 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {info.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              CUET CSE · Software Engineer Intern · Full-Stack & AI
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 pt-1">
              © {new Date().getFullYear()} M Parvej Alam. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Links & Quick Actions */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              GitHub
            </a>

            {info.linkedin && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={info.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 transition-colors"
                >
                  LinkedIn
                </a>
              </>
            )}

            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="hover:text-sky-500 transition-colors cursor-pointer"
            >
              Resume
            </button>

            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer flex items-center gap-1"
              title="Scroll to top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
