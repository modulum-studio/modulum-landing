import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description =
  "Modulum Studio is Ivan Mendez's personal lab: software projects built out of curiosity, from mobile prototypes to product ideas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://modulumstudio.com"),
  title: "Modulum Studio — Software built out of curiosity",
  description,
  openGraph: {
    title: "Modulum Studio",
    description,
    type: "website",
    siteName: "Modulum Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulum Studio",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
