"use client";

import { useState } from "react";

type Software = { name: string; level: number };

function Pill({ name, level }: Software) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${name} — niveau ${level}%`}
        className="block rounded-full border border-border px-4 py-1.5 text-left transition-colors hover:border-accent/55 hover:bg-accent/5"
      >
        <span className="flex items-center gap-2 text-[0.72rem] tracking-[0.1em] text-foreground/85">
          {name}
          {open && (
            <span className="text-[0.64rem] tracking-[0.12em] tabular-nums text-accent">{level}%</span>
          )}
        </span>
        {open && (
          <span
            className="mt-2.5 block overflow-hidden"
            style={{ animation: "reveal-bar 0.25s ease both" }}
          >
            <span className="block h-px w-full min-w-[120px] bg-fog/25">
              <span
                className="block h-full bg-accent"
                style={
                  {
                    "--lvl": `${level}%`,
                    width: `${level}%`,
                    animation: "grow-bar 0.5s ease both",
                  } as React.CSSProperties
                }
              />
            </span>
          </span>
        )}
      </button>
    </li>
  );
}

export default function SoftwarePills({ software }: { software: Software[] }) {
  return (
    <ul className="mt-5 flex flex-wrap items-start gap-2.5">
      {software.map((s) => (
        <Pill key={s.name} {...s} />
      ))}
    </ul>
  );
}
