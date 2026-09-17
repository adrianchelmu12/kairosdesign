import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

export const viewport: Viewport = {
  themeColor: "#1f2421",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kairosdesign.ro"),
  title: {
    default: "Kairos — Agenție de Web Design, Branding & Web Development",
    template: "%s | Kairos",
  },
  description:
    "Transformăm viziuni ambițioase în experiențe digitale memorabile. Web design avansat, branding strategic și dezvoltare web ultra-performantă.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Kairos",
    "Web Design",
    "Branding",
    "Web Development",
    "Agentie Digitala",
    "Next.js",
    "Design Modern",
    "Agentie Web Iasi",
    "Dezvoltare Web Romania",
  ],
  authors: [{ name: "Kairos Design", url: "https://kairosdesign.ro" }],
  creator: "Kairos Design",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kairos — Web Design, Branding & Web Development",
    description:
      "Creativitate fără compromis și inginerie digitală de elită. Momentul oportun pentru scalarea brandului tău.",
    url: "https://kairosdesign.ro",
    siteName: "Kairos",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairos — Web Design, Branding & Web Development",
    description:
      "Creativitate fără compromis și inginerie digitală de elită. Momentul oportun pentru scalarea brandului tău.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#1f2421] text-[#f3f7f4] antialiased selection:bg-[#49a078] selection:text-[#1f2421]">
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
