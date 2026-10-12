"use client";

import { useEffect } from "react";
import Image from "next/image";
import { profile } from "@/data/portfolio";

/**
 * Décor d'arrivée : une image plein cadre, étalonnée comme une image de film,
 * qui se dissout sur la première hauteur d'écran. Passé le hero, il ne reste
 * que le fond gris — un support neutre pour les informations.
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
        src={profile.portrait}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ filter: "saturate(.75) contrast(1.04) brightness(.78)" }}
      />
      <div className="grade" />
      <div className="veil" />
      <div className="grain" />
      <div className="bar top" />
      <div className="bar bottom" />
    </div>
  );
}
