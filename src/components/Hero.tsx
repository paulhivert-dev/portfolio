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
      {/* Fond sombre légèrement chaud (DA Bieber rose-orange) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 95% at 50% 28%, #261720 0%, #180d12 48%, #0c0709 82%, #070405 100%)",
        }}
      />

      {/* Halo lumineux — anneaux rose-orange autour d'un cœur laiteux */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[44%] aspect-square w-[140vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 hero-aura"
        style={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(246,228,222,0.34) 0%, rgba(236,176,158,0.16) 20%, transparent 40%)",
            "radial-gradient(circle at 50% 50%, transparent 33%, rgba(226,148,124,0.42) 45%, rgba(196,104,84,0.16) 57%, transparent 67%)",
            "radial-gradient(circle at 50% 50%, transparent 55%, rgba(238,180,168,0.18) 63%, transparent 76%)",
          ].join(","),
          filter: "blur(28px)",
        }}
      />

      {/* Nappes diffuses (rose + orange) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(48% 52% at 16% 18%, rgba(226,148,124,0.26), transparent 70%)",
            "radial-gradient(44% 46% at 86% 84%, rgba(210,118,138,0.24), transparent 70%)",
          ].join(","),
          filter: "blur(20px)",
        }}
      />

      {/* Grain argentique */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light hero-grain"
        style={{ backgroundImage: GRAIN, backgroundSize: "200px 200px" }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 95% at 50% 45%, transparent 55%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Contenu — gros titre "poster" */}
      <div className="hero-reveal relative z-10 mx-auto w-full max-w-6xl text-center">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.55em] text-accent/50 sm:text-xs">
          portfolio
        </p>

        <h1
          className="bg-gradient-to-b from-[#f6cab2] via-[#e0a890] to-[#bb6c4d] bg-clip-text uppercase leading-[0.86] tracking-[0.01em] text-transparent drop-shadow-[0_8px_44px_rgba(224,148,124,0.28)]"
          style={{
            fontFamily: "var(--font-anton), 'Helvetica Neue', sans-serif",
            fontSize: "clamp(2.5rem, 12vw, 9rem)",
          }}
        >
          paul
          <br />
          hivert
        </h1>

        <p className="mt-7 text-sm lowercase tracking-[0.08em] text-foreground/60 sm:text-base">
          {profile.role.join("  ·  ").toLowerCase()}
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
