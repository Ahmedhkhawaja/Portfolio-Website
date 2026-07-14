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
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-border bg-background/70 py-2 pl-5 pr-2 backdrop-blur-md">
        <Link
          href="#top"
          className="font-display text-sm font-bold tracking-tight"
          aria-label="Back to top"
        >
          AK<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.links.cv}
          download
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85"
        >
          <FileDown className="h-4 w-4" />
          CV
        </a>
      </div>
    </header>
  );
}
