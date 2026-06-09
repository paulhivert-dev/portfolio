// Fond fixe reprenant le dégradé du hero (page d'accueil)
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function PageGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base navy/brun profond */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 10%, #261720 0%, #180d12 45%, #0c0709 78%, #070405 100%)",
        }}
      />
      {/* Halo rose-orange en haut */}
      <div
        className="absolute left-1/2 top-0 aspect-square w-[120vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/3"
        style={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(246,228,222,0.20) 0%, rgba(236,176,158,0.12) 20%, transparent 42%)",
            "radial-gradient(circle at 50% 50%, transparent 33%, rgba(226,148,124,0.34) 45%, rgba(196,104,84,0.12) 57%, transparent 67%)",
            "radial-gradient(circle at 50% 50%, transparent 55%, rgba(238,180,168,0.14) 63%, transparent 76%)",
          ].join(","),
          filter: "blur(30px)",
        }}
      />
      {/* Nappes diffuses */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(46% 40% at 12% 8%, rgba(226,148,124,0.18), transparent 70%)",
            "radial-gradient(42% 42% at 88% 82%, rgba(210,118,138,0.16), transparent 70%)",
          ].join(","),
          filter: "blur(20px)",
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-soft-light"
        style={{ backgroundImage: GRAIN, backgroundSize: "220px 220px" }}
      />
    </div>
  );
}
