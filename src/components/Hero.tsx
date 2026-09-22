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
      {/* Fond : noir plein */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--background)" }}
      />

      {/* Grain argentique */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] hero-grain"
        style={{ backgroundImage: GRAIN, backgroundSize: "200px 200px" }}
      />

      {/* Contenu — gros titre "poster" */}
      <div className="hero-reveal relative z-10 mx-auto w-full max-w-6xl text-center">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.55em] text-accent/70 sm:mb-9 sm:text-xs">
          portfolio
        </p>

        <h1
          className="uppercase leading-[0.82] tracking-[0.005em] text-accent text-[clamp(5.5rem,34vw,11rem)] sm:text-[clamp(8rem,29vw,24rem)]"
          style={{
            fontFamily: "var(--font-anton), 'Helvetica Neue', sans-serif",
          }}
        >
          paul
          <br />
          hivert
        </h1>

        <p className="mt-7 text-sm tracking-[0.08em] text-foreground/60 sm:text-base">
          {profile.role.join("  ·  ")}
        </p>
      </div>

      <a
        href="#a-propos"
        aria-label="Défiler"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-accent/70 transition-opacity hover:opacity-100"
      >
        ↓
      </a>
    </section>
  );
}
