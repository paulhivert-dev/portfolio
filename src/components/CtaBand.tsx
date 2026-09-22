export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 px-6 py-28 sm:px-10 sm:py-36">
      {/* Halo tan, discret, dans l'esprit de la DA */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 58%, rgba(255,0,40,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Prêt à{" "}
          <span className="font-wordmark font-extrabold tracking-[-0.02em] text-accent">donner vie</span>{" "}
          à votre projet{" "}?
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-muted">
          Direction artistique, identité, affiches, motion… Discutons de votre
          prochain projet et donnons-lui une vraie présence.
        </p>

        <a
          href="#contacts"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium lowercase text-black transition-colors hover:bg-foreground"
        >
          travaillons ensemble
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/20 transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
