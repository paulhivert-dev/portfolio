"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Item = { id: string; name: string };

// Menu de navigation mobile (hamburger + overlay plein écran).
// Rendu uniquement en < sm (sm:hidden) : le desktop ne l'affiche jamais.
export default function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      {/* Bouton hamburger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="-mr-2 flex h-10 w-10 items-center justify-center text-foreground"
      >
        <span className="relative block h-[13px] w-6">
          <span className="absolute left-0 top-0 block h-[1.5px] w-full rounded bg-current" />
          <span className="absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 rounded bg-current" />
          <span className="absolute bottom-0 left-0 block h-[1.5px] w-full rounded bg-current" />
        </span>
      </button>

      {/* Overlay plein écran */}
      {open && (
        <div
          className="mobile-menu fixed inset-0 z-[90] flex flex-col px-6 py-4"
          style={{
            background:
              "radial-gradient(120% 95% at 50% 28%, #261720 0%, #180d12 48%, #0c0709 82%, #070405 100%)",
          }}
        >
          {/* Barre du haut : wordmark + fermer */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-xl font-semibold lowercase leading-none tracking-[-0.01em] text-white"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              paulfolio
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition active:bg-white/20"
            >
              ×
            </button>
          </div>

          {/* Liens */}
          <nav className="mt-6 flex flex-1 flex-col justify-center">
            {items.map((s, i) => (
              <Link
                key={s.id}
                href={`/projets/${s.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 text-3xl font-light capitalize leading-tight text-foreground/90 transition-colors active:text-accent"
                style={{ animationDelay: `${0.04 + i * 0.045}s` }}
              >
                {s.name}
              </Link>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="py-4 text-3xl font-light leading-tight text-foreground/90 transition-colors active:text-accent"
              style={{ animationDelay: `${0.04 + items.length * 0.045}s` }}
            >
              Contacts
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
