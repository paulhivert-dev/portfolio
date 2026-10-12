"use client";

import { useEffect } from "react";
import Image from "next/image";

/**
 * Décor d'arrivée : la couverture 2027 de Paul, plein cadre à l'ouverture, qui
 * se dissout sur la première hauteur d'écran. Passé le hero, il ne reste que le
 * fond gris — un support neutre pour les informations.
 *
 * L'opacité passe par la variable CSS --decor : le défilement n'écrit qu'une
 * valeur, le reste est fait par le compositeur, sans recalcul de mise en page.
 */
export default function HeroDecor() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const d = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.85));
      document.documentElement.style.setProperty("--decor", d.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      document.documentElement.style.removeProperty("--decor");
    };
  }, []);

  return (
    <div className="hero-decor" aria-hidden>
      <Image
        src="/decor/cover-2027.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="decor-img"
      />
      <div className="veil" />
      <div className="grain" />
    </div>
  );
}
