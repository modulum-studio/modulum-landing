"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MobileMenu from "@/components/ui/MobileMenu";


export default function MainHeader() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLang();
  const links = [
    { href: "#studio", label: t.nav.studio },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const heroTitle = document.querySelector("h1");
    const observer = new IntersectionObserver(([entry]) => setIsHeroVisible(entry.isIntersecting), {
      threshold: 0.1,
      rootMargin: "-80px 0px 0px 0px",
    });
    if (heroTitle) observer.observe(heroTitle);

    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b transition-colors duration-300 ${
        isScrolled ? "border-neutral-200" : "border-transparent"
      }`}
      style={{ animation: "fadeInDown 600ms ease-out both" }}
    >
      <div className="flex w-full items-center justify-between px-6 py-4">
        <a href="#top" aria-label="Back to top" className="flex items-center gap-3 group mr-2">
          <span className="w-6 h-6 bg-neutral-900 rounded-full transition-transform duration-300 group-hover:scale-110" />
          {!isHeroVisible && (
            <span className="text-sm font-medium text-neutral-900 opacity-0 animate-[fadeIn_600ms_ease-out_forwards]">
              Modulum Studio
            </span>
          )}
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        <MobileMenu
          links={links.filter((l) => l.href !== "#contact")}
          cta={{ href: "#contact", label: t.nav.contact }}
          openLabel={t.nav.openMenu}
          closeLabel={t.nav.closeMenu}
        />
      </div>
    </header>
  );
}
