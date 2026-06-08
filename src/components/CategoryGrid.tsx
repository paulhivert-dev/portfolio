import CategoryCard from "@/components/CategoryCard";
import { sections } from "@/data/portfolio";

export default function CategoryGrid() {
  return (
    <section
      id="projets"
      className="relative scroll-mt-20 overflow-hidden border-t border-border/60 px-6 py-20 sm:px-10 sm:py-28"
    >
      {/* Halo tan, dans l'esprit du bloc CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 45%, rgba(226,148,124,0.16), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-14 text-center font-wordmark text-5xl font-extrabold leading-none tracking-[-0.02em] sm:text-7xl">
          projets
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {sections.map((section) => (
            <CategoryCard
              key={section.id}
              section={section}
              className="w-full sm:w-[calc(50%_-_8px)] lg:w-[calc(33.333%_-_11px)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
