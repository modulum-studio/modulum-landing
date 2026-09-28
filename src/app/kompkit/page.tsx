import type { Metadata } from "next";
import KompkitContent from "@/components/kompkit/KompkitContent";

const title = "KompKit — Cross-Platform Utility Library";
const description =
  "Cross-platform utility library with conceptual API parity for TypeScript, Kotlin, and Dart. Same functions, same behavior, adapted to each platform.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["KompKit", "utility library", "TypeScript", "Kotlin", "Dart", "Flutter", "cross-platform", "debounce", "throttle"],
  alternates: { canonical: "/kompkit" },
  openGraph: { title, description, url: "/kompkit", type: "website", siteName: "Modulum Studio" },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "KompKit",
  description,
  codeRepository: "https://github.com/Kompkit/KompKit",
  programmingLanguage: ["TypeScript", "Kotlin", "Dart"],
  license: "https://github.com/Kompkit/KompKit/blob/main/LICENSE",
  version: "0.4.0-alpha.0",
  url: "https://modulumstudio.com/kompkit",
  author: { "@type": "Organization", name: "Modulum Studio", url: "https://modulumstudio.com" },
};

export default function KompkitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KompkitContent />
    </>
  );
}
