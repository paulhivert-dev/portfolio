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
      className={`group relative aspect-square overflow-hidden rounded-3xl border border-border/70 transition-colors duration-300 hover:border-accent/50 ${className}`}
    >
      <Image
        src={section.cover ?? section.projects[0].img}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover opacity-20 grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <div className="relative flex h-full flex-col items-center justify-center p-6 text-center sm:p-8">
        <span className="absolute right-5 top-5 text-xs font-light tabular-nums text-muted">
          {String(section.projects.length).padStart(2, "0")}
        </span>
        <span className="block text-sm font-normal uppercase tracking-[0.22em] text-foreground/90 sm:text-base">
          {section.name}
        </span>
        <span className="mt-3 inline-flex items-center gap-2 text-xs font-light text-muted transition-colors group-hover:text-foreground">
          Voir
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
