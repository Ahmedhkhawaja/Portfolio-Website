"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { ArrowUpRight, Github, X } from "lucide-react";

import { projects, type Project } from "@/data/resume";
import { StatusBadge, TechChips } from "@/components/project-bits";

const OpenProjectContext = createContext<(slug: string) => void>(() => {});

export function useOpenProject() {
  return useContext(OpenProjectContext);
}

export function ProjectDialogProvider({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const open = useCallback((s: string) => setSlug(s), []);
  const project = projects.find((p) => p.slug === slug);

  return (
    <OpenProjectContext.Provider value={open}>
      {children}
      <Dialog.Root open={Boolean(project)} onOpenChange={(o) => !o && setSlug(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
          <Dialog.Content className="px fixed left-1/2 top-1/2 z-50 max-h-[88svh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-card focus:outline-none">
            {project ? <ProjectDetail project={project} /> : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </OpenProjectContext.Provider>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <div
        className="relative aspect-[16/9] w-full overflow-hidden"
        style={{ backgroundColor: project.imageBg ?? "var(--muted)" }}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, 576px"
          unoptimized={project.image.endsWith(".gif")}
          className={project.imageFit === "contain" ? "object-contain p-4" : "object-cover"}
        />
        <Dialog.Close
          aria-label="Close"
          className="px px-btn absolute right-4 top-4 grid h-9 w-9 cursor-pointer place-items-center bg-background/90 text-foreground"
        >
          <X className="h-4 w-4" />
        </Dialog.Close>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge project={project} />
          <span className="font-arcade text-[10px] text-muted-foreground">{project.year}</span>
        </div>

        <Dialog.Title className="mt-3 font-pixel text-3xl font-bold">{project.title}</Dialog.Title>
        <Dialog.Description className="mt-3 text-base leading-7 text-muted-foreground">
          {project.about}
        </Dialog.Description>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-6">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <TechChips tech={project.tech} />
        </div>

        {project.liveUrl || project.githubUrl ? (
          <div className="mt-7 flex flex-wrap gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px px-btn inline-flex items-center gap-2 bg-primary px-5 py-2.5 font-pixel font-semibold text-primary-foreground [--px-c:var(--primary)]"
              >
                {project.liveLabel ?? "Visit live site"} <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px px-btn inline-flex items-center gap-2 bg-muted px-5 py-2.5 font-pixel"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}
