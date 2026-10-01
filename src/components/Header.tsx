import Link from "next/link";
import { profile, sections } from "@/data/portfolio";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-comfortaa)] text-base font-light lowercase leading-none tracking-[-0.01em] text-foreground transition-colors hover:text-accent"
        >
          {profile.wordmark}
        </Link>
        <nav className="hidden items-center gap-5 sm:flex lg:gap-8">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`/projets/${s.id}`}
              className="whitespace-nowrap text-[0.62rem] uppercase tracking-[0.26em] text-muted transition-colors hover:text-accent"
            >
              {s.name}
            </Link>
          ))}
          <a
            href="#contacts"
            className="whitespace-nowrap text-[0.62rem] uppercase tracking-[0.26em] text-muted transition-colors hover:text-accent"
          >
            Contact
          </a>
        </nav>
        <MobileMenu items={sections.map((s) => ({ id: s.id, name: s.name }))} />
      </div>
    </header>
  );
}
