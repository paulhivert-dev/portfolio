import { profile } from "@/data/portfolio";

// Grain argentique (SVG feTurbulence en data-URI) — pas d'animation requise
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-3 sm:px-4"
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

      {/* Contenu — nom géant "poster" sur une seule ligne, pleine largeur */}
      <div className="relative z-10 w-full">
        {/* Écho haut */}
        <p className="mb-2 text-center text-[2.6vw] font-bold uppercase tracking-[0.5em] text-accent/35">
          paul hivert
        </p>

        {/* Nom étiré bord à bord — Helvetica très gras (DA du site) */}
        <svg
          viewBox="0 0 100 17"
          className="w-full drop-shadow-[0_10px_50px_rgba(224,148,124,0.3)]"
          role="img"
          aria-label="Paul Hivert"
        >
          <defs>
            <linearGradient id="hivertGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f6cab2" />
              <stop offset="0.55" stopColor="#e0a890" />
              <stop offset="1" stopColor="#bb6c4d" />
            </linearGradient>
          </defs>
          <text
            x="50"
            y="14.6"
            textAnchor="middle"
            textLength="99"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontWeight="700"
            fontSize="19"
            fill="url(#hivertGrad)"
            stroke="url(#hivertGrad)"
            strokeWidth="0.35"
          >
            PAUL HIVERT
          </text>
        </svg>

        {/* Écho bas */}
        <p className="mt-2 text-center text-[2.6vw] font-bold uppercase tracking-[0.5em] text-accent/35">
          paul hivert
        </p>

        <p className="mt-6 text-center text-sm lowercase tracking-[0.1em] text-foreground/60 sm:text-base">
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
