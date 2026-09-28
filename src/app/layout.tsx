import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://modulumstudio.com";
const title = "Modulum Studio — Software built out of curiosity";
const description =
  "Modulum Studio is Ivan Mendez's personal lab: software projects built out of curiosity, from mobile prototypes to product ideas. Kotlin, Flutter, Swift, Next.js and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Modulum Studio" },
  description,
  applicationName: "Modulum Studio",
  keywords: [
    "Modulum Studio",
    "Ivan Mendez",
    "software studio",
    "mobile development",
    "Android",
    "Kotlin",
    "Flutter",
    "Swift",
    "Next.js",
    "DelYo",
    "KompKit",
    "Canary Islands",
  ],
  authors: [{ name: "Ivan Mendez", url: "https://ivanmendez.dev" }],
  creator: "Ivan Mendez",
  publisher: "Modulum Studio",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Modulum Studio",
    description,
    url: SITE_URL,
    type: "website",
    siteName: "Modulum Studio",
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulum Studio",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Modulum Studio",
      url: SITE_URL,
      logo: `${SITE_URL}/apple-icon`,
      email: "info@modulumstudio.com",
      founder: { "@id": `${SITE_URL}/#ivan` },
      sameAs: ["https://github.com/modulum-studio"],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#ivan`,
      name: "Ivan Mendez",
      jobTitle: "Founder",
      url: "https://ivanmendez.dev",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      address: { "@type": "PostalAddress", addressRegion: "Canary Islands", addressCountry: "ES" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Modulum Studio",
      description,
      inLanguage: ["en", "es"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      name: "DelYo",
      operatingSystem: "Android",
      applicationCategory: "SportsApplication",
      url: "https://play.google.com/store/apps/details?id=com.delyo.delyo",
      author: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
