import CategoryCard from "@/components/CategoryCard";
import { sections } from "@/data/portfolio";

export default function CategoryGrid() {
  return (
    <section
      id="projets"
      className="relative scroll-mt-20 overflow-hidden border-t border-border/60 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <p className="eyebrow mb-14">
          <b>02</b> — projets <i />
        </p>

        <h2 className="font-wordmark mb-12 text-[clamp(1.8rem,5vw,3.4rem)]">
          sélection
        </h2>

        {/* Les filets d'un pixel entre les tuiles sont le fond qui transparaît */}
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <CategoryCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
