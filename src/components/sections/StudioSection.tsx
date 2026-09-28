"use client";

import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientCard from "@/components/ui/GradientCard";
import IconBadge from "@/components/ui/IconBadge";
import { GRADIENTS } from "@/lib/gradients";

const LocationIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.4A8 8 0 1121 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);


export default function StudioSection() {
  const { t } = useLang();
  const d = t.studio;
  return (
    <section id="studio" className="relative border-t border-neutral-200/70 bg-white/60 py-20 md:py-28 px-6 md:px-12">
      <div className="relative max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={d.eyebrow}
          title={d.title}
          subtitle={d.subtitle}
        />

        <Reveal delay={150} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GradientCard gradient={GRADIENTS.brand} className="lg:col-span-2" innerClassName="p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{d.greeting}</h3>
            <div className="space-y-4 text-neutral-600 leading-relaxed text-[15px] md:text-base">
              <p>{d.p1}</p>
              <p>{d.p2}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-auto pt-8">
              {d.principles.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="w-0.5 rounded-full shrink-0 bg-neutral-200" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{item.title}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </GradientCard>

          <div className="flex flex-col gap-6">
            <GradientCard gradient={GRADIENTS.brand} className="flex-1" innerClassName="p-6">
              <IconBadge active className="w-11 h-11 mb-4">
                <LocationIcon />
              </IconBadge>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{d.basedInTitle}</h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed">{d.basedIn}</p>
            </GradientCard>

            <GradientCard gradient={GRADIENTS.brand} className="flex-1" innerClassName="p-6">
              <IconBadge active className="w-11 h-11 mb-4">
                <ChatIcon />
              </IconBadge>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{d.chatTitle}</h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                {d.chatText}
              </p>
            </GradientCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
