"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import StudioSection from "@/components/sections/StudioSection";
import WorkSection from "@/components/sections/WorkSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ContactSection from "@/components/sections/ContactSection";
import PageBackdrop from "@/components/ui/PageBackdrop";
import { useLang } from "@/i18n/LanguageProvider";

const MainHeader = dynamic(() => import("@/components/header/MainHeader"), {
  ssr: false,
});

export default function Home() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const currentYear = new Date().getFullYear();
  const { t } = useLang();

  return (
    <>
      <PageBackdrop visible={isIntroFinished} />
      {isIntroFinished && <MainHeader />}
      <main className="min-h-screen">
        <Hero onIntroFinish={() => setIsIntroFinished(true)} isIntroFinished={isIntroFinished} />
        <div className={isIntroFinished ? "animate-[fadeIn_800ms_ease-out]" : "hidden"}>
          <StudioSection />
          <WorkSection />
          <ExpertiseSection />
          <ContactSection />

          <footer className="border-t border-neutral-200 py-10">
            <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-neutral-500">
              <p>© {currentYear} Modulum Studio</p>
              <p className="text-xs tracking-wide">{t.footer.made}</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
