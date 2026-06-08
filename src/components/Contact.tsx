import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <footer
      id="contacts"
      className="mt-auto scroll-mt-20 border-t border-border/60 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-wordmark text-6xl font-extrabold leading-none tracking-[-0.02em] sm:text-8xl">
          contacts
        </h2>
        <div className="mt-8 space-y-1">
          <a
            href={`mailto:${profile.email}`}
            className="block text-lg font-light text-muted transition-colors hover:text-foreground sm:text-xl"
          >
            {profile.email}
          </a>
          <a
            href={`tel:+33${profile.phone.replace(/\s|^0/g, "")}`}
            className="block text-lg font-light text-muted transition-colors hover:text-foreground sm:text-xl"
          >
            {profile.phone}
          </a>
        </div>

        <p className="mt-20 text-xs font-light text-muted/70">
          © {new Date().getFullYear()} Paul Hivert — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
