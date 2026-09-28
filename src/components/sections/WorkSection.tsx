"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientCard from "@/components/ui/GradientCard";
import { GRADIENTS } from "@/lib/gradients";

const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  tags: string[];
  link?: string;
  page?: string;
  linkKind?: "github" | "play";
  main?: boolean;
}

const projects: Project[] = [
  {
    id: "delyo",
    title: "DelYo",
    tags: ["Flutter", "Dart", "Hive", "Provider"],
    link: "https://play.google.com/store/apps/details?id=com.delyo.delyo&hl=es_419",
    linkKind: "play",
    main: true,
  },
  {
    id: "cryptotracker",
    title: "CryptoTracker",
    tags: ["Kotlin", "Jetpack Compose", "Ktor", "Room", "Koin"],
    link: "https://github.com/Ivanmw97/CryptoTracker",
    linkKind: "github",
  },
  {
    id: "financialManager",
    title: "Financial Manager",
    tags: ["Vue 3", "TypeScript", "Vite", "Pinia", "Supabase"],
    link: "https://github.com/Ivanmw97/financial-manager",
    linkKind: "github",
  },
  {
    id: "kompkit",
    title: "KompKit",
    tags: ["TypeScript", "Kotlin", "Dart", "Monorepo"],
    link: "https://github.com/Kompkit/kompkit",
    page: "/kompkit",
    linkKind: "github",
  },
];

export default function WorkSection() {
  const { t } = useLang();
  const d = t.work;
  const info = (p: Project) => d.projects[p.id];
  const typeLabel = (p: Project) => (p.main ? `${d.mainProduct} · ${info(p).type}` : info(p).type);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const selectedProject = modalIndex === null ? null : projects[modalIndex];

  useEffect(() => {
    if (modalIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
      if (e.key === "ArrowLeft") setModalIndex((i) => (i === null ? i : (i - 1 + projects.length) % projects.length));
      if (e.key === "ArrowRight") setModalIndex((i) => (i === null ? i : (i + 1) % projects.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getNextIndex = () => (currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  const getPrevIndex = () => (currentIndex === 0 ? projects.length - 1 : currentIndex - 1);

  return (
    <section id="work" className="relative border-t border-neutral-200/70 py-20 md:py-28 px-6 md:px-12">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={d.eyebrow}
          title={d.title}
          subtitle={d.subtitle}
        />

        <Reveal delay={150}>
          <div className="relative flex items-center justify-center gap-4">
            {/* Previous Project Preview (Left - Blurred) */}
            <div 
              onClick={goToPrevious}
              className="hidden lg:block w-56 shrink-0 bg-neutral-50 rounded-2xl p-5 blur-[3px] opacity-60 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-400 mb-3">
                {typeLabel(projects[getPrevIndex()])}
              </span>
              <h3 className="text-lg font-bold text-neutral-400 mb-1 truncate">
                {projects[getPrevIndex()].title}
              </h3>
            </div>

            {/* Current Project Card */}
            <div 
              key={currentIndex}
              className="relative z-10 flex-1 max-w-2xl transition-all duration-500"
              style={{ animation: 'fadeIn 400ms ease-out' }}
            >
              {/* Decorative gradient accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full z-20 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-900" />
              
              {/* Navigation arrows on card edges */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center text-white transition-colors z-20 shadow-lg"
                aria-label={d.previous}
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center text-white transition-colors z-20 shadow-lg"
                aria-label={d.next}
              >
                <ChevronRightIcon />
              </button>

              <GradientCard gradient={GRADIENTS.brand} innerClassName="p-8 md:p-10 shadow-xl shadow-neutral-300/30 cursor-pointer">
                <div onClick={() => setModalIndex(currentIndex)} className="text-center px-2 md:px-8">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500 mb-4">
                    {typeLabel(projects[currentIndex])}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-3">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-neutral-500 text-lg leading-relaxed mb-6 max-w-lg mx-auto">
                    {info(projects[currentIndex]).short}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {projects[currentIndex].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-neutral-50 border border-neutral-100 text-neutral-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GradientCard>
            </div>

            {/* Next Project Preview (Right - Blurred) */}
            <div 
              onClick={goToNext}
              className="hidden lg:block w-56 shrink-0 bg-neutral-50 rounded-2xl p-5 blur-[3px] opacity-60 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-400 mb-3">
                {typeLabel(projects[getNextIndex()])}
              </span>
              <h3 className="text-lg font-bold text-neutral-400 mb-1 truncate">
                {projects[getNextIndex()].title}
              </h3>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-10" role="tablist" aria-label="Projects">
            {projects.map((project, i) => (
              <button
                key={project.title}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={project.title}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-neutral-900" : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setModalIndex(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalIndex((modalIndex! - 1 + projects.length) % projects.length);
            }}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-neutral-700 transition-colors z-50 shadow-lg"
            aria-label={d.previous}
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalIndex((modalIndex! + 1) % projects.length);
            }}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-neutral-700 transition-colors z-50 shadow-lg"
            aria-label={d.next}
          >
            <ChevronRightIcon />
          </button>
          
          {/* Modal */}
          <div 
            key={modalIndex}
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideInRight 300ms ease-out' }}
          >
            {/* Close button */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
              aria-label={d.closeModal}
            >
              <CloseIcon />
            </button>

            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500 mb-4">
                {typeLabel(selectedProject)}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-6">
                {selectedProject.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                {info(selectedProject).full}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 text-sm font-medium rounded-full bg-neutral-50 border border-neutral-100 text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action button */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.page && (
                  <Link
                    href={selectedProject.page}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-700 text-white rounded-full font-medium transition-colors"
                  >
                    {d.viewPage}
                  </Link>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                      selectedProject.page
                        ? "border border-neutral-300 text-neutral-900 hover:border-neutral-900"
                        : "bg-neutral-900 hover:bg-neutral-700 text-white"
                    }`}
                  >
                    {selectedProject.linkKind === "play" ? d.getOnPlay : d.viewOnGithub}
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
