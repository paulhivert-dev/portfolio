import CategoryCard from "@/components/CategoryCard";
import { type Section } from "@/data/portfolio";

/**
 * Bloc « Autres catégories » : les mêmes tuiles que l'accueil, mais une grille
 * qui se remplit toujours.
 *
 * Il reste systématiquement 5 catégories (6 moins celle qu'on regarde), et 5 ne
 * se divise pas en 4 colonnes : la cinquième tuile se retrouvait seule, avec un
 * grand vide à droite. Deux colonnes qui s'ouvrent en cinq règlent le cas :
 * - en dessous de 1024 px, 2 colonnes et la dernière tuile occupe toute la
 *   largeur restante (5 = 2 + 2 + 1) ;
 * - au-delà, les 5 tuiles tiennent sur une seule ligne, plus étroites et plus
 *   hautes — une bande qui se lit d'un coup d'œil.
 */
export default function OtherCategories({ sections }: { sections: Section[] }) {
  return (
    <nav className="mt-32 pt-14">
      <p className="eyebrow mb-10">
        Autres catégories <i />
      </p>

      {/* Les filets d'un pixel entre les tuiles sont le fond qui transparaît */}
      <div className="grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-5">
        {sections.map((section, i) => (
          <CategoryCard
            key={section.id}
            section={section}
            className={`lg:aspect-[2/3] ${
              // dernière tuile d'un total impair : elle prend la ligne entière
              i === sections.length - 1 && sections.length % 2 === 1
                ? "max-lg:col-span-2"
                : ""
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
