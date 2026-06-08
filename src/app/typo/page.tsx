import { Space_Grotesk, Syne, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500"] });
const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"] });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const w = profile.wordmark; // "paulfolio"

const variants = [
  { n: "1 · Space Grotesk", cls: spaceGrotesk.className, style: { letterSpacing: "-0.01em" }, text: w },
  { n: "2 · Space Grotesk — espacé minuscules", cls: spaceGrotesk.className, style: { letterSpacing: "0.12em", fontWeight: 400 }, text: w },
  { n: "3 · Instrument Serif", cls: instrument.className, style: { letterSpacing: "0" }, text: w },
  { n: "4 · Instrument Serif — italique", cls: instrument.className, style: { fontStyle: "italic" as const }, text: w },
  { n: "5 · Syne — bold", cls: syne.className, style: { fontWeight: 800, letterSpacing: "-0.02em" }, text: w },
  { n: "6 · Capitales fines espacées (Avenir/Mulish)", cls: "", style: { fontWeight: 200, letterSpacing: "0.32em", textTransform: "uppercase" as const }, text: w },
];

export default function TypoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-20 sm:px-10">
      {/* Fond identique au hero */}
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: "radial-gradient(120% 100% at 50% 12%, #0c1622 0%, #0a0f17 45%, #07090d 100%)" }} />
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: ["radial-gradient(40% 50% at 16% 88%, rgba(224,108,52,0.22), transparent 70%)", "radial-gradient(45% 45% at 88% 18%, rgba(72,170,216,0.20), transparent 70%)", "radial-gradient(35% 40% at 82% 82%, rgba(214,120,150,0.16), transparent 70%)"].join(","), filter: "blur(20px)" }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 opacity-[0.16] mix-blend-soft-light" style={{ backgroundImage: GRAIN, backgroundSize: "220px 220px" }} />

      <div className="relative z-10 mx-auto max-w-5xl space-y-5">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/90">Comparatif typo — titre</p>
        {variants.map((v) => (
          <div key={v.n} className="border-t border-white/10 pt-3">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{v.n}</p>
            <p className={v.cls} style={{ ...v.style, color: "#f4f3f1", lineHeight: 1, fontSize: "clamp(34px, 5vw, 62px)" }}>
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
