"use client";

import { useEffect } from "react";

/**
 * Ouverture de l'accueil, en trois temps pilotés par le défilement :
 *
 *   1. le ciel monte doucement — son lettrage s'échappe par le haut ;
 *   2. il s'efface en même temps ;
 *   3. le fond du site prend le relais pour porter la suite de la page.
 *
 * Tout passe par des variables CSS écrites dans une frame d'animation : le
 * compositeur fait le reste, sans recalcul de mise en page.
 */
export default function HeroDecor() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const y = window.scrollY;

      // la couverture s'efface sur les 85 premiers % de l'écran
      const decor = Math.max(0, 1 - y / (vh * 0.85));
      // elle monte en même temps, un peu moins vite que la page
      const rise = Math.min(1, y / vh);
      // les volets se referment entre 12 % et 62 % du premier écran, puis
      // s'écartent : fermés au milieu, ouverts de part et d'autre
      const t = Math.min(1, Math.max(0, (y - vh * 0.12) / (vh * 0.5)));
      const shut = t < 0.7 ? t / 0.7 : 1 - (t - 0.7) / 0.3;

      const root = document.documentElement.style;
      root.setProperty("--decor", decor.toFixed(3));
      root.setProperty("--rise", rise.toFixed(3));
      root.setProperty("--shut", shut.toFixed(3));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return (
    <div className="hero-decor" aria-hidden>
      <div className="frame">
        {/* le ciel du visuel, élargi : la matière des côtés est reconstituée */}
        <img src="/decor/sky-wide.webp" alt="" />
      </div>
      <div className="veil" />
      <div className="grain" />
    </div>
  );
}
