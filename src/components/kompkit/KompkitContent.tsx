"use client";

import type { ReactNode } from "react";
import SubpageShell from "@/components/layout/SubpageShell";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientCard from "@/components/ui/GradientCard";
import IconBadge from "@/components/ui/IconBadge";
import { GRADIENTS } from "@/lib/gradients";
import { useLang } from "@/i18n/LanguageProvider";

const REPO = "https://github.com/Kompkit/KompKit";
const VERSION = "v0.4.0-alpha.0";
const section = "relative border-t border-neutral-200/70 py-20 md:py-28 px-6 md:px-12";

const Svg = ({ children }: { children: ReactNode }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);
const stroke = { stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const parityIcons = [
  <Svg key="names"><path d="M5 8h14M5 12h14M5 16h14" {...stroke} /></Svg>,
  <Svg key="behavior"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" {...stroke} /></Svg>,
  <Svg key="native"><circle cx="12" cy="12" r="3" {...stroke} /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" {...stroke} /></Svg>,
  <Svg key="switch"><path d="M4 8h13l-3-3M20 16H7l3 3" {...stroke} /></Svg>,
];

const roadIcons = [
  <Svg key="more"><path d="M4 5.5A1.5 1.5 0 015.5 4H20v16H5.5A1.5 1.5 0 014 18.5v-13zM4 18.5A1.5 1.5 0 015.5 17H20" {...stroke} /></Svg>,
  <Svg key="stable"><path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.4 2.4-2.6-.6-.6-2.6 2.6-2.2z" {...stroke} /></Svg>,
  <Svg key="platforms"><circle cx="12" cy="12" r="9" {...stroke} /><ellipse cx="12" cy="12" rx="3.5" ry="9" {...stroke} /><path d="M3 12h18" {...stroke} /></Svg>,
];

const utilities = [
  { name: "debounce", badge: "cancel()" },
  { name: "isEmail", badge: "→ boolean" },
  { name: "formatCurrency", badge: "→ string" },
  { name: "clamp", badge: "→ number" },
  { name: "throttle", badge: "cancel()" },
];

const ExternalIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.4 9.4 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.03 10.03 0 0022 12.25C22 6.58 17.52 2 12 2z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.4A8 8 0 1121 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-white border border-neutral-200 text-neutral-700">{children}</span>
);

const Status = ({ label, tone }: { label: string; tone: "ok" | "wip" }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600">
    <span className={`w-1.5 h-1.5 rounded-full ${tone === "ok" ? "bg-emerald-500" : "bg-amber-500"}`} />
    {label}
  </span>
);

const CodeBlock = ({ children, muted = false }: { children: ReactNode; muted?: boolean }) => (
  <div className="bg-neutral-900 rounded-xl px-4 py-3.5 overflow-x-auto">
    <code className={`font-mono text-sm break-all ${muted ? "text-neutral-500" : "text-neutral-100"}`}>{children}</code>
  </div>
);

export default function KompkitContent() {
  const { t } = useLang();
  const d = t.kompkit;

  const platforms = [
    {
      code: "TS",
      title: "Web",
      sub: d.start.webSub,
      install: "npm install kompkit-core",
      href: "https://www.npmjs.com/package/kompkit-core",
      cta: d.start.viewNpm,
      published: true,
    },
    {
      code: "DT",
      title: "Flutter",
      sub: d.start.flutterSub,
      install: `flutter pub add kompkit_core:^0.4.0-alpha.0`,
      href: "https://pub.dev/packages/kompkit_core",
      cta: d.start.viewPub,
      published: true,
    },
    {
      code: "KT",
      title: "Android",
      sub: d.start.androidSub,
      install: d.start.androidCode,
      published: false,
    },
  ];

  return (
    <SubpageShell
      footer={
        <>
          <p className="max-w-md text-center md:text-left">
            <strong className="text-neutral-700">{d.footer.notice}</strong> {d.footer.noticeText}
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-neutral-900 transition-colors">{d.footer.privacy}</a>
            <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
              {d.footer.license}
            </a>
          </div>
        </>
      }
    >
      <section className="px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-28 text-center">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium rounded-full bg-white border border-neutral-200 text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {VERSION}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-neutral-900 mb-6">KompKit</h1>
            <div className="w-16 h-1 rounded-full mx-auto mb-8" style={{ background: GRADIENTS.brand }} />
            <p className="text-2xl md:text-3xl text-neutral-700 font-light max-w-3xl mx-auto mb-4">{d.tagline}</p>
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">{d.sub}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Pill>TypeScript</Pill>
              <Pill>Kotlin</Pill>
              <Pill>Dart</Pill>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${section} bg-white/60`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title={d.parity.title} subtitle={d.parity.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.parity.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <GradientCard gradient={GRADIENTS.brand} className="h-full" innerClassName="p-6">
                  <IconBadge className="w-12 h-12 mb-5">{parityIcons[i]}</IconBadge>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-[15px] text-neutral-500 leading-relaxed">{item.text}</p>
                </GradientCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader title={d.utilities.title} subtitle={d.utilities.subtitle} />
          <div className="space-y-4">
            {utilities.map((u, i) => (
              <Reveal key={u.name} delay={i * 80}>
                <GradientCard gradient={GRADIENTS.brand} innerClassName="px-6 py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <code className="font-mono font-semibold text-lg text-neutral-900 md:w-44 shrink-0">{u.name}</code>
                  <p className="flex-1 text-[15px] text-neutral-500 leading-relaxed">{d.utilities.items[i].text}</p>
                  <span className="self-start md:self-auto shrink-0 px-2.5 py-1 bg-neutral-50 border border-neutral-100 text-neutral-600 text-xs rounded-md font-mono">
                    {u.badge}
                  </span>
                </GradientCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} bg-white/60`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title={d.start.title} subtitle={d.start.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <GradientCard gradient={GRADIENTS.brand} className="h-full" innerClassName="p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <IconBadge className="w-14 h-14 text-lg font-bold">{p.code}</IconBadge>
                    <Status tone={p.published ? "ok" : "wip"} label={p.published ? d.start.published : d.start.localOnly} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1">{p.title}</h3>
                  <p className="text-neutral-500 mb-6">{p.sub}</p>
                  <CodeBlock muted={!p.published}>{p.install}</CodeBlock>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
                    >
                      {p.cta}
                      <ExternalIcon />
                    </a>
                  ) : (
                    <p className="mt-6 text-sm text-neutral-500">{d.start.androidNote}</p>
                  )}
                </GradientCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-sm font-medium rounded-full bg-white border border-neutral-200 text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              {d.alpha.pill} · {VERSION}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">{d.alpha.title}</h2>
            <div className="w-12 h-1 rounded-full mx-auto mb-6" style={{ background: GRADIENTS.brand }} />
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-10">{d.alpha.text}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 transition-colors"
              >
                <GithubIcon />
                {d.alpha.source}
              </a>
              <a
                href={`${REPO}/discussions`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium border border-neutral-300 text-neutral-900 hover:border-neutral-900 transition-colors"
              >
                <ChatIcon />
                {d.alpha.feedback}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${section} bg-white/60`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title={d.road.title} subtitle={d.road.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.road.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <GradientCard gradient={GRADIENTS.brand} className="h-full" innerClassName="p-8 text-center flex flex-col items-center">
                  <IconBadge className="w-14 h-14 mb-5">{roadIcons[i]}</IconBadge>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-[15px] text-neutral-500 leading-relaxed">{item.text}</p>
                </GradientCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
