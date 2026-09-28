"use client";

import { FormEvent, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import GradientCard from "@/components/ui/GradientCard";
import IconBadge from "@/components/ui/IconBadge";
import { GRADIENTS } from "@/lib/gradients";

const EMAIL = "info@modulumstudio.com";
const GITHUB = "https://github.com/modulum-studio";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const MailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.4 9.4 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.03 10.03 0 0022 12.25C22 6.58 17.52 2 12 2z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const fieldClass =
  "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all";
const labelClass = "block text-sm font-medium mb-2 text-neutral-700";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const { t } = useLang();
  const d = t.contact;
  const [topic, setTopic] = useState("Just saying hi");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) {
      setStatus("sent");
      return;
    }
    if (!ACCESS_KEY) {
      setError(`${d.notReady} ${EMAIL}.`);
      setStatus("error");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[${topic}] ${name} via modulumstudio.com`,
          from_name: "Modulum Studio",
          name,
          email: data.get("email"),
          topic,
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message ?? "Something went wrong.");
      form.reset();
      setTopic("Just saying hi");
      setStatus("sent");
    } catch {
      setError(`${d.errorSend} ${EMAIL}.`);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative border-t border-neutral-200/70 py-20 md:py-28 px-6 md:px-12">
      <div className="relative max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={d.eyebrow}
          title={d.title}
          subtitle={d.subtitle}
        />

        <Reveal delay={150} className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <GradientCard gradient={GRADIENTS.brand} innerClassName="p-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-xl">
                <IconBadge className="w-11 h-11">
                  <MailIcon />
                </IconBadge>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-widest text-neutral-400">{d.email}</span>
                  <span className="block truncate text-neutral-900">{EMAIL}</span>
                </span>
              </a>
            </GradientCard>
            <GradientCard gradient={GRADIENTS.brand} innerClassName="p-4">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl">
                <IconBadge className="w-11 h-11">
                  <GithubIcon />
                </IconBadge>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-widest text-neutral-400">{d.github}</span>
                  <span className="block text-neutral-900">modulum-studio</span>
                </span>
              </a>
            </GradientCard>
            <p className="text-sm text-neutral-500 leading-relaxed px-1 mt-3">
              {d.note}
            </p>
          </div>

          <div className="lg:col-span-3 relative overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xl shadow-neutral-300/30 p-6 md:p-8 min-h-[26rem] flex">
            {status === "sent" ? (
              <div
                className="m-auto text-center max-w-sm"
                style={{ animation: "fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) both" }}
                role="status"
              >
                <div className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto mb-5">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">{d.sentTitle}</h3>
                <p className="text-neutral-500 mb-6">{d.sentText}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900 transition-colors"
                >
                  {d.sentAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>{d.name}</label>
                    <input type="text" id="name" name="name" required maxLength={100} autoComplete="name" className={fieldClass} placeholder={d.namePh} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>{d.emailLabel}</label>
                    <input type="email" id="email" name="email" required maxLength={200} autoComplete="email" className={fieldClass} placeholder={d.emailPh} />
                  </div>
                </div>

                <fieldset>
                  <legend className={labelClass}>{d.topicLegend}</legend>
                  <div className="flex flex-wrap gap-2">
                    {d.topics.map((tp) => (
                      <button
                        key={tp.id}
                        type="button"
                        aria-pressed={topic === tp.id}
                        onClick={() => setTopic(tp.id)}
                        className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                          topic === tp.id
                            ? "bg-neutral-900 text-white border-neutral-900"
                            : "border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                        }`}
                      >
                        {tp.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className={labelClass}>{d.message}</label>
                  <textarea id="message" name="message" rows={5} required minLength={5} maxLength={5000} className={`${fieldClass} resize-none`} placeholder={d.messagePh} />
                </div>

                <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="botcheck">Leave this empty</label>
                  <input type="checkbox" id="botcheck" name="botcheck" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                  <p className={`text-sm ${status === "error" ? "text-red-500" : "text-neutral-500"}`} role="status" aria-live="polite">
                    {status === "error" ? error : d.hint}
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === "sending" ? d.sending : d.send}
                    {status !== "sending" && <SendIcon />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
