"use client";

import Image from "next/image";
import { ArrowUpRight, Award, Github } from "lucide-react";

import { projects, type Project } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) return null;
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
        live
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-muted text-muted-foreground"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-primary" : "bg-muted-foreground"}`} />
      {status}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85"
        >
          Visit live site <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-primary/50 hover:text-primary"
        >
          <Github className="h-4 w-4" /> Code
        </a>
      ) : null}
    </div>
  );
}

function TechChips({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article
        className={`group grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20" />
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1200}
            height={750}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {project.year}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h3>

          {project.award ? (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300">
              <Award className="h-3.5 w-3.5" /> {project.award}
            </p>
          ) : null}

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-primary/70" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <TechChips tech={project.tech} />
          </div>

          <div className="mt-6">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-200 hover:border-primary/40">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={800}
          height={500}
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-bold tracking-tight">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4">
          <TechChips tech={project.tech} />
        </div>
        <div className="mt-auto flex items-center gap-4 pt-5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary transition-opacity duration-200 hover:opacity-80"
            >
              Live site <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Things I have built"
          description="Award winning university projects, live products for real businesses, and systems running in production today."
        />

        <div className="mt-16 space-y-24">
          {featured.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-24">
          <h3 className="font-display text-xl font-bold tracking-tight text-muted-foreground">
            More builds
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <CompactProject project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
