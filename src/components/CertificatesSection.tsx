import React, { useMemo, useState } from 'react';
import { certifications } from '../data/portfolio';

const categories = ['ALL', 'QUALITY ASSURANCE', 'TECHNICAL SKILLS', 'ACHIEVEMENTS'];

export const CertificatesSection: React.FC = () => {
  const [category, setCategory] = useState('ALL');
  const visible = useMemo(() => category === 'ALL' ? certifications : certifications.filter((item) => item.category === category), [category]);

  return (
    <section id="certifications" className="relative overflow-hidden bg-[#080706] px-6 py-20 text-[#E8DFD8] sm:px-12 lg:px-20 lg:py-28">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#D4AF37]/[.035] blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-4"><span className="text-[11px] uppercase tracking-[.35em] text-[#D4AF37]">05 / CERTIFICATIONS</span><span className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" /></div>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-5xl uppercase leading-[.85] sm:text-6xl md:text-7xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
            <span className="block bg-gradient-to-b from-white to-[#605448] bg-clip-text text-transparent">LEARNING.</span>
            <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent">PROVEN.</span>
          </h2>
          <p className="max-w-sm text-xs leading-relaxed text-[#A8988B]">Professional credentials and technical learning listed in the Portfolio Series reference archive.</p>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((item)=><button key={item} type="button" onClick={()=>setCategory(item)} aria-pressed={category===item} className={`border px-4 py-2 text-[9px] font-semibold uppercase tracking-[.16em] transition ${category===item?'border-[#D4AF37] bg-[#D4AF37] text-black':'border-[#8C6D4F]/40 text-[#C8BBAF] hover:border-[#D4AF37]/70 hover:text-[#F7E7C4]'}`}>{item==='ALL'?'All credentials':item}</button>)}
        </div>
        <p className="mb-5 text-[10px] uppercase tracking-[.18em] text-[#8C6D4F]">{visible.length} credentials displayed</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visible.map((certificate,index)=>(
            <a key={`${certificate.issuer}-${certificate.name}-${certificate.date}`} href={certificate.link} target="_blank" rel="noreferrer" className="group overflow-hidden border border-[#8C6D4F]/35 bg-[#100D0B] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/80 hover:shadow-[0_12px_35px_rgba(212,175,55,.1)]">
              <div className="flex aspect-[1.42/1] items-center justify-center overflow-hidden bg-[#171310] p-2">
                <img src={certificate.link} alt={`${certificate.name} certificate`} loading="lazy" className="max-h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]" />
              </div>
              <div className="border-t border-[#8C6D4F]/25 p-3 sm:p-4">
                <p className="line-clamp-2 min-h-[2.5rem] text-[11px] font-semibold leading-relaxed text-[#F3DBB3]">{certificate.name}</p>
                <p className="mt-1 line-clamp-1 text-[9px] text-[#A8988B]">{certificate.issuer}</p>
                <div className="mt-3 flex items-center justify-between gap-2"><span className="text-[8px] uppercase tracking-[.1em] text-[#8C6D4F]">{certificate.date}</span><span className="text-[10px] text-[#D4AF37]">↗</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CertificatesSection;
