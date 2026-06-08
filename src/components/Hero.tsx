import { profile } from "@/data/portfolio";

// Grain argentique (SVG feTurbulence en data-URI) — pas d'animation requise
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-6 sm:px-10"
    >
      {/* Fond profond brun-taupe */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 14%, #251d18 0%, #1a1411 48%, #0f0b09 100%)",
        }}
      />

      {/* Halo lumineux — cœur taupe/pêche, anneaux chauds */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[44%] aspect-square w-[140vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 hero-aura"
        style={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(220,184,164,0.36) 0%, rgba(198,142,106,0.18) 17%, transparent 36%)",
            "radial-gradient(circle at 50% 50%, transparent 32%, rgba(200,168,152,0.22) 45%, rgba(170,110,80,0.12) 56%, transparent 66%)",
            "radial-gradient(circle at 50% 50%, transparent 54%, rgba(226,196,176,0.16) 62%, transparent 75%)",
          ].join(","),
          filter: "blur(26px)",
        }}
      />

      {/* Nappes colorées diffuses (tons chauds) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(48% 50% at 50% 92%, rgba(200,168,152,0.22), transparent 72%)",
            "radial-gradient(42% 46% at 14% 16%, rgba(184,116,80,0.18), transparent 70%)",
            "radial-gradient(38% 42% at 86% 82%, rgba(150,96,70,0.16), transparent 70%)",
          ].join(","),
          filter: "blur(20px)",
        }}
      />

      {/* Grain argentique */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light hero-grain"
        style={{ backgroundImage: GRAIN, backgroundSize: "220px 220px" }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 90% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-accent/90">
          Portfolio · 2026
        </p>
        <h1 className="font-wordmark text-6xl font-extrabold leading-[0.92] tracking-[-0.02em] text-foreground drop-shadow-[0_2px_30px_rgba(200,168,152,0.22)] sm:text-8xl">
          {profile.wordmark}
        </h1>
        <p className="mt-7 max-w-xl text-base font-light leading-relaxed tracking-wide text-foreground/70 sm:text-lg">
          {profile.role.join("  ·  ")}
        </p>
      </div>

      <a
        href="#a-propos"
        aria-label="Défiler"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground/50 transition-opacity hover:opacity-100"
      >
        ↓
      </a>
    </section>
  );
}
