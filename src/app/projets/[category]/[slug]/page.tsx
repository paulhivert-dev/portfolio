import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import CategoryCard from "@/components/CategoryCard";
import { sections, getProject, getProjectsWithSlugs } from "@/data/portfolio";

type Params = { category: string; slug: string };

export function generateStaticParams(): Params[] {
  return sections.flatMap((s) =>
    getProjectsWithSlugs(s.id).map((p) => ({ category: s.id, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const found = getProject(category, slug);
  return {
    title: found
      ? `${found.project.title} — ${found.project.type} | Paul Hivert`
      : "Paul Hivert",
    description: found?.project.description,
  };
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-accent">
        {label}
      </dt>
      <dd className="text-sm font-light text-foreground/90">{value}</dd>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const found = getProject(category, slug);
  if (!found) notFound();

  const { section, project, index } = found;
  const siblings = getProjectsWithSlugs(category);
  const prev = index > 0 ? siblings[index - 1] : null;
  const next = index < siblings.length - 1 ? siblings[index + 1] : null;
  const others = sections.filter((s) => s.id !== section.id);

  return (
    <>
      <Header />
      <main className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/projets/${section.id}`}
            className="text-sm font-light text-muted transition-colors hover:text-foreground"
          >
            ← {section.name}
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Colonne info — sticky sur desktop */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {project.type}
              </p>
              <h1 className="mt-4 font-wordmark text-4xl font-extrabold leading-[1.0] tracking-[-0.02em] sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted">
                {project.description}
              </p>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  Voir la vidéo
                  <span className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              )}

              <dl className="mt-10 space-y-3">
                <MetaRow label="Catégorie" value={section.name} />
                <MetaRow label="Type" value={project.type} />
                <MetaRow label="Année" value={project.year} />
              </dl>
            </div>

            {/* Colonne visuels */}
            <div className="space-y-6">
              <figure>
                <div className="overflow-hidden rounded-2xl bg-card sm:rounded-3xl">
                  <Image
                    src={project.img}
                    alt={`${project.title} — ${project.type}`}
                    width={project.w}
                    height={project.h}
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="h-auto w-full"
                    priority
                  />
                </div>
                {project.imgCaption && (
                  <figcaption className="mt-3 px-1 text-sm font-light leading-relaxed text-muted">
                    {project.imgCaption}
                  </figcaption>
                )}
              </figure>

              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-5">
                  {project.images.map((im, i) => (
                    <figure key={im.src}>
                      <div className="overflow-hidden rounded-2xl bg-card sm:rounded-3xl">
                        <Image
                          src={im.src}
                          alt={`${project.title} — déclinaison ${i + 1}`}
                          width={im.w}
                          height={im.h}
                          sizes="(max-width: 1024px) 100vw, 320px"
                          className="h-auto w-full"
                        />
                      </div>
                      {im.caption && (
                        <figcaption className="mt-3 px-1 text-sm font-light leading-relaxed text-muted">
                          {im.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation projet précédent / suivant */}
          <nav className="mt-24 flex items-stretch justify-between gap-6 border-t border-border/60 pt-8">
            {prev ? (
              <Link
                href={`/projets/${section.id}/${prev.slug}`}
                className="group flex max-w-[45%] flex-col text-left"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  ← Précédent
                </span>
                <span className="mt-1 truncate text-base font-normal transition-opacity group-hover:opacity-70">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/projets/${section.id}/${next.slug}`}
                className="group flex max-w-[45%] flex-col text-right"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  Suivant →
                </span>
                <span className="mt-1 truncate text-base font-normal transition-opacity group-hover:opacity-70">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>

          {/* Autres catégories */}
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
