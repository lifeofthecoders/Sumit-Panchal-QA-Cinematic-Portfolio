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
    <section className="hero-section relative w-full min-h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">

      {/* =========================================================
          1. CUSTOM CURSOR
      ========================================================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
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
          2. FIXED VIDEO BACKGROUND
      ========================================================= */}
      <div className="hero-media fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video h-full w-full object-cover md:h-screen md:w-auto md:max-w-none md:object-contain md:origin-right md:scale-95 lg:scale-100"
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Left edge blend */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

        {/* Watermark */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />

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
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          3. CONTENT LAYER
      ========================================================= */}
      <div className="hero-content-shell relative z-10 min-h-screen w-full px-6 sm:px-12 lg:px-16 pt-4 pb-8 pointer-events-none">

        {/* =======================================================
            4. NAVBAR
        ======================================================= */}
        <header className="hero-header relative z-[90] flex items-center w-full gap-3 sm:gap-6 pointer-events-auto">

          {/* Brand */}
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hero-brand shrink-0 text-[10px] sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            SUMIT PANCHAL
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hero-nav hidden md:flex items-center justify-center gap-6 lg:gap-8 xl:gap-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5]"
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
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Let's Talk */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hero-contact hidden md:flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span>LET&apos;S TALK</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#8C6D4F]/50 bg-[#120F0C]/70 text-[#EAD8C7] transition hover:border-[#D4AF37]"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>
        </header>

        {/* =======================================================
            5. MOBILE NAVIGATION RESERVED AREA

            IMPORTANT:
            This area ALWAYS occupies the same height.

            CLOSED:
            Empty / transparent space.

            OPEN:
            Same space contains the navigation menu.

            Therefore the Hero content NEVER moves.
        ======================================================= */}
        <div
          className="
            md:hidden
            relative
            w-full
            h-[235px]
            sm:h-[250px]
            mt-2
            pointer-events-auto
            z-[80]
          "
        >
          <div
            className={`
              absolute
              left-0
              right-0
              top-0
              h-full
              rounded
              border
              transition-all
              duration-300
              ${
                isMenuOpen
                  ? 'border-[#8C6D4F]/40 bg-[#120F0C]/95 backdrop-blur-sm shadow-[0_18px_40px_rgba(0,0,0,0.45)]'
                  : 'border-transparent bg-transparent'
              }
            `}
          >
            {/* Open Menu Content */}
            {isMenuOpen && (
              <nav
                className="w-full h-full"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <div className="flex h-full flex-col justify-start py-2 text-[10px] tracking-[0.24em] uppercase text-[#C4B5A5]">

                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        flex
                        items-center
                        min-h-[38px]
                        px-4
                        py-2.5
                        border-b
                        border-[#8C6D4F]/20
                        transition
                        hover:bg-[#1B1713]
                        hover:text-[#FFF5EB]
                      "
                    >
                      {item.name}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="
                      flex
                      items-center
                      min-h-[38px]
                      px-4
                      py-2.5
                      text-[#EAD8C7]
                      transition
                      hover:bg-[#1B1713]
                      hover:text-[#FFF5EB]
                    "
                  >
                    LET&apos;S TALK
                  </a>
                </div>
              </nav>
            )}
          </div>
        </div>

        {/* =======================================================
            6. MAIN HERO CONTENT

            STATIC IN BOTH STATES
        ======================================================= */}
        <div
          className="
            hero-main-row
            relative
            flex
            flex-col
            items-start
            justify-start
            w-full
            pt-0
            pb-6

            md:flex-row
            md:items-center
            md:justify-between
            md:gap-0
            md:pt-4
            md:pb-2
            md:mt-[18vh]
          "
        >

          {/* =====================================================
              LEFT HERO CONTENT
          ===================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              w-full
              max-w-sm
              sm:max-w-md
              md:max-w-lg
              lg:max-w-[37rem]
              xl:max-w-[40rem]
              pointer-events-auto
              z-20
            "
          >

            {/* Main Headline */}
            <motion.div
              variants={fadeUpVariants}
              className="relative mb-3.5 select-none"
            >
              <h1
                className="
                  text-[3.35rem]
                  leading-[0.82]
                  tracking-tight
                  uppercase

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
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I BUILD
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  QUALITY
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
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
                  text-[8px]
                  sm:text-[10px]
                  md:text-[11px]
                  lg:text-xs
                  font-normal
                  tracking-[0.20em]
                  sm:tracking-[0.28em]
                  uppercase
                  text-[#C4B29E]
                  whitespace-nowrap
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                MANUAL QA ANALYST
                <span className="text-[#8C6D4F] mx-1">•</span>
                TESTING ENTHUSIAST
                <span className="text-[#8C6D4F] mx-1">•</span>
                QUALITY DRIVEN
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUpVariants}
              className="
                text-[9px]
                sm:text-xs
                md:text-sm
                lg:text-[13.5px]
                font-light
                text-[#A8988B]
                leading-[1.65]
                sm:leading-[1.8]
                tracking-wide
                max-w-lg
                mb-4
                sm:mb-6
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

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="hero-actions flex flex-row items-center gap-2 sm:gap-4 md:gap-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {/* Explore My Work */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  sm:px-6
                  md:px-7
                  py-2.5
                  sm:py-3.5
                  border
                  border-[#8C6D4F]
                  bg-[#120F0C]/80
                  hover:border-[#D4AF37]
                  text-[#EAD8C7]
                  hover:text-[#FFF5EB]
                  text-[8px]
                  sm:text-[10px]
                  md:text-[11px]
                  font-medium
                  tracking-[0.18em]
                  sm:tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                  shadow-[0_0_25px_rgba(212,175,55,0.18)]
                "
              >
                <span>EXPLORE MY WORK</span>
                <span className="ml-2 text-xs">↗</span>
              </motion.a>

              {/* Download Resume */}
              <motion.a
                href={`${import.meta.env.BASE_URL}Sumit_Panchal_QA_Resume.pdf`}
                download="Sumit_Panchal_QA_Resume.pdf"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  sm:px-6
                  md:px-7
                  py-2.5
                  sm:py-3.5
                  border
                  border-[#8C6D4F]/40
                  hover:border-[#8C6D4F]
                  text-[#BFA895]
                  hover:text-[#EAD8C7]
                  text-[8px]
                  sm:text-[10px]
                  md:text-[11px]
                  font-medium
                  tracking-[0.18em]
                  sm:tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                "
              >
                <span>DOWNLOAD RESUME</span>
                <span className="ml-2 text-xs">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* =======================================================
            7. MOBILE QUOTE / SIGNATURE
            STATIC BOTTOM POSITION
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            left-6
            bottom-8
            sm:left-12
            sm:bottom-10
            z-20
            pointer-events-auto
            select-none
            md:hidden
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
              className="
                text-[8.5px]
                sm:text-[9.5px]
                font-medium
                tracking-[0.18em]
                sm:tracking-[0.24em]
                uppercase
                text-[#E0D3C5]
              "
              style={{
                lineHeight: 1.65,
              }}
            >
              <div className="flex items-baseline whitespace-nowrap">
                <span
                  className="
                    text-[16px]
                    sm:text-[18px]
                    text-[#C99E5D]
                    font-serif
                    leading-none
                    mr-1
                  "
                >
                  “
                </span>

                <span>QUALITY IS MY CRAFT.</span>
              </div>

              <div className="flex items-baseline whitespace-nowrap">
                <span>RELIABILITY IS MY GOAL.</span>

                <span
                  className="
                    text-[16px]
                    sm:text-[18px]
                    text-[#C99E5D]
                    font-serif
                    leading-none
                    ml-1
                  "
                >
                  ”
                </span>
              </div>
            </div>

            {/* Gold Line */}
            <div className="w-fit mt-2.5 sm:mt-3">
              <div
                className="
                  w-full
                  h-[1px]
                  mb-2
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#E8D7C5]/70
                  to-transparent
                  shadow-[0_0_8px_rgba(212,175,55,0.4)]
                "
                aria-hidden="true"
              />

              {/* Signature */}
              <div
                className="
                  text-[1.9rem]
                  sm:text-[2.2rem]
                  text-[#D8AB64]
                  font-normal
                  leading-none
                  whitespace-nowrap
                "
                style={{
                  fontFamily: "'Great Vibes', 'Allura', cursive",
                  letterSpacing: '0.04em',
                }}
              >
                Sumit Panchal
              </div>
            </div>

            {/* Job Role */}
            <div
              className="
                mt-1.5
                sm:mt-2
                text-[8.5px]
                sm:text-[9.5px]
                font-medium
                tracking-[0.18em]
                sm:tracking-[0.24em]
                uppercase
                text-[#E0D3C5]
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>QUALITY ANALYST.</p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            8. DESKTOP QUOTE / SIGNATURE
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
            hidden
            md:flex
            absolute
            right-16
            xl:right-24
            top-1/2
            -translate-y-1/2
            z-20
            flex-col
            items-start
            pointer-events-auto
            select-none
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
              className="
                text-[9.5px]
                font-medium
                tracking-[0.24em]
                uppercase
                text-[#E0D3C5]
              "
              style={{
                lineHeight: 1.7,
              }}
            >
              <div className="flex items-baseline whitespace-nowrap">
                <span
                  className="
                    text-[18px]
                    text-[#C99E5D]
                    font-serif
                    leading-none
                    mr-1
                  "
                >
                  “
                </span>

                <span>QUALITY IS MY CRAFT.</span>
              </div>

              <div className="flex items-baseline whitespace-nowrap">
                <span>RELIABILITY IS MY GOAL.</span>

                <span
                  className="
                    text-[18px]
                    text-[#C99E5D]
                    font-serif
                    leading-none
                    ml-1
                  "
                >
                  ”
                </span>
              </div>
            </div>

            {/* Gold Line */}
            <div className="w-fit mt-3">
              <div
                className="
                  w-full
                  h-[1px]
                  mb-2
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
                  text-[2.2rem]
                  text-[#D8AB64]
                  font-normal
                  leading-none
                  whitespace-nowrap
                "
                style={{
                  fontFamily: "'Great Vibes', 'Allura', cursive",
                  letterSpacing: '0.04em',
                }}
              >
                Sumit Panchal
              </div>
            </div>

            {/* Job Role */}
            <div
              className="
                mt-2
                text-[9.5px]
                font-medium
                tracking-[0.24em]
                uppercase
                text-[#E0D3C5]
              "
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
