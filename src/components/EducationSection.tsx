import React from 'react';
import { educationInfo } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200/40 dark:border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            05. Formal Education
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Foundation in Computer Science
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            Theoretical principles, algorithms, and core engineering paradigms cultivated at one of Bangladesh's premier public engineering universities.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/90 shadow-sm">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-2.5 py-1 rounded border border-sky-200 dark:border-sky-800/40">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {educationInfo.institution}
              </h3>
              <p className="text-base font-semibold text-slate-700 dark:text-slate-200 font-mono">
                {educationInfo.degree}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{educationInfo.location}</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationInfo.status}</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 my-6 leading-relaxed">
            {educationInfo.description}
          </p>

          {/* Core Coursework Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-semibold flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-sky-500" />
              <span>Key Coursework & Technical Modules</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {educationInfo.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/90 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  <span className="truncate">{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
