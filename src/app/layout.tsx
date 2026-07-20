import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "./globals.css";
import "./theme.css";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import ScrollProgress from "../components/scroll-progress";
import CursorGlow from "../components/cursor-glow";
import SiteInteractions from "../components/site-interactions";
import PageTransition from "../components/page-transition";

const siteUrl = "https://aryaweb.be";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aryaweb | Professionele websites voor lokale ondernemingen",
    template: "%s | Aryaweb",
  },
  description:
    "Webdesign en websiteontwikkeling voor lokale ondernemingen in België.",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "Aryaweb",
    title: "Aryaweb | Professionele websites voor lokale ondernemingen",
    description:
      "Webdesign en websiteontwikkeling voor lokale ondernemingen in België.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryaweb | Professionele websites voor lokale ondernemingen",
    description:
      "Webdesign en websiteontwikkeling voor lokale ondernemingen in België.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aryaweb",
  description:
    "Webdesign en websiteontwikkeling voor lokale ondernemingen in België.",
  url: siteUrl,
  email: "hello@aryaweb.be",
  areaServed: "BE",
  inLanguage: "nl-BE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl-BE" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{"[data-reveal] { opacity: 1 !important; transform: none !important; }"}</style>
        </noscript>
        <ScrollProgress />
        <CursorGlow />
        <SiteInteractions />
        <SiteHeader />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
