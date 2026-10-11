import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/data/portfolio";

// Texte courant : géométrique fine, lisible en capitales très espacées
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

// Typo d'affichage : dessinée pour le site (cf. paulhivert-site/typeface.py),
// géométrique unicase — toutes les lettres à la même hauteur, trait d'épaisseur
// constante. Remplacer ce fichier suffit à changer tout le titrage du site.
const hivert = localFont({
  src: "../fonts/HivertGeo.ttf",
  variable: "--font-display",
  display: "swap",
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
      className={`${jost.variable} ${hivert.variable} h-full antialiased`}
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
