import type { Metadata } from "next";
import { Mulish, Syne, Anton } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

// Repli web proche d'Avenir
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

// Typo display du wordmark (titre du site)
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Typo "poster" condensée bold pour le hero
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${mulish.variable} ${syne.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="site-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
