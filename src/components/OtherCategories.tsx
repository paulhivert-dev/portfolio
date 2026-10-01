import Link from "next/link";
import Image from "next/image";
import { type Section } from "@/data/portfolio";

/**
 * Bloc « Autres catégories » : une liste, pas une grille.
 *
 * Il reste toujours 5 catégories (6 moins celle qu'on regarde) : en grille,
 * la cinquième se retrouvait seule sur une ligne, avec un grand vide à droite.
 * En liste, le nombre d'éléments n'a plus d'importance, et la DA y gagne —
 * filets fins, petites capitales, texte posé dans le vide. L'image de la
 * catégorie n'apparaît qu'au survol, à droite de la ligne.
 */
export default function OtherCategories({ sections }: { sections: Section[] }) {
  return (
    <nav className="mt-32 pt-14">
      <p className="eyebrow mb-4">
        Autres catégories <i />
      </p>

      <ul>
        {sections.map((section, i) => (
          <li
            key={section.id}
            className="group relative border-t border-border last:border-b"
          >
            <Link
              href={`/projets/${section.id}`}
              className="relative z-10 flex items-center gap-5 py-7 sm:gap-8 sm:py-9"
            >
              <span className="w-8 shrink-0 text-[0.56rem] tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="font-wordmark text-[1.4rem] transition-[filter,transform] duration-500 group-hover:translate-x-2 group-hover:brightness-125 sm:text-[2rem]">
                {section.name}
              </span>

              <span className="ml-auto flex shrink-0 items-center gap-3 text-[0.56rem] uppercase tracking-[0.34em] text-muted transition-colors duration-300 group-hover:text-foreground">
                <span
                  aria-hidden
                  className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-12"
                />
                Voir
              </span>
            </Link>

            {/* Aperçu révélé au survol — décoratif, masqué sous 1024px */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-28 top-1/2 hidden h-24 w-36 -translate-y-1/2 scale-95 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 lg:block"
            >
              <Image
                src={section.cover ?? section.projects[0].img}
                alt=""
                fill
                sizes="144px"
                className="object-cover grayscale brightness-75"
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
