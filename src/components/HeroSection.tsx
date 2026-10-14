import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ArrowDown, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal, 
  Layers, 
  Cpu, 
  Database,
  ExternalLink
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { info, setIsResumeModalOpen, setIsConfigDrawerOpen } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(info.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting effects (subtle navy/violet, anti-slop restraint) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 dark:bg-sky-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal identity, headline, calls to action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Indicator */}
            {info.isOpenToOpportunities && (
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{info.statusText}</span>
              </div>
            )}

            {/* Name & Title */}
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-mono font-medium mb-2">
                {info.title}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {info.headline}
              </h1>
            </div>

            {/* Introduction prose */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {info.intro}
            </p>

            {/* Meta identifiers: Location & CUET */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
                <span>CUET CSE Student</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{info.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Java · Spring Boot · Vue · AI/ML</span>
              </span>
            </div>

            {/* Actions: Primary & Secondary buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-lg shadow-sm hover:shadow transition-all group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700/80 rounded-lg transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <FileText className="w-4 h-4 text-sky-500" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social / Connect Bar */}
            <div className="pt-2 flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                title="GitHub Profile (parvej236)"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              {info.linkedin ? (
                <a
                  href={info.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => setIsConfigDrawerOpen(true)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-sky-400 transition-colors text-xs flex items-center gap-1.5"
                  title="Add LinkedIn URL"
                >
                  <Linkedin className="w-4 h-4 opacity-50" />
                  <span className="text-[11px] font-mono hidden sm:inline">+ Link</span>
                </button>
              )}

              {/* Email 1-click copy button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                <span className="truncate max-w-[170px] sm:max-w-none">{info.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile / Technical Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-60" />

              {/* Main Engineering Card */}
              <div className="relative rounded-xl bg-slate-900/90 dark:bg-slate-900/90 border border-slate-800 shadow-2xl p-5 backdrop-blur-sm text-slate-200">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">developer-profile.ts</span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400">CUET CSE</span>
                </div>

                {/* Developer identity summary */}
                <div className="pt-4 flex items-center gap-4">
                  {/* Photo / Avatar with subtle ring */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-xl text-sky-300 shadow-inner">
                      MPA
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {info.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      @parvej236 · Chittagong, BD
                    </p>
                    <p className="text-[11px] text-sky-400 font-mono mt-0.5">
                      Chittagong Univ. of Eng & Tech
                    </p>
                  </div>
                </div>

                {/* Code-like snapshot of core skills and practical focus */}
                <div className="mt-4 p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 font-mono text-xs space-y-2">
                  <div className="flex items-start gap-2 text-slate-400">
                    <span className="text-indigo-400">const</span>
                    <span className="text-sky-300">primaryBackend</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-emerald-300">['Java', 'Spring Boot', 'REST']</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-400">
                    <span className="text-indigo-400">const</span>
                    <span className="text-sky-300">frontendStack</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-emerald-300">['Vue.js', 'React', 'Tailwind']</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-400">
                    <span className="text-indigo-400">const</span>
                    <span className="text-sky-300">databaseEngines</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-emerald-300">['PostgreSQL', 'MySQL']</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-400">
                    <span className="text-indigo-400">const</span>
                    <span className="text-sky-300">aiExploration</span>
                    <span className="text-slate-500">=</span>
                    <span className="text-emerald-300">['BERT', 'NLP', 'FastAPI']</span>
                  </div>
                </div>

                {/* Quick impact highlights */}
                <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-left">
                  <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400">Experience</span>
                    <p className="text-xs font-semibold text-slate-200 mt-0.5">Quantum Foundation & CodeAlpha</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400">Featured Platform</span>
                    <p className="text-xs font-semibold text-sky-400 mt-0.5">HelloBye E-Commerce</p>
                  </div>
                </div>

                {/* Footer link to GitHub */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Real-world software focus</span>
                  </span>
                  <a
                    href={info.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 group"
                  >
                    <span>github/parvej236</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
