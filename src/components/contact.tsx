"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";

import { profile } from "@/data/resume";
import { Reveal } from "@/components/reveal";

function CopyRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4">
      <a
        href={href}
        className="flex min-w-0 cursor-pointer items-center gap-3 transition-colors duration-200 hover:text-primary"
      >
        <span className="text-primary">{icon}</span>
        <span className="truncate text-sm font-medium">{value}</span>
      </a>
      <button
        type="button"
        aria-label={`Copy ${label}`}
        className="cursor-pointer rounded-full border border-border p-2.5 text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
          } catch {
            // Clipboard unavailable; the value is visible for manual copy.
          }
        }}
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            05 · Contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-7xl">
            Let&apos;s build
            <br />
            <span className="text-primary">something real</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            The quickest way to reach me is email or LinkedIn. I am always happy
            to talk about internships, projects, or interesting problems.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-xl gap-4 text-left">
            <CopyRow
              icon={<Mail className="h-5 w-5" />}
              label="email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <CopyRow
              icon={<Phone className="h-5 w-5" />}
              label="phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
