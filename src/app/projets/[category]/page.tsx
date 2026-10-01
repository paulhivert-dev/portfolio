import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import CategoryCard from "@/components/CategoryCard";
// import SpikeLogo3D from "@/components/SpikeLogo3D"; // animation 3D mise de côté (trop lourde) — réactivable
import {
  sections,
  getSection,
  getProjectsWithSlugs,
  type ProjectWithSlug,
} from "@/data/portfolio";

function ProjectThumb({
  project,
  categoryId,
  className = "",
}: {
  project: ProjectWithSlug;
  categoryId: string;
  className?: string;
}) {
  return (
    <Link
      href={`/projets/${categoryId}/${project.slug}`}
      className={`group block transition duration-300 ease-out sm:hover:-translate-y-2 ${className}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-card transition duration-300 sm:group-hover:border-accent/45 sm:group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
        <Image
          src={project.thumb ?? project.img}
          alt={`${project.title} — ${project.type}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out sm:group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 border border-fog/30 bg-background/60 px-3 py-1 text-[0.56rem] uppercase tracking-[0.24em] text-foreground/90 backdrop-blur-md">
          {project.type}
        </span>
      </div>
      <div className="mt-5">
        <h2 className="font-wordmark text-[1.12rem] transition-[filter] duration-300 sm:group-hover:brightness-125">
          {project.title}
        </h2>
        <p className="mt-2.5 line-clamp-2 max-w-xs text-[0.78rem] font-light leading-[1.8] text-muted">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return sections.map((s) => ({ category: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const section = getSection(category);
  return { title: section ? `${section.name} — Paul Hivert` : "Paul Hivert" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const section = getSection(category);
  if (!section) notFound();

  const projects = getProjectsWithSlugs(category);
  const others = sections.filter((s) => s.id !== category);

  return (
    <>
      <Header />
      <main className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projets"
            className="text-[0.58rem] uppercase tracking-[0.34em] text-muted transition-colors hover:text-accent"
          >
            ← Tous les projets
          </Link>

          {/* En-tête catégorie */}
          <div className="mt-14 mb-20">
            <p className="eyebrow">
              <b>{String(projects.length).padStart(2, "0")}</b> — Direction
              artistique <i />
            </p>
            <h1 className="font-wordmark mt-10 text-[clamp(2.2rem,7vw,4.8rem)]">
              {section.name}
            </h1>
          </div>

          {/* Animation 3D du logo Spike mise de côté (trop lourde).
              Réactivable : décommenter l'import SpikeLogo3D et l'ajouter ici. */}

          <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-3 sm:[&:has(a:hover)>a:not(:hover)]:opacity-40 sm:[&:has(a:hover)>a:not(:hover)]:blur-[2px]">
            {projects.map((project) => (
              <ProjectThumb
                key={project.slug}
                project={project}
                categoryId={section.id}
              />
            ))}
          </div>

          <nav className="mt-32 border-t border-border/60 pt-14">
            <p className="eyebrow mb-10">
              Autres catégories <i />
            </p>
            <div className="grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
              {others.map((s) => (
                <CategoryCard key={s.id} section={s} />
              ))}
            </div>
          </nav>
        </div>
      </main>
      <CtaBand />
      <Contact />
    </>
  );
}
