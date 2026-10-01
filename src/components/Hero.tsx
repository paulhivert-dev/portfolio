import { profile } from "@/data/portfolio";

// Le fond (brume + volute + grain) est rendu une seule fois pour tout le site
// par .site-bg (cf. layout.tsx et globals.css) : le hero le laisse voir.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 text-center sm:px-10"
    >
      <div className="hero-reveal relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-10 text-[0.6rem] uppercase tracking-[0.62em] text-fog/75 sm:mb-14">
          Portfolio — 2026
        </p>

        <h1 className="font-wordmark text-[clamp(2.5rem,9.8vw,7.4rem)] tracking-[-0.045em]">
          {profile.name} hivert
        </h1>

        <div
          aria-hidden
          className="mx-auto mt-12 mb-8 h-px w-[min(46rem,80%)]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(190,206,218,0.35), transparent)",
          }}
        />

        <p className="text-[0.64rem] uppercase tracking-[0.42em] text-muted">
          {profile.role.join("  ·  ")}
        </p>

        <p className="mx-auto mt-10 max-w-[34rem] text-[0.72rem] uppercase leading-[2.1] tracking-[0.15em] text-muted/85">
          Identités, affiches, motion design et photographie. Je construis des
          images qui tiennent debout toutes seules.
        </p>
      </div>

      <a
        href="#a-propos"
        aria-label="Défiler"
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.56rem] uppercase tracking-[0.4em] text-muted transition-colors hover:text-accent"
      >
        <span
          aria-hidden
          className="block h-10 w-px"
          style={{
            background:
              "linear-gradient(180deg, rgba(180,196,208,0.6), transparent)",
          }}
        />
        Découvrir
      </a>
    </section>
  );
}
