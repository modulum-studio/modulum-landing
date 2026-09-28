import type { ReactNode } from "react";

interface GradientCardProps {
  gradient: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

const animated = (gradient: string) => ({
  backgroundImage: gradient,
  backgroundSize: "200% 200%",
  animation: "gradient-rotate 3s ease infinite",
});

export default function GradientCard({ gradient, children, className = "", innerClassName = "" }: GradientCardProps) {
  return (
    <div className={`relative group ${className}`}>
      <div
        aria-hidden
        className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={animated(gradient)}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={animated(gradient)}
      >
        <div className="w-full h-full bg-white rounded-2xl" />
      </div>
      <div
        className={`relative h-full bg-white rounded-2xl border border-neutral-100 group-hover:border-transparent transition-colors duration-500 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
