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

const projects: Project[] = [
  {
    number: '01',
    title: 'WEB APPLICATION TESTING',
    category: 'FUNCTIONAL / REGRESSION TESTING',
    description:
      'Performed end-to-end manual testing of web applications by validating requirements, user journeys, functional behavior, regression impact, edge cases, and release readiness. Designed test scenarios and detailed test cases, executed test cycles, reported defects with clear evidence, and verified fixes across releases.',
    tech: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Exploratory Testing',
      'UAT',
      'JIRA',
      'Test Case Design',
      'Defect Reporting',
    ],
    metrics: [
      { label: 'APPROACH', value: 'End-to-End QA' },
      { label: 'VALIDATION', value: 'Functional + Regression' },
      { label: 'OUTPUT', value: 'Defect Evidence' },
    ],
  },
  {
    number: '02',
    title: 'MOBILE APPLICATION TESTING',
    category: 'MOBILE / COMPATIBILITY TESTING',
    description:
      'Validated mobile application workflows across functional scenarios, usability expectations, compatibility conditions, edge cases, and regression cycles. Focused on critical user journeys, defect reproduction, retesting, and release confidence for reliable mobile experiences.',
    tech: [
      'Mobile Testing',
      'Functional Testing',
      'Regression Testing',
      'Usability Testing',
      'Compatibility Testing',
      'Exploratory Testing',
      'JIRA',
      'Bug Reporting',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'Mobile Applications' },
      { label: 'FOCUS', value: 'User Journey Quality' },
      { label: 'VALIDATION', value: 'Regression + Compatibility' },
    ],
  },
  {
    number: '03',
    title: 'E-COMMERCE / CUSTOMER JOURNEY QA',
    category: 'END-TO-END / USER EXPERIENCE TESTING',
    description:
      'Validated business-critical customer journeys from authentication and product discovery through cart, checkout, order processing, and confirmation. Covered positive and negative scenarios, boundary conditions, usability expectations, regression impact, and defect verification to protect the overall customer experience.',
    tech: [
      'End-to-End Testing',
      'Functional Testing',
      'Negative Testing',
      'Boundary Testing',
      'Regression Testing',
      'Usability Testing',
      'JIRA',
      'Defect Tracking',
    ],
    metrics: [
      { label: 'JOURNEY', value: 'Critical User Flows' },
      { label: 'FOCUS', value: 'Customer Experience' },
      { label: 'GOAL', value: 'Release Confidence' },
    ],
  },
  {
    number: '04',
    title: 'RELEASE & DEFECT MANAGEMENT',
    category: 'RELEASE VALIDATION / DEFECT LIFECYCLE',
    description:
      'Managed structured test execution and defect lifecycle activities from identification and documentation through retesting, regression confirmation, and release readiness assessment. Communicated severity, priority, evidence, open risks, and verification status to support informed quality decisions.',
    tech: [
      'Test Execution',
      'Defect Lifecycle',
      'Severity & Priority',
      'Retesting',
      'Regression Testing',
      'Release Validation',
      'JIRA',
      'QA Documentation',
    ],
    metrics: [
      { label: 'PROCESS', value: 'Defect Lifecycle' },
      { label: 'CONTROL', value: 'Risk + Regression' },
      { label: 'OUTCOME', value: 'Release Readiness' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="projects-section relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-28 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Section split line */}
      <div
        className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8C6D4F]/55 to-transparent" />
        </div>
      </div>

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
            02 / QA PROJECTS
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
              QA PROJECTS.
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
        <ScrollStack
          itemDistance={36}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="project-card relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-6 sm:p-8 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-visible transition-colors duration-500 hover:border-[#D4AF37]">
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="project-watermark absolute right-4 bottom-3 sm:right-6 sm:bottom-4 font-bold select-none pointer-events-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  aria-label={project.number}
                >
                  {project.number.split('').map((digit, index) => (
                    <span key={`${project.number}-${index}`} className="project-watermark-digit">
                      {digit}
                    </span>
                  ))}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="project-meta flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="project-card-title text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
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
                          className="project-metric p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
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
