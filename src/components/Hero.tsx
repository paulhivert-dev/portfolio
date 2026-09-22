import { profile } from "@/data/portfolio";

// Le fond (dégradé + grain) est rendu une seule fois pour tout le site par
// .site-bg (cf. layout.tsx et globals.css) : le hero le laisse simplement voir.

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-6 sm:px-10"
    >
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
