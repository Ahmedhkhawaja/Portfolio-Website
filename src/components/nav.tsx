"use client";

import { FileDown } from "lucide-react";

import { profile } from "@/data/resume";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#map", label: "Map" },
  { href: "#work", label: "Work" },
  { href: "#trophies", label: "Trophies" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="px mx-auto flex max-w-3xl items-center justify-between gap-2 bg-background/85 py-2 pl-4 pr-2 backdrop-blur-md">
        <a href="#top" className="shrink-0 font-pixel text-lg font-bold" aria-label="Back to top">
          AK<span className="blink text-primary">_</span>
        </a>

        <nav
          className="flex min-w-0 items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Sections"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap px-2.5 py-1.5 font-pixel text-sm text-muted-foreground transition-colors duration-150 hover:text-primary sm:px-3 sm:text-base"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.links.cv}
          download
          className="px px-btn inline-flex shrink-0 items-center gap-1.5 bg-primary px-3 py-1.5 font-pixel text-sm font-semibold text-primary-foreground [--px-c:var(--primary)]"
        >
          <FileDown className="h-4 w-4" />
          CV
        </a>
      </div>
    </header>
  );
}
