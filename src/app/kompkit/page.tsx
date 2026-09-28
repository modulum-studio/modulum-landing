import type { Metadata } from "next";
import KompkitContent from "@/components/kompkit/KompkitContent";

export const metadata: Metadata = {
  title: "KompKit — Cross-Platform Utility Library",
  description:
    "Cross-platform utility library with conceptual API parity for TypeScript, Kotlin, and Dart.",
  alternates: { canonical: "/kompkit" },
};

export default function KompkitPage() {
  return <KompkitContent />;
}
