"use client";

import { useLang } from "@/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="flex items-center text-xs font-medium border border-neutral-200 rounded-full p-0.5" role="group" aria-label={t.nav.langLabel}>
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 rounded-full uppercase transition-colors ${
            lang === l ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
