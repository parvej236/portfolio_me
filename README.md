# M Parvej Alam — Personal Developer Portfolio

A modern, high-performance, developer-focused portfolio website engineered for **M Parvej Alam** (Software Engineer Intern | Full-Stack Developer | AI/ML Explorer). Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

![Portfolio Preview](https://img.shields.io/badge/Stack-Java%20%7C%20Spring%20Boot%20%7C%20Vue%20%7C%20React%20%7C%20AI-blue)
![License](https://img.shields.io/badge/License-Apache--2.0-green)

---

## 🌟 Key Highlights & Features

- **Developer Identity & Anti-Slop Aesthetics:** Dark navy surfaces (`#020617` / `#0f172a`), electric sky blue and violet accents, crisp typography (`Plus Jakarta Sans` & `JetBrains Mono`), and zero-pill clean metadata formatting.
- **Hero & Status Bar:** Communicates technical identity immediately with headline *"Building Reliable Software. Exploring Intelligent Systems."*, live open-to-opportunities status toggle, 1-click email copy with feedback toast, and direct CTA actions.
- **Deep Technical Skills Matrix:** Categorized into Backend Development, Frontend Development, Databases, AI/ML, and DevOps & Tools with zero-pill visual discipline and interactive tab filtering.
- **Featured Systems & Architecture Showcase:**
  - **HelloBye:** Full-stack e-commerce platform ([hellobyebd.com](https://hellobyebd.com)) with Spring Boot, Vue, PostgreSQL, JWT, and courier integrations.
  - **Amrapari:** Microservices campus management platform with RabbitMQ, API gateway, and Vue 3.
  - **EventXCUET:** CUET university event coordination and ticketing verification system.
  - **Quantum Cosmo School & College:** Institutional education software serving 3,000+ students.
  - **AI / Machine Learning Projects:** BERT Question Answering (SQuAD), NLP sentiment analysis, and containerized FastAPI services.
- **Professional Timeline:** Reverse-chronological experience at **Quantum Foundation** (Java/Spring Boot) and **CodeAlpha** (AI internship).
- **Academic Foundation:** Computer Science and Engineering at **Chittagong University of Engineering & Technology (CUET)** with core coursework listings.
- **Engineering Principles:** 7 pragmatic tenets for API design, maintainability, relational data modeling, and applied AI.
- **ATS Resume Generator & PDF Print:** Printable, high-contrast resume modal ready for 1-click PDF download using browser print styles (`@media print`).
- **Interactive Customizer Drawer:** Live in-browser settings drawer allowing Parvej to customize his email, paste his LinkedIn URL, or toggle the job seeker status badge in real-time.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm or pnpm

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/parvej236/portfolio.git
cd portfolio
npm install
```

### 3. Local Development
Run the Vite development server on port 3000:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
Generate the optimized static build:

```bash
npm run build
```

The output will be placed in the `dist/` directory.

---

## ⚙️ Customization & Updating Content

All portfolio content is decoupled from UI components and cleanly configured in **`src/data/portfolioData.ts`**:

1. **Personal Information & Links:**
   - Modify `personalInfo` in `src/data/portfolioData.ts` to update your email, location, headline, or GitHub repository URL.
   - To link your LinkedIn profile, simply set `linkedin: "https://linkedin.com/in/your-handle"`. (When empty, the website cleanly hides unverified links).
2. **Projects:**
   - Edit or add items to `projects` array to showcase new projects, repositories, or live domains.
3. **Skills & Categories:**
   - Update `skillCategories` to append new frameworks, libraries, or tools.
4. **Experience & Education:**
   - Update `experienceList` or `educationInfo` as your career progresses.

---

## 🚢 Deployment Guide

This SPA is completely static and can be deployed anywhere with zero configuration:

- **Vercel:** Run `vercel` or link your GitHub repo.
- **Cloudflare Pages:** Set build command `npm run build` and output directory `dist`.
- **GitHub Pages:** Deploy the `dist/` folder using GitHub Actions.
- **Netlify:** Drag & drop the `dist/` folder or link the repository.

---

## 📄 License
Open source under the [Apache 2.0 License](LICENSE).
