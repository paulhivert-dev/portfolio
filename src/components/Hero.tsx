import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[78vh] items-center px-6 sm:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="font-brush text-7xl leading-none sm:text-9xl">
          {profile.wordmark}
        </h1>
        <p className="mt-6 text-base font-light tracking-wide text-muted sm:text-lg">
          {profile.role.join("  ·  ")}
        </p>
      </div>
      <a
        href="#a-propos"
        aria-label="Défiler"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-opacity hover:opacity-60"
      >
        ↓
      </a>
    </section>
  );
}
