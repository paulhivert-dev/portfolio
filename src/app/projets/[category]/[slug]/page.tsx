import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import OtherCategories from "@/components/OtherCategories";
import ProjectGallery from "@/components/ProjectGallery";
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
      <dt className="w-24 shrink-0 text-[0.56rem] uppercase tracking-[0.28em] text-accent">
        {label}
      </dt>
      <dd className="text-[0.8rem] tracking-[0.06em] text-foreground/80">{value}</dd>
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

  // Visuel principal + déclinaisons réunis
  const visuals = [
    { src: project.img, w: project.w, h: project.h, caption: project.imgCaption },
    ...(project.images ?? []),
  ];
  // Disposition de la galerie : override par projet, sinon par catégorie
  const galleryLayout: "stacked" | "grid2" | "grid2u" | "grid3" | "grid4" =
    project.gallery
      ? project.gallery
      : section.id === "logos" || section.id === "motion-designs"
      ? "stacked"
      : section.id === "autres-projets" || section.id === "photographie"
      ? "grid4"
      : "grid2";
  // Format des cellules de la grille uniforme
  const galleryImgs = project.images ?? [];
  const landscape =
    galleryImgs.length > 0 &&
    galleryImgs.filter((im) => im.w > im.h).length > galleryImgs.length / 2;
  // grid2u : on cale les cellules sur le ratio du visuel principal (affiches au même format, sans recadrage)
  const cellAspect =
    galleryLayout === "grid2u"
      ? `${project.w} / ${project.h}`
      : landscape
      ? "3 / 2"
      : "2 / 3";

  return (
    <>
      <Header />
      <main className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/projets/${section.id}`}
            className="text-[0.58rem] uppercase tracking-[0.34em] text-muted transition-colors hover:text-accent"
          >
            ← {section.name}
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Colonne info — sticky sur desktop */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-[0.58rem] uppercase tracking-[0.4em] text-accent">
                {project.type}
              </p>
              <h1 className="font-wordmark mt-6 text-[clamp(1.9rem,5vw,3.6rem)]">
                {project.title}
              </h1>
              <p className="mt-7 max-w-md text-[0.9rem] font-light leading-[1.95] text-foreground/75">
                {project.description}
              </p>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full border border-accent/40 px-6 py-3 text-[0.6rem] uppercase tracking-[0.3em] text-accent transition-colors hover:border-accent/75 hover:bg-accent/10 hover:text-foreground"
                >
                  Voir la vidéo
                  <span className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              )}

              <dl className="mt-12 space-y-3">
                <MetaRow label="Catégorie" value={section.name} />
                <MetaRow label="Type" value={project.type} />
                <MetaRow label="Année" value={project.year} />
              </dl>
            </div>

            {/* Colonne visuels — galerie cliquable (lightbox) */}
            <ProjectGallery
              visuals={visuals}
              title={project.title}
              type={project.type}
              layout={galleryLayout}
              cellAspect={cellAspect}
            />
          </div>

          {/* Navigation projet précédent / suivant */}
          <nav className="mt-24 flex items-stretch justify-between gap-6 border-t border-border/60 pt-8">
            {prev ? (
              <Link
                href={`/projets/${section.id}/${prev.slug}`}
                className="group flex max-w-[45%] flex-col text-left"
              >
                <span className="text-[0.56rem] uppercase tracking-[0.3em] text-muted">
                  ← Précédent
                </span>
                <span className="font-wordmark mt-2 truncate text-[1rem] transition-[filter] duration-300 group-hover:brightness-125">
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
                <span className="text-[0.56rem] uppercase tracking-[0.3em] text-muted">
                  Suivant →
                </span>
                <span className="font-wordmark mt-2 truncate text-[1rem] transition-[filter] duration-300 group-hover:brightness-125">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>

          {/* Autres catégories */}
          <OtherCategories sections={others} />
        </div>
      </main>
      <CtaBand />
      <Contact />
    </>
  );
}
