import type { ReactNode } from "react";

interface IconBadgeProps {
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export default function IconBadge({ children, active = false, className = "w-12 h-12" }: IconBadgeProps) {
  return (
    <span
      className={`shrink-0 rounded-xl flex items-center justify-center transition-colors duration-500 ${
        active
          ? "bg-neutral-900 text-white"
          : "bg-neutral-50 text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white"
      } ${className}`}
    >
      {children}
    </span>
  );
}
