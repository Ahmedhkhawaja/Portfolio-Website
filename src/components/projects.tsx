"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projectTags, projects, type Project, type ProjectTag } from "@/data/resume";
import { SectionHeading } from "@/components/reveal";
import { StatusBadge, TechChips } from "@/components/project-bits";
import { useOpenProject } from "@/components/project-dialog";

function ProjectImage({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <div
      className="relative h-full min-h-44 w-full overflow-hidden"
      style={{ backgroundColor: project.imageBg ?? "var(--muted)" }}
    >
      <Image
        src={project.image}
        alt=""
        fill
        sizes={sizes}
        unoptimized={project.image.endsWith(".gif")}
        className={`transition-transform duration-300 ease-out group-hover:scale-[1.04] ${
          project.imageFit === "contain" ? "object-contain p-5" : "object-cover object-top"
        }`}
      />
    </div>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const openProject = useOpenProject();

  return (
    <article
      className={`px px-lift group relative flex h-full flex-col bg-card ${
        featured ? "sm:grid sm:grid-cols-2" : ""
      }`}
    >
      <div className={featured ? "aspect-[16/10] sm:aspect-auto" : "aspect-[16/10]"}>
        <ProjectImage
          project={project}
          sizes={featured ? "(max-width: 640px) 100vw, 560px" : "(max-width: 640px) 100vw, 380px"}
        />
      </div>

      <div className={`flex flex-1 flex-col p-5 ${featured ? "sm:p-7" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge project={project} />
          <span className="ml-auto font-arcade text-[10px] text-muted-foreground">{project.year}</span>
        </div>

        <h3 className={`mt-3 font-pixel font-bold ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
          <button
            type="button"
            onClick={() => openProject(project.slug)}
            className="cursor-pointer text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </button>
        </h3>
        <p className={`mt-2 text-muted-foreground ${featured ? "text-base leading-7" : "text-sm leading-6"}`}>
          {project.tagline}
        </p>

        <div className="mt-4">
          <TechChips tech={project.tech} limit={featured ? undefined : 3} />
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="font-pixel text-sm text-primary transition-transform duration-150 group-hover:translate-x-1">
            Details ▶
          </span>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-primary"
            >
              {featured && project.liveLabel ? project.liveLabel : "Open"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [tag, setTag] = useState<ProjectTag | "all">("all");
  const shown = tag === "all" ? projects : projects.filter((p) => p.tags.includes(tag));

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          level="1"
          eyebrow="Projects"
          title="Pick a project"
          description="Apps, AI and websites I've built. Tap any card for the details."
        />

        <div role="tablist" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-3">
          {projectTags.map((t) => {
            const count =
              t.id === "all" ? projects.length : projects.filter((p) => p.tags.includes(t.id as ProjectTag)).length;
            const active = tag === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTag(t.id)}
                className={`px px-btn cursor-pointer px-4 py-2 font-pixel text-base ${
                  active
                    ? "bg-primary text-primary-foreground [--px-c:var(--primary)]"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label} <span className="opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className={i === 0 && p.badge ? "sm:col-span-2" : ""}
              >
                <ProjectCard project={p} featured={i === 0 && Boolean(p.badge)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
