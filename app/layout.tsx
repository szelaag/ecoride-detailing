import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "EcoRide Detailing — Mobilna myjnia rowerów i hulajnóg (Warszawa)",
  description: "Mobilne mycie, czyszczenie i detailing rowerów oraz hulajnóg w Warszawie. Ekologiczne środki, szybkie terminy i rezerwacja online.",
  metadataBase: new URL("https://ecoridedetailing.pl"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "EcoRide Detailing — Mobilna myjnia rowerów i hulajnóg (Warszawa)",
    description: "Mobilne mycie i detailing — szybkie terminy, rezerwacja online.",
    url: "https://ecoridedetailing.pl",
    siteName: "EcoRide Detailing",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pl_PL",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
