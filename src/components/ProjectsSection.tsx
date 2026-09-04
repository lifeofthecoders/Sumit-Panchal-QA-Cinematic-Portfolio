import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

// const projects: Project[] = [
//   {
//     number: '01',
//     title: 'PolicyGuard AI',
//     category: 'AI / LEGAL-TECH PLATFORM',
//     description:
//       'AI-powered platform engineered for automated privacy policy analysis and legal contract auditing across web, desktop, and mobile. Implements NLP extraction, real-time risk alert detection, and generative risk score intelligence.',
//     githubUrl: 'https://github.com/lohithadamisetti123',
//     tech: [
//       'React.js',
//       'React Native',
//       'Electron.js',
//       'Node.js',
//       'Express.js',
//       'MongoDB Atlas',
//       'OpenAI API',
//       'Prompt Eng',
//       'NLP',
//       'Docker',
//       'JWT',
//     ],
//     metrics: [
//       { label: 'PLATFORMS', value: 'Web, Mobile, Desktop' },
//       { label: 'ENGINE', value: 'OpenAI NLP / GPT' },
//       { label: 'PIPELINE', value: 'Automated Scoring' },
//     ],
//   },
//   {
//     number: '02',
//     title: 'Software Release Risk Heatmap',
//     category: 'MACHINE LEARNING / DEV PLATFORM',
//     description:
//       'Full-stack predictive release management platform utilizing Machine Learning. Implements a trained Random Forest classifier to categorize release stability from Low to Critical risk, rendered over a live interactive team heatmap.',
//     githubUrl: 'https://github.com/lohithadamisetti123',
//     tech: [
//       'React.js',
//       'TypeScript',
//       'Python',
//       'FastAPI',
//       'scikit-learn',
//       'PostgreSQL',
//       'Tailwind CSS',
//       'REST APIs',
//       'JWT',
//     ],
//     metrics: [
//       { label: 'MODEL', value: 'Random Forest' },
//       { label: 'ACCURACY', value: 'High Precision' },
//       { label: 'DASHBOARD', value: 'Live Risk Heatmap' },
//     ],
//   },
//   {
//     number: '03',
//     title: 'Multi-Tenant SaaS Platform',
//     category: 'CLOUD / DISTRIBUTED SYSTEM',
//     description:
//       'Enterprise-grade multi-tenant platform built for unified management of teams, projects, and execution lifecycles. Architected with strict tenant data isolation, granular Role-Based Access Control (RBAC), and containerized deployments.',
//     githubUrl: 'https://github.com/lohithadamisetti123',
//     tech: [
//       'Node.js',
//       'Express.js',
//       'PostgreSQL',
//       'React',
//       'Docker',
//       'JWT',
//       'RBAC',
//       'REST APIs',
//     ],
//     metrics: [
//       { label: 'ARCHITECTURE', value: 'Multi-Tenant' },
//       { label: 'SECURITY', value: 'RBAC Isolation' },
//       { label: 'CONTAINERS', value: 'Docker Compose' },
//     ],
//   },
//   {
//     number: '04',
//     title: 'Payment Gateway with Hosted Checkout',
//     category: 'FINTECH / PAYMENT SYSTEMS',
//     description:
//       'End-to-end hosted payment gateway infrastructure supporting seamless merchant order generation, multi-currency processing, and secure consumer checkout via UPI and Cards with webhook transaction verification.',
//     githubUrl: 'https://github.com/lohithadamisetti123',
//     tech: [
//       'Node.js',
//       'Spring Boot',
//       'PostgreSQL',
//       'React',
//       'Docker',
//       'REST APIs',
//       'UPI / Card Integrations',
//     ],
//     metrics: [
//       { label: 'PROTOCOLS', value: 'UPI & Cards' },
//       { label: 'BACKEND', value: 'Spring Boot + Node' },
//       { label: 'DATABASE', value: 'ACID PostgreSQL' },
//     ],
//   },
// ];

const projects: Project[] = [
  {
    number: '01',
    title: 'WEB APPLICATION QA',
    category: 'MANUAL / FUNCTIONAL TESTING',
    description:
      'Performed end-to-end manual testing of web applications covering functional, regression, integration, smoke, exploratory, and user acceptance testing. Designed test scenarios and test cases, executed test cycles, identified defects, and validated fixes across releases.',
    //githubUrl: 'https://github.com/lifeofthecoders/Sumit-Panchal-QA-Portfolio',
    tech: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Integration Testing',
      'UAT',
      'JIRA',
      'Test Case Design',
      'Bug Reporting',
    ],
    metrics: [
      { label: 'TESTING', value: 'End-to-End' },
      { label: 'DEFECTS', value: 'Tracked & Verified' },
      { label: 'COVERAGE', value: 'Functional + Regression' },
    ],
  },

  {
    number: '02',
    title: 'MOBILE APPLICATION QA',
    category: 'MOBILE / FUNCTIONAL TESTING',
    description:
      'Validated mobile application functionality across user flows, compatibility scenarios, edge cases, and regression cycles. Focused on usability, reliability, defect reproduction, and release confidence for mobile experiences.',
    //githubUrl: 'https://github.com/lifeofthecoders/Sumit-Panchal-QA-Portfolio',
    tech: [
      'Mobile Testing',
      'Functional Testing',
      'Regression Testing',
      'Usability Testing',
      'Compatibility Testing',
      'Bug Reporting',
      'JIRA',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'Mobile Applications' },
      { label: 'FOCUS', value: 'Functional Quality' },
      { label: 'VALIDATION', value: 'Regression Cycles' },
    ],
  },

  {
    number: '03',
    title: 'REGRESSION & UAT TESTING',
    category: 'REGRESSION / USER ACCEPTANCE TESTING',
    description:
      'Executed comprehensive regression and user acceptance testing to ensure existing functionality remained stable after product changes and releases. Validated critical user journeys, identified regression issues, verified fixes, and supported release readiness through structured test execution.',
    //githubUrl: 'https://github.com/lifeofthecoders/Sumit-Panchal-QA-Portfolio',
    tech: [
      'Regression Testing',
      'UAT',
      'Functional Testing',
      'Smoke Testing',
      'Test Execution',
      'JIRA',
      'Defect Tracking',
      'Release Validation',
    ],
    metrics: [
      { label: 'FOCUS', value: 'Regression Stability' },
      { label: 'VALIDATION', value: 'User Acceptance' },
      { label: 'GOAL', value: 'Release Readiness' },
    ],
  },
  {
    number: '04',
    title: 'QA TEST MANAGEMENT',
    category: 'TEST DESIGN / DEFECT MANAGEMENT',
    description:
      'Created and maintained structured test scenarios, detailed test cases, defect reports, regression checklists, and execution evidence. Followed the defect lifecycle from identification and documentation through retesting and closure.',
    //githubUrl: 'https://github.com/lifeofthecoders/Sumit-Panchal-QA-Portfolio',
    tech: [
      'Test Scenarios',
      'Test Cases',
      'Checklists',
      'Bug Reports',
      'JIRA',
      'Regression Testing',
      'Exploratory Testing',
      'UAT',
    ],
    metrics: [
      { label: 'PROCESS', value: 'Defect Lifecycle' },
      { label: 'OUTPUT', value: 'QA Documentation' },
      { label: 'APPROACH', value: 'Quality First' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              FEATURED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              QUALITY DELIVERED.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to explore selected QA projects, testing practices, and quality engineering work.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // QA METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;