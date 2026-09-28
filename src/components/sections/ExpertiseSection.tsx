"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientCard from "@/components/ui/GradientCard";
import IconBadge from "@/components/ui/IconBadge";
import { GRADIENTS } from "@/lib/gradients";

const PhoneIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

const WebIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const areas = [
  {
    icon: <PhoneIcon />,
    tools: ["Kotlin", "Jetpack Compose", "Swift", "Flutter"],
  },
  {
    icon: <WebIcon />,
    tools: ["Next.js", "Astro", "Vue 3", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: <DatabaseIcon />,
    tools: ["Supabase", "PostgreSQL", "Ktor", "APIs"],
  },
];

export default function ExpertiseSection() {
  const { t } = useLang();
  const d = t.stack;
  return (
    <section id="stack" className="relative border-t border-neutral-200/70 bg-white/60 py-20 md:py-28 px-6 md:px-12">
      <div className="relative max-w-5xl mx-auto">
        <SectionHeader eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((item, index) => (
            <Reveal key={d.areas[index].title} delay={index * 100}>
              <GradientCard gradient={GRADIENTS.brand} className="h-full" innerClassName="p-8 flex flex-col">
                <IconBadge className="w-14 h-14 mb-6">
                  {item.icon}
                </IconBadge>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{d.areas[index].title}</h3>
                <p className="text-neutral-500 leading-relaxed text-[15px] mb-6">{d.areas[index].description}</p>
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {item.tools.map((tool) => (
                    <li key={tool} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-50 border border-neutral-100 text-neutral-700">
                      {tool}
                    </li>
                  ))}
                </ul>
              </GradientCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-12 text-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">{d.curiousTitle}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {d.curiosities.map((item) => (
              <span key={item} className="px-4 py-1.5 text-sm rounded-full border border-dashed border-neutral-300 text-neutral-600 bg-white">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
