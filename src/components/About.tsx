import Image from "next/image";
import { profile, software, skills } from "@/data/portfolio";
import SoftwarePills from "./SoftwarePills";

export default function About() {
  return (
    <section
      id="a-propos"
      className="scroll-mt-20 border-t border-border/60 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        {/* Portrait */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-card lg:aspect-auto lg:h-full">
          <Image
            src={profile.portrait}
            alt="Portrait de Paul Hivert"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover grayscale"
            priority
          />
        </div>

        {/* Texte */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-6">
            <h2 className="font-brush text-6xl leading-none sm:text-7xl">
              {profile.name}
            </h2>
            <p className="pt-3 text-right text-sm font-light leading-relaxed text-foreground/90 sm:text-base">
              {profile.role.map((r) => (
                <span key={r} className="block">
                  {r}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {profile.intro.map((p, i) => (
              <p
                key={i}
                className="text-sm font-light leading-relaxed text-muted sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Logiciels */}
          <h3 className="mt-12 font-brush text-3xl">Logiciels</h3>
          <SoftwarePills software={software} />

          {/* Compétences */}
          <h3 className="mt-12 font-brush text-3xl">Compétences</h3>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {skills.map((s) => (
              <li key={s} className="text-sm font-light text-foreground/90">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
