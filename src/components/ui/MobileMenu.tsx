"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  cta?: { href: string; label: string };
  openLabel: string;
  closeLabel: string;
}

const ArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MobileMenu({ links, cta, openLabel, closeLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const navigate = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
    const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
    close();
    if (hash && (path === "" || path === window.location.pathname)) {
      e.preventDefault();
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", hash);
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        aria-expanded={open}
        className="md:hidden w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-neutral-100 transition-colors"
      >
        <span className="w-5 h-0.5 rounded-full bg-neutral-900" />
        <span className="w-5 h-0.5 rounded-full bg-neutral-900" />
        <span className="w-5 h-0.5 rounded-full bg-neutral-900" />
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={openLabel}
            className="md:hidden fixed inset-0 z-50 bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center px-6"
            style={{ animation: "fadeIn 250ms ease-out" }}
          >
            <button
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-900 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <nav className="w-full max-w-sm flex flex-col items-center gap-2" aria-label="Mobile">
              {links.map((link, i) => {
                const cls =
                  "w-full text-center text-3xl font-bold tracking-tight text-neutral-900 py-3 rounded-2xl hover:bg-neutral-100 transition-colors opacity-0";
                const style = { animation: `fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) ${80 + i * 60}ms forwards` };
                return link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link key={link.href} href={link.href} onClick={(e) => navigate(e, link.href)} className={cls} style={style}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} onClick={(e) => navigate(e, link.href)} className={cls} style={style}>
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div
              className="mt-8 opacity-0"
              style={{ animation: `fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) ${80 + links.length * 60}ms forwards` }}
            >
              <LanguageSwitcher />
            </div>

            {cta && (
              <a
                href={cta.href}
                onClick={(e) => navigate(e, cta.href)}
                className="mt-8 w-full max-w-sm inline-flex items-center justify-center gap-2 py-4 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-700 transition-colors opacity-0"
                style={{ animation: `fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) ${140 + links.length * 60}ms forwards` }}
              >
                {cta.label}
                <ArrowIcon />
              </a>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
