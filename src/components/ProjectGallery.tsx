"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type Visual = { src: string; w: number; h: number; caption?: string };

export default function ProjectGallery({
  visuals,
  title,
  type,
  layout,
  cellAspect = "2 / 3",
}: {
  visuals: Visual[];
  title: string;
  type: string;
  layout: "stacked" | "grid2" | "grid4";
  cellAspect?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const count = visuals.length;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((cur) => (cur === null ? cur : (cur + dir + count) % count)),
    [count]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  const uniform = layout === "grid4";
  const single = count === 1;
  const gridClass =
    layout === "stacked"
      ? "grid grid-cols-1"
      : layout === "grid4"
      ? "grid grid-cols-2 lg:grid-cols-4"
      : "grid grid-cols-1 sm:grid-cols-2";

  const Caption = ({ text }: { text: string }) => (
    <figcaption className="mt-3 px-1 text-sm font-light leading-relaxed text-muted">
      {text}
    </figcaption>
  );

  const Thumb = ({ v, i }: { v: Visual; i: number }) => (
    <figure>
      <button
        type="button"
        onClick={() => setOpen(i)}
        aria-label={`Agrandir ${title} — ${i + 1}`}
        className={`block w-full cursor-pointer overflow-hidden rounded-2xl bg-card sm:rounded-3xl ${
          uniform ? "relative" : ""
        }`}
        style={uniform ? { aspectRatio: cellAspect } : undefined}
      >
        {uniform ? (
          <Image
            src={v.src}
            alt={`${title} — ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 50vw, 280px"
            className="object-cover"
            priority={i === 0}
          />
        ) : (
          <Image
            src={v.src}
            alt={i === 0 ? `${title} — ${type}` : `${title} — déclinaison ${i}`}
            width={v.w}
            height={v.h}
            sizes={
              layout === "stacked"
                ? "(max-width: 1024px) 100vw, 640px"
                : "(max-width: 1024px) 100vw, 320px"
            }
            className="h-auto w-full"
            priority={i === 0}
          />
        )}
      </button>
      {v.caption && <Caption text={v.caption} />}
    </figure>
  );

  return (
    <>
      {single ? (
        <Thumb v={visuals[0]} i={0} />
      ) : (
        <div className={`gallery-grid ${gridClass} items-start gap-4 sm:gap-5`}>
          {visuals.map((v, i) => (
            <Thumb key={v.src} v={v} i={i} />
          ))}
        </div>
      )}

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
          style={{
            background:
              "radial-gradient(120% 95% at 50% 12%, #261720 0%, #180d12 48%, #0c0709 82%, #070405 100%)",
          }}
        >
          {/* halo rose-orange (DA) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(48% 42% at 50% 32%, rgba(226,148,124,0.16), transparent 70%)",
            }}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20"
          >
            ×
          </button>

          {count > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Précédent"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:left-6"
            >
              ‹
            </button>
          )}

          <figure
            className="flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visuals[open].src}
              alt={`${title} — ${open + 1}`}
              width={visuals[open].w}
              height={visuals[open].h}
              sizes="100vw"
              priority
              className="rounded-lg object-contain"
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "86vh" }}
            />
            {visuals[open].caption && (
              <figcaption className="mt-3 max-w-2xl text-center text-sm font-light text-white/70">
                {visuals[open].caption}
              </figcaption>
            )}
          </figure>

          {count > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Suivant"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 sm:right-6"
            >
              ›
            </button>
          )}

          {count > 1 && (
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs tracking-wider text-white/60">
              {open + 1} / {count}
            </span>
          )}
        </div>
      )}
    </>
  );
}
