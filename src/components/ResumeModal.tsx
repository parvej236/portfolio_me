import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Github, 
  Mail, 
  MapPin, 
  FileText,
  GraduationCap
} from 'lucide-react';
import { skillCategories, projects, experienceList, educationInfo } from '../data/portfolioData';

export const ResumeModal: React.FC = () => {
  const { info, isResumeModalOpen, setIsResumeModalOpen } = usePortfolio();

  if (!isResumeModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-8 border border-slate-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="no-print p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-sky-400" />
            <span className="font-mono text-xs font-semibold text-slate-200">
              M_Parvej_Alam_Software_Engineer_CV.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Style Resume Sheet */}
        <div className="p-8 sm:p-12 space-y-6 text-slate-900 bg-white leading-relaxed font-sans max-h-[80vh] overflow-y-auto">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              {info.name}
            </h1>
            <p className="text-sm font-semibold text-slate-700 mt-1">
              Software Engineer Intern | Full-Stack Developer | AI/ML Explorer
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 font-mono mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{info.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                <span>{info.email}</span>
              </span>
              <span>•</span>
              <a href={info.github} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">
                github.com/parvej236
              </a>
              {info.linkedin && (
                <>
                  <span>•</span>
                  <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">
                    LinkedIn
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-950">
                  {educationInfo.institution}
                </h3>
                <p className="text-xs text-slate-700">
                  {educationInfo.degree}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-600 sm:text-right">
                Chittagong, Bangladesh · Current Undergraduate
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              <strong>Core Coursework:</strong> {educationInfo.coursework.join(', ')}.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceList.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">
                        {exp.company} — <span className="font-semibold text-slate-700">{exp.role}</span>
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-600">
                      {exp.location}
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-700 list-disc list-inside">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">
                    Technologies: {exp.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="text-sm font-bold text-slate-950">
                      {p.title} — <span className="font-normal text-slate-600 text-xs">{p.subtitle}</span>
                      {p.isTeamProject && <span className="text-[10px] text-amber-700 font-mono ml-2">(Team Project)</span>}
                    </h3>
                    <span className="text-xs font-mono text-slate-600">
                      {p.liveUrl ? p.liveUrl.replace('https://', '') : 'Engineering Showcase'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-0.5">
                    {p.description}
                  </p>
                  <ul className="mt-1 space-y-0.5 text-xs text-slate-700 list-disc list-inside">
                    {p.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Tech Stack: {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-bold sm:w-44 shrink-0 text-slate-900">
                    {cat.name}:
                  </span>
                  <span className="text-slate-700">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer (Hidden on print) */}
        <div className="no-print p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>Tip: Click "Print / Save as PDF" to generate a clean, printer-friendly PDF file.</span>
          <button
            onClick={() => setIsResumeModalOpen(false)}
            className="font-semibold text-slate-800 hover:text-black cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
