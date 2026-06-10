"use client";

import { useEffect, useState } from "react";

// Animation d'arrivée sur la homepage : un cercle dégradé (halo des pages catégories)
// se déploie et se morphe en dégradé du hero, puis le texte se révèle.
export default function HeroIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 3800);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className="hero-intro pointer-events-none fixed inset-0 z-[70] overflow-hidden"
    >
      <div className="hero-intro-veil" />
      <div className="hero-intro-blob" />
    </div>
  );
}
