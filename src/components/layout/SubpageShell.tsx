"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import PageBackdrop from "@/components/ui/PageBackdrop";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLang } from "@/i18n/LanguageProvider";

export default function SubpageShell({ children, footer }: { children: ReactNode; footer?: ReactNode }) {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <>
      <PageBackdrop visible />
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-neutral-200">
        <div className="flex w-full items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Modulum Studio" className="flex items-center gap-3 group mr-2">
            <span className="w-6 h-6 bg-neutral-900 rounded-full transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline text-sm font-medium text-neutral-900">Modulum Studio</span>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main">
            <Link href="/" className="text-sm text-neutral-900 hover:text-neutral-500 transition-colors">
              {t.nav.home}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      <main className="pt-16">{children}</main>
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          {footer ?? <p>© {year} Modulum Studio</p>}
        </div>
      </footer>
    </>
  );
}
