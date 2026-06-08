import Link from "next/link";
import { profile, sections } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-wordmark text-xl font-extrabold tracking-[-0.02em] leading-none transition-opacity hover:opacity-60"
        >
          {profile.wordmark}
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`/projets/${s.id}`}
              className="text-sm font-light capitalize text-muted transition-colors hover:text-foreground"
            >
              {s.name}
            </Link>
          ))}
          <a
            href="#contacts"
            className="text-sm font-light text-muted transition-colors hover:text-foreground"
          >
            Contacts
          </a>
        </nav>
        <a
          href="#contacts"
          className="text-sm font-light text-muted transition-colors hover:text-foreground sm:hidden"
        >
          Contacts
        </a>
      </div>
    </header>
  );
}
