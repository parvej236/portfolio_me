import { PersonalInfo, Project, SkillCategory, ExperienceItem, EducationItem, EngineeringPrinciple } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "M Parvej Alam",
  shortName: "Parvej",
  title: "Software Engineer Intern · Full-Stack Developer · AI/ML Explorer",
  headline: "Building Reliable Software. Exploring Intelligent Systems.",
  intro: "I'm M Parvej Alam, a Computer Science and Engineering student at CUET and a software developer passionate about building scalable web applications, backend systems, and AI-powered solutions. I work primarily with Java, Spring Boot, modern frontend technologies, and machine learning tools to turn ideas into practical software.",
  aboutBio: [
    "I am pursuing my Bachelor of Science in Computer Science and Engineering at Chittagong University of Engineering & Technology (CUET), where I focus on distributed systems, core software engineering principles, and modern machine learning architectures.",
    "My hands-on development experience spans architecting full-stack applications with Java, Spring Boot, Spring Security, RESTful APIs, and relational databases like PostgreSQL and MySQL. On the frontend, I build modular, accessible interfaces using Vue.js and React with Tailwind CSS.",
    "Beyond classical backend systems, I actively explore applied Artificial Intelligence and Natural Language Processing — from building BERT-based question answering and sentiment classifiers to developing containerized ML services with FastAPI and Docker. I am dedicated to writing clean, maintainable code, implementing disciplined API contracts, and adopting production-grade engineering workflows."
  ],
  location: "Dhaka, Bangladesh",
  email: "alamparvej2024@gmail.com",
  github: "https://github.com/parvej236",
  // Note: LinkedIn URL is kept empty by default until confirmed by user.
  // The UI will gracefully hide the link unless a valid URL is provided.
  linkedin: "",
  isOpenToOpportunities: true,
  statusText: "Open to Software Engineering Opportunities",
  cuetAffiliation: "Chittagong University of Engineering & Technology (CUET)"
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend Development",
    description: "Enterprise Java backend architectures, microservices, and secure RESTful APIs",
    skills: [
      { name: "Java", description: "Core OOP, Collections, Concurrency & Stream API" },
      { name: "Spring Boot", description: "Application scaffolding, auto-configuration & services" },
      { name: "Spring Security", description: "JWT auth, RBAC & endpoint protection" },
      { name: "REST APIs", description: "Contract design, resource modeling & HTTP standards" },
      { name: "Spring Data JPA / Hibernate", description: "Entity mapping, queries & transaction management" },
      { name: "Microservices", description: "Service decomposition, API gateway & messaging" },
      { name: "Thymeleaf", description: "Server-side templating for enterprise web interfaces" }
    ]
  },
  {
    name: "Frontend Development",
    description: "Responsive, component-driven client applications and reactive state management",
    skills: [
      { name: "JavaScript (ES6+)", description: "Modern asynchronous JavaScript & DOM manipulation" },
      { name: "Vue.js / Vue 3", description: "Composition API, reactive refs & component lifecycle" },
      { name: "React.js", description: "Hooks, functional components & modular architecture" },
      { name: "Tailwind CSS", description: "Utility-first design systems & responsive layouts" },
      { name: "HTML5", description: "Semantic markup, web accessibility & standards" },
      { name: "CSS3", description: "Flexbox, CSS Grid, transitions & responsive design" },
      { name: "Pinia", description: "Type-safe centralized state management for Vue" }
    ]
  },
  {
    name: "Databases",
    description: "Relational data modeling, query optimization, and schema integrity",
    skills: [
      { name: "PostgreSQL", description: "Relational modeling, indexing, foreign keys & ACID guarantees" },
      { name: "MySQL", description: "Schema normalization, complex joins & transaction queries" }
    ]
  },
  {
    name: "AI / Machine Learning",
    description: "Applied NLP, deep learning models, and intelligent system pipelines",
    skills: [
      { name: "Python", description: "Data science workflows & automation scripting" },
      { name: "NumPy", description: "Numerical operations & multi-dimensional array processing" },
      { name: "Pandas", description: "Data manipulation, cleansing & tabular exploration" },
      { name: "Matplotlib", description: "Exploratory data analysis & statistical plotting" },
      { name: "Scikit-learn", description: "Classification, regression, clustering & evaluation" },
      { name: "NLP", description: "Text tokenization, vectorization, TF-IDF & preprocessing" },
      { name: "Transformers / BERT", description: "Fine-tuning for question answering and sentiment analysis" },
      { name: "RAG & LLM Applications", description: "Retrieval-augmented generation pipelines & prompt engineering" }
    ]
  },
  {
    name: "DevOps and Tools",
    description: "Containerization, version control, build tools, and deployment workflows",
    skills: [
      { name: "Git", description: "Branching strategies, history rewriting & collaborative flow" },
      { name: "GitHub", description: "Code review, pull requests & remote collaboration" },
      { name: "Docker", description: "Containerized environments, multi-stage builds & compose" },
      { name: "Linux", description: "Shell scripting, process management & server administration" },
      { name: "Maven", description: "Java dependency management, build lifecycles & packaging" },
      { name: "FastAPI", description: "High-performance Python microservices for ML inference" },
      { name: "CI/CD & Cloud Deployment", description: "Automated pipelines, staging environments & containers" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "hellobye-ecommerce",
    title: "HelloBye",
    subtitle: "Enterprise Full-Stack E-Commerce Platform",
    category: "Full-Stack",
    description: "A production-grade, full-stack e-commerce web platform engineered to support high-reliability commercial operations, multi-variant inventory management, and automated order fulfillment.",
    roleDescription: "Architected end-to-end full-stack features, integrated Spring Security with JWT token authentication, and built modular Vue.js interfaces with tailored administrative dashboards.",
    technologies: ["Vue.js", "Tailwind CSS", "Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Docker"],
    keyFeatures: [
      "Product, category, brand, and hierarchical variant management with live SKU tracking.",
      "Real-time inventory and multi-state order processing pipeline.",
      "Third-party courier logistics integration and real-time shipment status tracking.",
      "Flexible coupon engine supporting percentage, flat, and minimum spend rules.",
      "User role-based access control (RBAC) with granular administrative permissions.",
      "Comprehensive business sales reporting and administrative analytics."
    ],
    liveUrl: "https://hellobyebd.com",
    githubUrl: "https://github.com/parvej236", // Configurable repository
    featured: true,
    accentColor: "from-sky-500/20 via-blue-500/10 to-transparent",
    metricsOrHighlight: "Production E-Commerce Platform"
  },
  {
    id: "amrapari-campus",
    title: "Amrapari",
    subtitle: "Modular Education & Campus Management Platform",
    category: "EdTech & Campus",
    description: "A distributed, service-oriented campus ecosystem designed to streamline academic operations, student interactions, and campus services through a resilient microservices architecture.",
    roleDescription: "Contributed to backend microservice design, Spring Boot REST endpoints, service-to-service communication mechanisms, and Vue 3 frontend components with Pinia state management.",
    technologies: ["Spring Boot", "Java", "Vue 3", "Pinia", "Tailwind CSS", "PostgreSQL", "RabbitMQ", "Docker"],
    keyFeatures: [
      "Microservice-based backend decoupled for high scalability and modularity.",
      "Centralized API Gateway with dynamic service discovery and route management.",
      "Secure unified authentication and student/faculty identity directory.",
      "Dedicated modules for academic scheduling, notice boards, and campus life.",
      "Asynchronous message broker integration via RabbitMQ for decoupled event processing."
    ],
    isTeamProject: true,
    githubUrl: "https://github.com/parvej236",
    featured: true,
    accentColor: "from-indigo-500/20 via-violet-500/10 to-transparent",
    metricsOrHighlight: "Microservice Architecture"
  },
  {
    id: "eventx-cuet",
    title: "EventXCUET",
    subtitle: "University Event Management System",
    category: "EdTech & Campus",
    description: "A comprehensive campus event coordination platform engineered for university student bodies, organizers, and clubs to manage registrations, ticketing, and verification workflows.",
    roleDescription: "Core team contributor for database schema normalization, Spring Data JPA persistence logic, REST controller implementations, and Vue 3 student transaction dashboards.",
    technologies: ["Vue 3", "Tailwind CSS", "Java", "Spring Boot", "JPA/Hibernate", "MySQL"],
    keyFeatures: [
      "Centralized event directory, club registration, and ticketing approval pipelines.",
      "Separate role-tailored portals for campus organizers, volunteers, and students.",
      "Venue scheduling conflict resolution and volunteer team task coordination.",
      "Payment transaction verification and approval workflows for ticketed events.",
      "Normalized relational schema optimized for concurrency during campus event peaks."
    ],
    isTeamProject: true,
    githubUrl: "https://github.com/parvej236",
    featured: true,
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    metricsOrHighlight: "CUET Campus Team Project"
  },
  {
    id: "quantum-cosmo-school",
    title: "Quantum Cosmo School & College",
    subtitle: "Institutional Education Management System",
    category: "EdTech & Campus",
    description: "A robust educational operational management system designed to support academic administrative workflows for an institution serving more than 3,000 enrolled students.",
    roleDescription: "Worked on operational workflows, backend business services, student record management modules, and server-side templates using Java and Spring Boot.",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "JavaScript", "SQL", "Docker"],
    keyFeatures: [
      "Student record tracking and enrollment management for 3,000+ students.",
      "Academic evaluation, grade sheet generation, and progress assessment workflows.",
      "Administrative fee accounting, attendance logs, and staff workflow coordination.",
      "Secure relational database access patterns designed for high data integrity.",
      "Containerized deployment configuration ensuring reliable environment parity."
    ],
    isTeamProject: true,
    featured: true,
    accentColor: "from-amber-500/20 via-orange-500/10 to-transparent",
    metricsOrHighlight: "Serving 3,000+ Students"
  },
  {
    id: "ai-nlp-experiments",
    title: "AI / Machine Learning Projects",
    subtitle: "Applied NLP, SQuAD QA & Containerized ML Pipelines",
    category: "AI & ML",
    description: "A curated suite of applied artificial intelligence experiments focusing on natural language comprehension, transformer fine-tuning, and production containerization for model inference.",
    roleDescription: "Sole developer across data preprocessing, model evaluation, fine-tuning scripts, and FastAPI deployment containers.",
    technologies: ["Python", "FastAPI", "Transformers / BERT", "Scikit-learn", "NumPy", "Pandas", "Docker"],
    keyFeatures: [
      "Context-grounded Question Answering fine-tuned on the SQuAD benchmark utilizing BERT representations.",
      "Sentiment Analysis classification pipeline with NLP text tokenization and polarity scoring.",
      "Predictive machine learning pipelines covering feature scaling, cross-validation, and regression.",
      "Lightweight asynchronous inference API engineered using FastAPI and packaged in Docker containers.",
      "Exploratory data analysis notebooks with Matplotlib visualizations and metric curves."
    ],
    githubUrl: "https://github.com/parvej236",
    featured: true,
    accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
    metricsOrHighlight: "BERT & Applied NLP"
  }
];

