"use client";

import { useEffect, useState } from "react";

// Animation d'arrivée sur la homepage : un cercle dégradé (halo des pages catégories)
// se déploie et se morphe en dégradé du hero, puis le texte se révèle.
export default function HeroIntro() {
  const [show, setShow] = useState(true);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShow(false);
      return;
    }
    // Démarre l'animation sur une frame propre (après l'hydratation) pour
    // qu'aucun travail JS de chargement ne grignote les premières frames.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setPlay(true));
    });
    const t = setTimeout(() => setShow(false), 3400);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className={`hero-intro pointer-events-none fixed inset-0 z-[70] overflow-hidden${
        play ? " hero-intro--play" : ""
      }`}
    >
      <div className="hero-intro-veil" />
      <div className="hero-intro-blob" />
    </div>
  );
}
