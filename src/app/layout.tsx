import type { Metadata } from "next";
import { Jost, Comfortaa } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

// Texte courant : géométrique fine, lisible en capitales très espacées
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

// Typo d'affichage : géométrique arrondie, utilisée en bas-de-casse resserré
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: `Paul Hivert — ${profile.role.join(" · ")}`,
  description: profile.intro[1],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${jost.variable} ${comfortaa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="site-bg" aria-hidden>
          <div className="fog" />
          <div className="swirl" />
          <div className="vignette" />
          <div className="grain" />
        </div>
        {children}
      </body>
    </html>
  );
}
