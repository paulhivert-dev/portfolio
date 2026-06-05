"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll horizontal « épinglé » : tant qu'on traverse cette section en
 * scrollant verticalement, la rangée défile horizontalement ; une fois au
 * bout, le scroll vertical reprend (et inversement en remontant).
 * Repli : scroll horizontal natif sur mobile / prefers-reduced-motion.
 */
export default function PinnedRow({
  children,
}: {
  children: React.ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [outerHeight, setOuterHeight] = useState<string>("auto");

  // Active l'effet et calcule la hauteur nécessaire (distance horizontale).
  useEffect(() => {
    const compute = () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const on = window.innerWidth >= 768 && !reduce;
      setEnabled(on);

      const track = trackRef.current;
      if (!on || !track) {
        setOuterHeight("auto");
        if (track) track.style.transform = "";
        return;
      }
      const distance = Math.max(
        0,
        track.scrollWidth - (track.parentElement?.clientWidth ?? 0)
      );
      setOuterHeight(`${Math.round(window.innerHeight + distance)}px`);
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [children]);

  // Mappe la progression de scroll dans la section → translateX.
  useEffect(() => {
    if (!enabled) return;
    const update = () => {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;
      const total = outer.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-outer.getBoundingClientRect().top, 0),
        total
      );
      const progress = total > 0 ? scrolled / total : 0;
      const distance = Math.max(
        0,
        track.scrollWidth - (track.parentElement?.clientWidth ?? 0)
      );
      track.style.transform = `translate3d(${-(progress * distance).toFixed(
        2
      )}px,0,0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [enabled, children]);

  return (
    <div
      ref={outerRef}
      className="-mx-6 sm:-mx-10"
      style={{ height: enabled ? outerHeight : "auto" }}
    >
      <div
        style={
          enabled
            ? {
                position: "sticky",
                top: 0,
                height: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }
            : undefined
        }
      >
        <div
          ref={trackRef}
          className={
            enabled
              ? "flex gap-6 px-6 sm:px-10"
              : "flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:px-10 [scrollbar-width:thin]"
          }
          style={enabled ? { willChange: "transform" } : undefined}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
