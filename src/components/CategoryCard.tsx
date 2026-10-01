import Link from "next/link";
import Image from "next/image";
import { type Section } from "@/data/portfolio";

export default function CategoryCard({
  section,
  className = "",
}: {
  section: Section;
  className?: string;
}) {
  return (
    <Link
      href={`/projets/${section.id}`}
      className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-card p-6 transition-colors duration-300 ${className}`}
    >
      <Image
        src={section.cover ?? section.projects[0].img}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="scale-[1.02] object-cover opacity-70 grayscale brightness-50 contrast-105 transition duration-[1100ms] ease-out group-hover:scale-[1.07] group-hover:opacity-95 group-hover:brightness-75 group-hover:grayscale-[0.1]"
      />
      {/* Voile : garde le texte lisible quelle que soit l'image */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,18,0.25) 0%, rgba(10,14,18,0.55) 55%, rgba(8,11,14,0.92) 100%)",
        }}
      />

      <span className="absolute right-6 top-6 z-10 text-[0.58rem] tracking-[0.2em] text-accent/80">
        {String(section.projects.length).padStart(2, "0")}
      </span>

      <span className="font-wordmark relative z-10 text-[1.26rem] transition-[filter] duration-300 group-hover:brightness-125">
        {section.name}
      </span>

      <span className="relative z-10 mt-2.5 flex items-center gap-2.5 text-[0.56rem] uppercase tracking-[0.34em] text-muted transition-colors duration-300 group-hover:text-foreground">
        <span
          aria-hidden
          className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-11"
        />
        Voir
      </span>
    </Link>
  );
}
