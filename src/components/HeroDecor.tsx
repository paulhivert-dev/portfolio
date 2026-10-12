"use client";

import { useEffect } from "react";

/**
 * Ouverture de l'accueil, en trois temps pilotés par le défilement :
 *
 *   1. la couverture monte doucement — son texte s'échappe par le haut ;
 *   2. deux volets se referment sur l'écran, découpés dans la fenêtre du visuel ;
 *   3. ils s'écartent et laissent place à la suite de la page.
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
        {/* la couverture, sa fenêtre retirée : elle est reconstituée au-dessus */}
        <img src="/decor/cover-nowindow.webp" alt="" />
        <div className="win win-open">
          <img src="/decor/win-open.webp" alt="" />
        </div>
        <div className="win win-left">
          <img src="/decor/win-left.webp" alt="" />
        </div>
        <div className="win win-right">
          <img src="/decor/win-right.webp" alt="" />
        </div>
      </div>
      <div className="veil" />
      <div className="grain" />
    </div>
  );
}
