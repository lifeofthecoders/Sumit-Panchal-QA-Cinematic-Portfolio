// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'JUN 2021 - CURRENT',
    title: 'QUALITY ASSURANCE ANALYST',
    organization: 'ECHO INNOVATE IT',
    description:
      'Leading manual QA for mobile applications through comprehensive functional, regression, usability, and end-to-end testing. Design and execute test plans, test cases, and test scripts while collaborating with developers, designers, and product managers to identify risks and deliver stable releases.',
  },
  {
    id: '02',
    year: 'QA IMPACT',
    title: 'QUALITY & RELEASE IMPACT',
    organization: 'ECHO INNOVATE IT',
    description:
      'Achieved 40% reduction in post-production defects through an improved regression strategy, maintained 99% release stability across multiple deployments, prevented 50+ critical and high-severity production issues, and supported client UAT and production release sign-off.',
  },
  {
    id: '03',
    year: 'JAN - MAY 2021',
    title: 'QUALITY ASSURANCE TRAINEE',
    organization: 'MAKEIN TECHNOLOGIES',
    description:
      'Built hands-on experience in manual and automation testing using Selenium IDE, Selenium WebDriver, and TestNG. Prepared test cases and bug reports while performing functional, integration, system, regression, black-box, and usability testing for live applications.',
  },
  {
    id: '04',
    year: 'MULTI-DOMAIN QA',
    title: 'QA PROJECT DOMAINS',
    organization: 'MOBILE • WEB • REAL-WORLD PRODUCTS',
    description:
      'Tested diverse digital products across taxi booking, professional networking, photo-book e-commerce, multiplayer gaming, and community sustainability platforms, adapting QA coverage to different user journeys, business rules, and product risks.',
  },
  {
    id: '05',
    year: 'CONTINUOUS GROWTH',
    title: 'QUALITY-DRIVEN ENGINEERING',
    organization: 'QA • ANALYSIS • COLLABORATION',
    description:
      'Developed a detail-oriented and analytical approach to quality assurance with a focus on identifying risks before production, maintaining strong test coverage, communicating defects clearly, and collaborating effectively with developers, product managers, and cross-functional teams.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
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

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />

                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>
                  
                  <span 
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;