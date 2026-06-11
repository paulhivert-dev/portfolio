import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import CategoryCard from "@/components/CategoryCard";
import PageGradient from "@/components/PageGradient";
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
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-card transition duration-300 sm:group-hover:border-accent/70 sm:group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] sm:rounded-3xl">
        <Image
          src={project.thumb ?? project.img}
          alt={`${project.title} — ${project.type}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out sm:group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-background">
          {project.type}
        </span>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-normal tracking-tight transition-colors sm:group-hover:text-accent sm:text-xl">
          {project.title}
        </h2>
        <p className="mx-auto mt-2 line-clamp-2 max-w-xs text-sm font-light leading-relaxed text-muted">
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
      <PageGradient />
      <Header />
      <main className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projets"
            className="text-sm font-light text-muted transition-colors hover:text-foreground"
          >
            ← Tous les projets
          </Link>

          {/* En-tête catégorie */}
          <div className="mt-12 mb-16">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="tabular-nums">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span>Direction artistique</span>
            </div>
            <h1 className="mt-7 text-center text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              <span className="font-wordmark font-extrabold tracking-[-0.02em] text-accent">
                {section.name}
              </span>
            </h1>
          </div>

          {/* Animation 3D du logo Spike mise de côté (trop lourde).
              Réactivable : décommenter l'import SpikeLogo3D et l'ajouter ici. */}

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 sm:[&:has(a:hover)>a:not(:hover)]:opacity-40 sm:[&:has(a:hover)>a:not(:hover)]:blur-[2px]">
            {projects.map((project) => (
              <ProjectThumb
                key={project.slug}
                project={project}
                categoryId={section.id}
                className="w-[calc(50%_-_12px)] lg:w-[calc(33.333%_-_16px)]"
              />
            ))}
          </div>

          <nav className="mt-28 border-t border-border/60 pt-12">
            <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Autres catégories
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {others.map((s) => (
                <CategoryCard
                  key={s.id}
                  section={s}
                  className="w-[calc(50%_-_8px)] lg:w-[calc(25%_-_12px)]"
                />
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
