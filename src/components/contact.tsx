"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";

import { profile } from "@/data/resume";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/pixel";
import { Snake } from "@/components/snake";

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
    <div className="px flex items-center justify-between gap-3 bg-card px-4 py-3">
      <a
        href={href}
        className="flex min-w-0 items-center gap-3 transition-colors duration-150 hover:text-primary"
      >
        <span className="text-primary">{icon}</span>
        <span className="truncate text-sm font-medium">{value}</span>
      </a>
      <button
        type="button"
        aria-label={`Copy ${label}`}
        className="cursor-pointer bg-muted p-2.5 text-muted-foreground transition-colors duration-150 hover:text-primary"
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
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_30%_40%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Eyebrow>Final level · Contact</Eyebrow>
          <h2 className="mt-3 font-pixel text-5xl font-bold leading-tight sm:text-6xl">
            Player 2,
            <br />
            <span className="text-primary">join the game?</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            Got a role, a project or just want to chat? Send me a message. I reply fast.
          </p>

          <div className="mt-8 grid max-w-md gap-4">
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

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px px-btn inline-flex items-center gap-2 bg-primary px-5 py-2.5 font-pixel font-semibold text-primary-foreground [--px-c:var(--primary)]"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="px px-btn inline-flex items-center gap-2 bg-card px-5 py-2.5 font-pixel"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-center font-pixel text-sm text-muted-foreground">
            Bonus level: take a quick break
          </p>
          <Snake />
        </Reveal>
      </div>
    </section>
  );
}
