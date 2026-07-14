"use client";

import Link from "next/link";
import { FileDown } from "lucide-react";

import { profile } from "@/data/resume";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-border bg-background/70 py-1.5 pl-4 pr-1.5 backdrop-blur-md sm:py-2 sm:pl-5 sm:pr-2">
        <Link
          href="#top"
          className="shrink-0 font-display text-sm font-bold tracking-tight"
          aria-label="Back to top"
        >
          AK<span className="text-primary">.</span>
        </Link>

        <nav
          className="flex min-w-0 items-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1"
          aria-label="Sections"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground sm:px-3 sm:text-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.links.cv}
          download
          className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85 sm:gap-2 sm:px-4 sm:text-sm"
        >
          <FileDown className="h-4 w-4" />
          CV
        </a>
      </div>
    </header>
  );
}
