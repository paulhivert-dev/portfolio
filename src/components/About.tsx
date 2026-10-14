import Image from "next/image";
import { profile, software, skills } from "@/data/portfolio";
import SoftwarePills from "./SoftwarePills";

export default function About() {
  return (
    <section
      id="a-propos"
      className="scroll-mt-20 border-t border-border/60 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-14">
          <b>01</b> — à propos <i />
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        {/* Portrait */}
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-card lg:aspect-auto lg:h-full">
          <Image
            src={profile.portrait}
            alt="Portrait de Paul Hivert"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover grayscale brightness-90 contrast-105"
            priority
          />
        </div>

        {/* Texte */}
        <div className="flex flex-col">
          <h2 className="font-wordmark text-[clamp(1.8rem,4.4vw,3rem)]">
            {profile.name}
          </h2>
          <p className="mt-5 text-[0.6rem] uppercase tracking-[0.38em] text-accent">
            {profile.role.join("  ·  ")}
          </p>

          <div className="mt-10 space-y-5">
            {profile.intro.map((p, i) => (
              <p
                key={i}
                className="max-w-[38rem] text-[0.9rem] font-light leading-[1.95] text-foreground/75"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Logiciels */}
          <p className="mt-14 text-[0.58rem] uppercase tracking-[0.4em] text-muted">
            Logiciels
          </p>
          <SoftwarePills software={software} />

          {/* Compétences */}
          <p className="mt-14 text-[0.58rem] uppercase tracking-[0.4em] text-muted">
            Compétences
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {skills.map((s) => (
              <li key={s} className="text-[0.76rem] tracking-[0.08em] text-foreground/75">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
