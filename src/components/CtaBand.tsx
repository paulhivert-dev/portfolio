export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 px-6 py-28 sm:px-10 sm:py-36">
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-wordmark mx-auto max-w-[22ch] text-[clamp(1.7rem,4.6vw,3.2rem)]">
          prêt à donner vie à votre projet ?
        </h2>

        <p className="mx-auto mt-8 max-w-[34rem] text-[0.78rem] uppercase leading-[2] tracking-[0.12em] text-muted/80">
          Direction artistique, identité, affiches, motion… Discutons de votre
          prochain projet et donnons-lui une vraie présence.
        </p>

        <a
          href="#contacts"
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-accent/40 px-8 py-4 text-[0.62rem] uppercase tracking-[0.34em] text-accent transition-colors hover:border-accent/75 hover:bg-accent/10 hover:text-foreground"
        >
          Travaillons ensemble
        </a>
      </div>
    </section>
  );
}
