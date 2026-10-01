import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <footer
      id="contacts"
      className="mt-auto scroll-mt-20 border-t border-border/60 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-14">
          <b>03</b> — contact <i />
        </p>

        <h2 className="font-wordmark text-[clamp(2rem,7vw,4.6rem)]">contacts</h2>

        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-2">
          <a
            href={`mailto:${profile.email}`}
            className="text-[0.86rem] tracking-[0.1em] text-foreground/80 transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
          <a
            href={`tel:+33${profile.phone.replace(/\s|^0/g, "")}`}
            className="text-[0.86rem] tracking-[0.1em] text-foreground/80 transition-colors hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-border pt-7 text-[0.56rem] uppercase tracking-[0.26em] text-muted/70">
          <span>© {new Date().getFullYear()} Paul Hivert</span>
          <span>Saint-Nazaire — Nantes</span>
        </div>
      </div>
    </footer>
  );
}
