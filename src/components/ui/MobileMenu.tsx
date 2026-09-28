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

const ChevronIcon = () => (
  <svg className="w-4 h-4 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MobileMenu({ links, cta, openLabel, closeLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
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

  const rowClass =
    "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 transition-colors";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        className="md:hidden relative w-10 h-10 -mr-2 rounded-full hover:bg-neutral-100 transition-colors"
      >
        <span
          className={`absolute left-1/2 top-1/2 w-5 h-[1.5px] -ml-2.5 rounded-full bg-neutral-900 transition-transform duration-300 ${
            open ? "rotate-45" : "-translate-y-[4px]"
          }`}
        />
        <span
          className={`absolute left-1/2 top-1/2 w-5 h-[1.5px] -ml-2.5 rounded-full bg-neutral-900 transition-transform duration-300 ${
            open ? "-rotate-45" : "translate-y-[4px]"
          }`}
        />
      </button>

      {open &&
        createPortal(
          <>
            <div
              aria-hidden
              onClick={close}
              className="md:hidden fixed inset-0 z-30 bg-neutral-900/10 backdrop-blur-[2px]"
              style={{ animation: "fadeIn 200ms ease-out" }}
            />
            <div
              role="dialog"
              aria-label={openLabel}
              className="md:hidden fixed left-4 right-4 top-[76px] z-40 rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl shadow-neutral-300/40"
              style={{ animation: "fadeInDown 220ms ease-out" }}
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {links.map((link) =>
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link key={link.href} href={link.href} onClick={(e) => navigate(e, link.href)} className={rowClass}>
                      {link.label}
                      <ChevronIcon />
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} onClick={(e) => navigate(e, link.href)} className={rowClass}>
                      {link.label}
                      <ChevronIcon />
                    </a>
                  )
                )}
              </nav>

              <div className="mt-2 pt-3 border-t border-neutral-100 flex items-center justify-between gap-3 px-2 pb-1">
                <LanguageSwitcher />
                {cta && (
                  <a
                    href={cta.href}
                    onClick={(e) => navigate(e, cta.href)}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
                  >
                    {cta.label}
                  </a>
                )}
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
