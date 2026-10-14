import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { EngineeringApproach } from './components/EngineeringApproach';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ConfigDrawer } from './components/ConfigDrawer';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500/20 selection:text-sky-300 transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Layout */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* About Me Section */}
          <AboutSection />

          {/* Technical Skills Section */}
          <SkillsSection />

          {/* Featured Projects Section */}
          <ProjectsSection />

          {/* Professional Experience Timeline */}
          <ExperienceTimeline />

          {/* Academic Background / Education */}
          <EducationSection />

          {/* Engineering Approach / Mindset */}
          <EngineeringApproach />

          {/* Contact & Inquiry Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive ATS Resume & PDF Print Modal */}
        <ResumeModal />

        {/* Realtime Live Portfolio Customizer Drawer */}
        <ConfigDrawer />
      </div>
    </PortfolioProvider>
  );
}