export const experienceList: ExperienceItem[] = [
  {
    company: "Quantum Foundation",
    role: "Software Development",
    location: "Dhaka, Bangladesh",
    period: "Professional Experience",
    summary: "Contributed to backend systems and enterprise management software supporting institutional workflows.",
    highlights: [
      "Engineered backend business logic and RESTful API endpoints utilizing Java and the Spring Boot framework.",
      "Implemented enterprise web application features and internal management modules for institutional operations.",
      "Integrated relational database persistence layers with query optimizations and transactional safety.",
      "Gained hands-on experience in containerization, deployment pipelines, and collaborative software engineering."
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "SQL", "Docker", "Git"]
  },
  {
    company: "CodeAlpha",
    role: "Artificial Intelligence Internship",
    location: "Remote",
    period: "Internship",
    summary: "Focused on machine learning experimentation, Python data pipelines, and exploratory model prototyping.",
    highlights: [
      "Executed practical machine learning tasks, data cleaning, feature engineering, and predictive modeling in Python.",
      "Conducted exploratory data analysis and model performance evaluations using Scikit-learn, NumPy, and Pandas.",
      "Explored natural language processing pipelines and deep learning model structures for real-world tasks.",
      "Documented experimental workflows and participated in technical review cycles."
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas", "NLP"]
  }
];

export const educationInfo: EducationItem = {
  institution: "Chittagong University of Engineering & Technology (CUET)",
  degree: "Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)",
  location: "Chittagong, Bangladesh",
  period: "Undergraduate Program",
  status: "Currently Pursuing (CSE Student)",
  description: "Rigorous computer science curriculum emphasizing algorithms, system design, software engineering methodologies, distributed networks, and intelligent computation.",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java/C++)",
    "Database Management Systems (DBMS)",
    "Software Engineering & System Analysis",
    "Operating Systems & Architecture",
    "Computer Networks & Protocols",
    "Machine Learning & Artificial Intelligence",
    "Compiler Design & Theory of Computation"
  ]
};

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    title: "Design Clear API Contracts",
    description: "Model explicit, predictable REST endpoints with standardized status codes, validated request schemas, and comprehensive error payloads before writing business code."
  },
  {
    title: "Build Maintainable Backend Architectures",
    description: "Structure applications with clean separation of concerns — isolating domain models, service boundaries, and persistence logic so systems can evolve without ripple effects."
  },
  {
    title: "Use Relational Databases Thoughtfully",
    description: "Design normalized schemas, index high-cardinality foreign keys, enforce referential integrity at the database level, and guard against N+1 query overhead."
  },
  {
    title: "Follow Version Control & Team Practices",
    description: "Practice disciplined atomic git commits, readable branch conventions, descriptive pull requests, and constructive code reviews to maintain high codebase quality."
  },
  {
    title: "Test Important Functionality",
    description: "Prioritize automated testing around business-critical paths, authorization rules, and edge cases to prevent regressions and support safe refactoring."
  },
  {
    title: "Prioritize Secure Deployment & Operations",
    description: "Containerize dependencies with Docker, enforce principle of least privilege in Spring Security, keep secrets in environment configs, and observe system health."
  },
  {
    title: "Explore AI to Solve Real Problems",
    description: "Treat machine learning and language models as specialized architectural components — leveraging NLP, embeddings, and fine-tuning where algorithmic heuristics fall short."
  }
];
