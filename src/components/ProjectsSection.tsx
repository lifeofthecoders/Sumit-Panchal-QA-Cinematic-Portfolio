import React from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);
  const returnToProjects = () => {
    setActiveProject(null);
    window.setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  if (activeProject) {
    const images = activeProject.gallery;

    return (
      <section id="project-details" className="fixed inset-0 z-[200] h-[100dvh] w-full overflow-y-auto overscroll-contain bg-black px-5 py-8 text-[#E8DFD8] sm:px-10 lg:px-16 lg:py-10">
        <div className="pointer-events-none absolute -left-40 top-40 h-[34rem] w-[34rem] rounded-full bg-[#D4AF37]/[.045] blur-[170px]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.button type="button" onClick={returnToProjects}
            initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} whileHover={{x:-4}}
            className="mb-8 inline-flex items-center gap-3 border border-[#D4AF37]/55 bg-[#100D0B] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#F3DBB3] transition hover:bg-[#D4AF37] hover:text-black">
            <span aria-hidden className="text-lg leading-none">←</span> Back to projects
          </motion.button>

          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
            <div className="group relative flex min-h-[220px] items-center justify-center overflow-hidden border border-[#8C6D4F]/45 bg-[#090807]">
              <img
                src={activeProject.bannerImage}
                alt={`${activeProject.title} banner`}
                className={activeProject.id === 'lymuv' || activeProject.id === 'dap-me'
                  ? 'block h-auto w-full object-contain object-center'
                  : 'block h-auto max-h-[72vh] w-full object-contain object-center'}
              />
              <a href={activeProject.bannerImage} target="_blank" rel="noreferrer" aria-label={`Open full-size ${activeProject.title} banner in a new tab`}
                className="project-image-open absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/45 bg-black/70 text-xl text-white opacity-0 transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black focus:opacity-100 group-hover:opacity-100">
                ↗
              </a>
            </div>
            <div className="pb-8 pt-7 sm:pb-10 sm:pt-9">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.3em] text-[#D4AF37]">{activeProject.genre}</p>
              <h1 className="max-w-5xl text-4xl uppercase leading-[.9] text-[#F7E7C4] sm:text-6xl lg:text-7xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>{activeProject.title}</h1>
              <p className="mt-5 max-w-4xl text-sm leading-[1.9] text-[#BDB0A4] sm:text-base">{activeProject.logline}</p>
            </div>
          </motion.div>

          <div className="grid gap-10 border-t border-[#8C6D4F]/35 py-9">
            <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65}}>
              <SectionTitle>Project overview</SectionTitle>
              <p className="text-sm leading-[1.95] text-[#C8BBAF]">{activeProject.overview}</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Meta label="QA role" value={activeProject.role}/>
                <Meta label="Platforms" value={activeProject.platforms.join(' · ')}/>
              </div>
              <div className="mt-9">
                <SectionTitle>Testing coverage</SectionTitle>
                <div className="flex flex-wrap gap-2">{activeProject.testingAreas.map((item)=><span key={item} className="border border-[#8C6D4F]/40 bg-[#100D0B] px-3 py-2 text-[10px] text-[#E8D7C5]">{item}</span>)}</div>
              </div>
              <div className="mt-10">
                <SectionTitle>Project gallery</SectionTitle>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {images.map((item,index)=>(
                    <figure key={item.src} className="group relative overflow-hidden border border-[#8C6D4F]/40 bg-[#100D0B]">
                      <img src={item.src} alt={item.alt} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.025]"/>
                      <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image ${index+1} for ${activeProject.title} in a new tab`}
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border border-white/50 bg-black/75 text-xl text-white opacity-0 transition duration-300 group-hover:opacity-100 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black focus:opacity-100">
                        ↗
                      </a>
                      <figcaption className="border-t border-[#8C6D4F]/25 px-4 py-3 text-[10px] leading-relaxed text-[#A8988B]">{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <SectionTitle>QA activities</SectionTitle>
                <ul className="space-y-3">{activeProject.build.map((item,i)=><li key={i} className="flex gap-3 text-xs leading-[1.85] text-[#BDB0A4]"><span className="mt-1 text-[10px] text-[#D4AF37]">✦</span><span>{item}</span></li>)}</ul>
              </div>
              <div className="mt-10">
                <SectionTitle>Product capabilities</SectionTitle>
                <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">{activeProject.features.map((item,i)=><li key={i} className="flex gap-3 border-b border-white/[.07] pb-3 text-xs leading-[1.8] text-[#C8BBAF]"><span className="text-[#D4AF37]">{String(i+1).padStart(2,'0')}</span><span>{item}</span></li>)}</ul>
              </div>
              {activeProject.externalLinks?.length ? <div className="mt-9 flex flex-wrap items-start gap-3">{activeProject.externalLinks.map((link)=><a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-3 border border-[#D4AF37]/55 bg-[#171310] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.16em] text-[#F3DBB3] transition hover:bg-[#D4AF37] hover:text-black">{link.label}<span aria-hidden>↗</span></a>)}</div> : null}
            </motion.div>
          </div>
          <div className="border-t border-[#8C6D4F]/35 pt-7">
            <button type="button" onClick={returnToProjects} className="inline-flex min-h-11 items-center gap-3 border border-[#D4AF37]/55 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#F3DBB3] transition hover:bg-[#D4AF37] hover:text-black">← Back to projects</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="projects-section relative w-full overflow-hidden bg-black px-6 py-20 text-[#E8DFD8] sm:px-12 lg:px-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[36rem] w-[36rem] rounded-full bg-[#D4AF37]/[0.045] blur-[180px]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}>
          <div className="mb-5 flex items-center gap-4"><span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4AF37]">02 / QA PROJECTS</span><span className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" /></div>
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-5xl uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
              <span className="block bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] bg-clip-text text-transparent">QA PROJECTS.</span>
              <span className="block bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] bg-clip-text text-transparent">QUALITY DELIVERED.</span>
            </h2>
            <p className="max-w-sm text-xs leading-relaxed text-[#A8988B] sm:text-sm">Explore eight project case studies, including product context, platforms, testing coverage, and visual evidence.</p>
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project,index)=>(
            <motion.article key={project.id} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.7,delay:index*.045}} whileHover={{y:-5}}
              className="group relative overflow-hidden border border-[#8C6D4F]/40 bg-[#100D0B] transition duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_18px_55px_rgba(212,175,55,.09)]">
              <div className="absolute left-0 right-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
              <div className="relative aspect-[16/8.4] overflow-hidden bg-[#090807]">
                <img src={project.bannerImage} alt={`${project.title} project banner`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100D0B] via-black/10 to-transparent" />
                <span className="absolute left-5 top-5 border border-[#D4AF37]/50 bg-black/55 px-3 py-1 text-[10px] tracking-[.22em] text-[#F3DBB3]">{String(index+1).padStart(2,'0')} / CASE STUDY</span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-3 text-[9px] font-medium uppercase tracking-[.24em] text-[#C99E5D]">{project.genre}</p>
                <h3 className="mb-3 text-3xl uppercase leading-[.95] text-[#F7E7C4] sm:text-4xl" style={{fontFamily:"'Bebas Neue', sans-serif"}}>{project.title}</h3>
                <p className="mb-6 line-clamp-3 text-xs leading-[1.85] text-[#BDB0A4] sm:text-[13px]">{project.logline}</p>
                <div className="mb-6 flex flex-wrap gap-2">{project.platforms.map((platform)=><span key={platform} className="border border-[#8C6D4F]/35 bg-[#171310] px-2.5 py-1 text-[9px] uppercase tracking-[.12em] text-[#D8C7B6]">{platform}</span>)}</div>
                <button type="button" onClick={()=>setActiveProject(project)} className="inline-flex min-h-11 items-center gap-3 border border-[#D4AF37]/55 px-5 text-[10px] font-semibold uppercase tracking-[.2em] text-[#F3DBB3] transition hover:bg-[#D4AF37] hover:text-black">Explore case study <span aria-hidden>↗</span></button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

function Meta({label,value}:{label:string;value:string}) {
  return <div className="border-l border-[#D4AF37]/60 pl-4"><p className="text-[9px] uppercase tracking-[.2em] text-[#A8988B]">{label}</p><p className="mt-1 text-sm text-[#F3DBB3]">{value}</p></div>;
}
function SectionTitle({children}:{children:React.ReactNode}) {
  return <h4 className="mb-4 border-b border-[#8C6D4F]/35 pb-2 text-[10px] font-bold uppercase tracking-[.25em] text-[#D4AF37]">{children}</h4>;
}
export default ProjectsSection;
