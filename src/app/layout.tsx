import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

// Repli web proche d'Avenir
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
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
    <html lang="fr" className={`${mulish.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
