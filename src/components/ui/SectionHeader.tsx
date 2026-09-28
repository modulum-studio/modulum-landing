import Reveal from "./Reveal";
import { GRADIENTS } from "@/lib/gradients";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <Reveal className="text-center mb-12 md:mb-16">
      {eyebrow && <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">{eyebrow}</p>}
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-5">{title}</h2>
      <div className="w-12 h-1 rounded-full mx-auto mb-5" style={{ background: GRADIENTS.brand }} />
      {subtitle && <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}
