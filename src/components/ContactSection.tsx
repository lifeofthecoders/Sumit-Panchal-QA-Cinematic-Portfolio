import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  // EmailJS configuration verified from your EmailJS dashboard.
  // These values are safe to use in browser-side code.
  const EMAILJS_SERVICE_ID = 'service_wfq49zq';
  const EMAILJS_TEMPLATE_ID = 'template_bo8cgqc';
  const EMAILJS_PUBLIC_KEY = '4NhEuzdFITMvcPJEw';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || sending) return;

    setSending(true);
    setError('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (err: unknown) {
      console.error('EmailJS submission failed:', err);

      const emailJSError = err as {
        status?: number;
        text?: string;
        message?: string;
      };

      let errorMessage = emailJSError?.text || emailJSError?.message;

      if (!errorMessage && emailJSError?.status) {
        errorMessage = `EmailJS returned error status ${emailJSError.status}.`;
      }

      if (!errorMessage) {
        try {
          errorMessage = JSON.stringify(err);
        } catch {
          errorMessage = '';
        }
      }

      setError(
        errorMessage
          ? `Email delivery failed: ${errorMessage}`
          : 'Email delivery failed. Please verify the EmailJS Service ID, Template ID, Public Key, and connected email service.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>

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
                  05 / CONTACT
                </span>

                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET&apos;S BUILD
                  </span>

                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    QUALITY.
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Looking for a detail-oriented QA professional to strengthen
                your product quality? Let&apos;s connect and discuss testing,
                release readiness, or your next product challenge.
              </p>

              {/* Direct Contact */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-10 pt-6 border-t border-[#8C6D4F]/20 max-w-md"
              >
                <span
                  className="block text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] mb-4"
                >
                  // DIRECT CONTACT
                </span>

                <div className="space-y-3">

                  {/* Email */}
                  <a
                    href="mailto:sumitpanchal5225@gmail.com"
                    className="group flex items-center gap-3 text-xs text-[#A8988B] hover:text-[#F7E7C4] transition-colors"
                  >
                    <span className="w-7 h-7 flex items-center justify-center border border-[#8C6D4F]/40 group-hover:border-[#D4AF37] bg-[#100D0B] transition-colors">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                        />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </span>

                    <span>
                      sumitpanchal5225@gmail.com
                    </span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+917359914454"
                    className="group flex items-center gap-3 text-xs text-[#A8988B] hover:text-[#F7E7C4] transition-colors"
                  >
                    <span className="w-7 h-7 flex items-center justify-center border border-[#8C6D4F]/40 group-hover:border-[#D4AF37] bg-[#100D0B] transition-colors">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>

                    <span>
                      +91 73599 14454
                    </span>
                  </a>

                </div>

                {/* Social Links */}
                <div className="mt-6">

                  <span
                    className="block text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] mb-3"
                  >
                    // CONNECT
                  </span>

                  <div className="flex items-center gap-3">

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/sumit-panchal-b790a8236"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn - Sumit Panchal"
                      className="group w-10 h-10 flex items-center justify-center border border-[#8C6D4F]/40 bg-[#100D0B] text-[#A8988B] hover:text-[#F7E7C4] hover:border-[#D4AF37] hover:bg-[#17130F] transition-all duration-300"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.57V8.99H3.56v11.46z" />
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/lifeofthecoders"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub - Life of the Coders"
                      className="group w-10 h-10 flex items-center justify-center border border-[#8C6D4F]/40 bg-[#100D0B] text-[#A8988B] hover:text-[#F7E7C4] hover:border-[#D4AF37] hover:bg-[#17130F] transition-all duration-300"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                      </svg>
                    </a>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >

            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">

                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm">
                  ✓
                </div>

                <h3
                  className="text-3xl text-white font-normal uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  MESSAGE TRANSMITTED
                </h3>

                <p
                  className="text-xs text-[#A8988B] font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Your message has been securely transmitted. Thank you for reaching out.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // NAME
                    </span>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // EMAIL
                    </span>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Your email"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // MESSAGE
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="How can I help with your QA requirement?"
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SEND MESSAGE ↗
                </button>

                {error && (
                  <p
                    className="text-[10px] text-red-300 font-light leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {error}
                  </p>
                )}

              </form>
            )}

          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">

          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            QA PORTFOLIO // EDITION 2026
          </span>

          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • TESTED WITH PRECISION
          </span>

        </div>

      </div>
    </footer>
  );
};

export default ContactSection;