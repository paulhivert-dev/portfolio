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
      {/* Fond navy profond (DA Bieber sombre) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 95% at 50% 28%, #12222f 0%, #0b141d 48%, #060a10 82%, #04070b 100%)",
        }}
      />

      {/* Halo lumineux — anneaux cyan autour d'un cœur laiteux (style pochette) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[44%] aspect-square w-[140vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 hero-aura"
        style={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(210,232,244,0.34) 0%, rgba(150,205,235,0.16) 20%, transparent 40%)",
            "radial-gradient(circle at 50% 50%, transparent 33%, rgba(86,180,224,0.42) 45%, rgba(48,120,178,0.16) 57%, transparent 67%)",
            "radial-gradient(circle at 50% 50%, transparent 55%, rgba(150,210,236,0.18) 63%, transparent 76%)",
          ].join(","),
          filter: "blur(28px)",
        }}
      />

      {/* Nappes diffuses (cyan + bleu nuit) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(48% 52% at 16% 18%, rgba(86,180,224,0.26), transparent 70%)",
            "radial-gradient(44% 46% at 86% 84%, rgba(60,100,160,0.24), transparent 70%)",
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

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-5 text-[11px] lowercase tracking-[0.06em] text-foreground/55">
          🎧 a sprinkle of happiness · portfolio ’26
        </p>
        <h1 className="font-wordmark text-6xl leading-[0.95] text-foreground sm:text-8xl">
          {profile.wordmark}
        </h1>
        <p className="mt-6 max-w-xl text-sm lowercase tracking-[0.04em] text-foreground/60 sm:text-base">
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
