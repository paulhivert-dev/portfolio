import Image from "next/image";
import { profile } from "@/data/portfolio";

// Grain argentique appuyé (analogique)
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const HELV = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' };

export default function TestBieber() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16"
      style={{ ...HELV, color: "#1c1d1a" }}
    >
      {/* Fond délavé, dreamy, vert-gris / dusty */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 95% at 50% 36%, #d4d6cd 0%, #c2c5bb 46%, #a7aaa0 78%, #8f928a 100%)",
        }}
      />
      {/* Nappes diffuses : bleu poussiéreux + pêche fanée */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(50% 55% at 22% 18%, rgba(120,160,190,0.32), transparent 70%)",
            "radial-gradient(48% 50% at 82% 82%, rgba(210,150,130,0.26), transparent 70%)",
            "radial-gradient(60% 60% at 50% 50%, rgba(240,238,230,0.30), transparent 65%)",
          ].join(","),
          filter: "blur(12px)",
        }}
      />

      {/* En-tête minimal (clin d'œil au feed) */}
      <div
        className="absolute left-0 right-0 top-7 flex items-center justify-between px-7 text-[11px] lowercase tracking-[0.04em] text-[#1c1d1a]/55"
        style={HELV}
      >
        <span>paul hivert</span>
        <span>🎧 a sprinkle of happiness</span>
        <span className="tabular-nums">1 / 7</span>
      </div>

      {/* Orbe photographique floue/dreamy */}
      <div className="relative z-10 mb-12 mt-4">
        <div
          className="relative aspect-square w-[72vw] max-w-[460px] overflow-hidden rounded-full"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.4), 0 30px 90px -20px rgba(40,60,90,0.55), inset 0 0 70px rgba(120,160,200,0.4)",
          }}
        >
          <Image
            src={profile.portrait}
            alt="paul"
            fill
            sizes="460px"
            className="scale-110 object-cover"
            style={{
              filter:
                "grayscale(0.55) contrast(0.82) brightness(1.12) saturate(0.7) blur(1.5px)",
            }}
            priority
          />
          {/* Voile bleuté + halo lumineux interne */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.18) 0%, transparent 42%), radial-gradient(circle at 50% 50%, transparent 55%, rgba(90,130,170,0.45) 100%)",
              mixBlendMode: "screen",
            }}
          />
          {/* Fondu des bords vers le fond */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 62%, rgba(196,197,187,0.85) 100%)",
            }}
          />
        </div>
      </div>

      {/* Typo ultra-minimale, minuscules */}
      <div className="relative z-10 text-center" style={HELV}>
        <p className="text-[13px] lowercase tracking-[0.06em] text-[#1c1d1a]/60">
          directeur artistique · chef de projets
        </p>
        <h1 className="mt-2 text-4xl font-medium lowercase tracking-[-0.01em] text-[#1c1d1a] sm:text-5xl">
          paul hivert
        </h1>
        <p className="mt-5 text-[12px] lowercase tracking-[0.06em] text-[#1c1d1a]/55">
          art direction — coachella ’26 · stay tuned :))))))
        </p>
      </div>

      {/* Grain argentique global appuyé */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage: GRAIN,
          backgroundSize: "200px 200px",
          opacity: 0.34,
        }}
      />
      {/* Vignette douce */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 100% at 50% 45%, transparent 58%, rgba(60,66,60,0.42) 100%)",
        }}
      />
    </main>
  );
}
