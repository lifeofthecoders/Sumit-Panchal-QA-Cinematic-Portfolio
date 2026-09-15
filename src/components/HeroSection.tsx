// src/components/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({
    x: -100,
    y: -100,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">

      {/* =========================================================
          CUSTOM CURSOR
      ========================================================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed left-0 top-0 z-[100] pointer-events-none rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered
              ? 'rgba(212, 175, 55, 0.1)'
              : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 350,
            mass: 0.5,
          }}
        />
      )}

      {/* =========================================================
          FIXED VIDEO BACKGROUND
      ========================================================= */}
      <div className="hero-media fixed inset-0 z-0 flex items-center justify-end overflow-hidden bg-black pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video h-full w-full object-cover md:h-screen md:w-auto md:max-w-none md:origin-right md:scale-95 md:object-contain lg:scale-100"
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Left edge blend */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent" />

        {/* Watermark */}
        <div className="absolute bottom-6 right-6 z-10 flex items-center justify-center lg:bottom-10 lg:right-12">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-36 w-36 rounded-full bg-black/85 blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Insignia"
                className="h-28 w-28 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)] lg:h-32 lg:w-32"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="hero-content-shell relative z-10 min-h-screen w-full px-4 pt-4 pb-8 sm:px-8 lg:px-16 pointer-events-none">

        {/* =======================================================
            NAVBAR
        ======================================================= */}
        <header className="hero-header relative z-[100] flex w-full items-center gap-3 sm:gap-6 pointer-events-auto">

          {/* Brand */}
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hero-brand shrink-0 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#EAD8C7] transition-opacity hover:opacity-75 sm:text-sm sm:tracking-[0.35em]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            SUMIT PANCHAL
          </a>

          {/* Desktop navigation */}
          <nav
            className="hero-nav hidden items-center justify-center gap-6 text-[11px] font-light uppercase tracking-[0.28em] text-[#C4B5A5] md:flex lg:gap-8 xl:gap-10"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Let's Talk */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hero-contact ml-auto hidden items-center space-x-2 border border-[#8C6D4F]/50 px-4 py-2 text-[11px] font-light uppercase tracking-[0.24em] text-[#EAD8C7] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37] md:flex"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span>LET&apos;S TALK</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#8C6D4F]/50 bg-[#120F0C]/70 text-[#EAD8C7] transition hover:border-[#D4AF37] md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>
        </header>

        {/* =======================================================
            MOBILE NAV SLOT

            THIS IS THE IMPORTANT PART.

            The slot ALWAYS exists.

            Closed:
              empty dark/transparent space

            Open:
              the menu fills the SAME space

            Therefore:
              Hero content NEVER MOVES.
        ======================================================= */}
        <div className="relative mt-3 h-[235px] w-full md:hidden sm:h-[250px]">

          {/* Closed-state empty space */}
          <div
            className={`
              absolute inset-0
              rounded
              border
              transition-all
              duration-300
              ${
                isMenuOpen
                  ? 'border-[#8C6D4F]/40 bg-[#120F0C]/95 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm'
                  : 'border-transparent bg-transparent'
              }
            `}
          >

            {/* Open navigation */}
            {isMenuOpen && (
              <nav
                className="h-full w-full"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <div className="flex h-full flex-col py-2 text-[10px] font-light uppercase tracking-[0.24em] text-[#C4B5A5]">

                  <a
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-[37px] items-center border-b border-[#8C6D4F]/20 px-4 transition hover:bg-[#1B1713] hover:text-[#FFF5EB]"
                  >
                    ABOUT
                  </a>

                  <a
                    href="#work"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-[37px] items-center border-b border-[#8C6D4F]/20 px-4 transition hover:bg-[#1B1713] hover:text-[#FFF5EB]"
                  >
                    PROJECTS
                  </a>

                  <a
                    href="#skills"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-[37px] items-center border-b border-[#8C6D4F]/20 px-4 transition hover:bg-[#1B1713] hover:text-[#FFF5EB]"
                  >
                    SKILLS
                  </a>

                  <a
                    href="#experience"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-[37px] items-center border-b border-[#8C6D4F]/20 px-4 transition hover:bg-[#1B1713] hover:text-[#FFF5EB]"
                  >
                    EXPERIENCE
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-[37px] items-center border-b border-[#8C6D4F]/20 px-4 transition hover:bg-[#1B1713] hover:text-[#FFF5EB]"
                  >
                    CONTACT
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-[37px] items-center px-4 text-[#EAD8C7] transition hover:bg-[#1B1713] hover:text-[#FFF5EB]"
                  >
                    LET&apos;S TALK
                  </a>

                </div>
              </nav>
            )}
          </div>
        </div>

        {/* =======================================================
            MAIN HERO CONTENT

            This starts AFTER the reserved mobile menu slot.
            It is identical whether menu is open or closed.
        ======================================================= */}
        <div
          className="
            hero-main-row
            relative
            flex
            w-full
            flex-col
            items-start
            justify-start
            pt-0
            pb-6

            md:mt-[18vh]
            md:flex-row
            md:items-center
            md:justify-between
            md:gap-0
            md:pt-4
            md:pb-2
          "
        >

          {/* =====================================================
              HERO LEFT
          ===================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-20 w-full max-w-sm pointer-events-auto sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem]"
          >

            {/* Headline */}
            <motion.div
              variants={fadeUpVariants}
              className="relative mb-3.5 mt-[80px] select-none md:-mt-[70px]"
            >
              <h1
                className="
                  text-[3.35rem]
                  uppercase
                  leading-[0.82]
                  tracking-tight

                  sm:text-6xl
                  sm:leading-[0.83]

                  md:text-8xl
                  lg:text-[7.2rem]
                  xl:text-[7.8rem]
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <span className="block bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I BUILD
                </span>

                <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  QUALITY
                </span>

                <span className="block bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  EXPERIENCES
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={fadeUpVariants}
              className="mb-3"
            >
              <p
                className="
                  whitespace-nowrap
                  text-[8px]
                  font-normal
                  uppercase
                  tracking-[0.20em]
                  text-[#C4B29E]

                  sm:text-[10px]
                  sm:tracking-[0.28em]

                  md:text-[11px]
                  lg:text-xs
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                MANUAL QA ANALYST
                <span className="mx-1 text-[#8C6D4F]">•</span>
                TESTING ENTHUSIAST
                <span className="mx-1 text-[#8C6D4F]">•</span>
                QUALITY DRIVEN
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUpVariants}
              className="
                mb-4
                max-w-lg
                text-[9px]
                font-light
                leading-[1.65]
                tracking-wide
                text-[#A8988B]

                sm:mb-6
                sm:text-xs
                sm:leading-[1.8]

                md:text-sm
                lg:text-[13.5px]
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                I turn complex requirements into seamless user experiences.
                <br />
                Where quality meets functionality, and testing transforms ideas into trusted products.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="hero-actions flex flex-row items-center gap-2 sm:gap-4 md:gap-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-[#8C6D4F]
                  bg-[#120F0C]/80
                  px-4
                  py-2.5
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#EAD8C7]
                  shadow-[0_0_25px_rgba(212,175,55,0.18)]
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]
                  hover:text-[#FFF5EB]

                  sm:px-6
                  sm:py-3.5
                  sm:text-[10px]
                  sm:tracking-[0.24em]

                  md:px-7
                  md:text-[11px]
                "
              >
                <span>EXPLORE MY WORK</span>
                <span className="ml-2 text-xs">↗</span>
              </motion.a>

              <motion.a
                href={`${import.meta.env.BASE_URL}Sumit_Panchal_QA_Resume.pdf`}
                download="Sumit_Panchal_QA_Resume.pdf"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-[#8C6D4F]/40
                  px-4
                  py-2.5
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#BFA895]
                  transition-all
                  duration-300
                  hover:border-[#8C6D4F]
                  hover:text-[#EAD8C7]

                  sm:px-6
                  sm:py-3.5
                  sm:text-[10px]
                  sm:tracking-[0.24em]

                  md:px-7
                  md:text-[11px]
                "
              >
                <span>DOWNLOAD RESUME</span>
                <span className="ml-2 text-xs">↓</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 select-none pointer-events-auto md:hidden"
            >
              <div
                className="flex flex-col items-start"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <div
                  className="
                    text-[8.5px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#E0D3C5]

                    sm:text-[9.5px]
                    sm:tracking-[0.24em]
                  "
                  style={{
                    lineHeight: 1.65,
                  }}
                >
                  <div className="flex items-baseline whitespace-nowrap">
                    <span className="mr-1 font-serif text-[16px] leading-none text-[#C99E5D] sm:text-[18px]">
                      “
                    </span>
                    <span>QUALITY IS MY CRAFT.</span>
                  </div>

                  <div className="flex items-baseline whitespace-nowrap">
                    <span>RELIABILITY IS MY GOAL.</span>
                    <span className="ml-1 font-serif text-[16px] leading-none text-[#C99E5D] sm:text-[18px]">
                      ”
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 w-fit sm:mt-3">
                  <div
                    className="
                      mb-2
                      h-[1px]
                      w-full
                      bg-gradient-to-r
                      from-[#D4AF37]
                      via-[#E8D7C5]/70
                      to-transparent
                      shadow-[0_0_8px_rgba(212,175,55,0.4)]
                    "
                    aria-hidden="true"
                  />

                  <div
                    className="
                      whitespace-nowrap
                      text-[1.9rem]
                      font-normal
                      leading-none
                      text-[#D8AB64]

                      sm:text-[2.2rem]
                    "
                    style={{
                      fontFamily: "'Great Vibes', 'Allura', cursive",
                      letterSpacing: '0.04em',
                    }}
                  >
                    Sumit Panchal
                  </div>
                </div>

                <div
                  className="
                    mt-1.5
                    text-[8.5px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#E0D3C5]

                    sm:mt-2
                    sm:text-[9.5px]
                    sm:tracking-[0.24em]
                  "
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <p>QUALITY ANALYST.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =======================================================
            DESKTOP QUOTE / SIGNATURE
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            right-16
            top-1/2
            z-20
            hidden
            -translate-y-1/2
            select-none
            flex-col
            items-start
            pointer-events-auto

            xl:right-24
            md:flex
          "
        >
          <div
            className="flex flex-col items-start"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {/* Quote */}
            <div
              className="text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#E0D3C5]"
              style={{
                lineHeight: 1.7,
              }}
            >
              <div className="flex items-baseline whitespace-nowrap">
                <span
                  className="mr-1 font-serif text-[18px] leading-none text-[#C99E5D]"
                >
                  “
                </span>

                <span>QUALITY IS MY CRAFT.</span>
              </div>

              <div className="flex items-baseline whitespace-nowrap">
                <span>RELIABILITY IS MY GOAL.</span>

                <span
                  className="ml-1 font-serif text-[18px] leading-none text-[#C99E5D]"
                >
                  ”
                </span>
              </div>
            </div>

            {/* Gold line + signature */}
            <div className="mt-3 w-fit">
              <div
                className="
                  mb-2
                  h-[1px]
                  w-full
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#E8D7C5]/70
                  to-transparent
                  shadow-[0_0_8px_rgba(212,175,55,0.4)]
                "
                aria-hidden="true"
              />

              <div
                className="whitespace-nowrap text-[2.2rem] font-normal leading-none text-[#D8AB64]"
                style={{
                  fontFamily: "'Great Vibes', 'Allura', cursive",
                  letterSpacing: '0.04em',
                }}
              >
                Sumit Panchal
              </div>
            </div>

            {/* Job role */}
            <div
              className="mt-2 text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#E0D3C5]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>QUALITY ANALYST.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;