"use client";

import * as React from "react";
import { Search } from "lucide-react";

import type { Project, ProjectCategory } from "@/data/projects";
import { categories, getSortedProjects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/projects/project-card";

function matchesQuery(project: Project, query: string) {
  if (!query) return true;
  const q = query.toLowerCase().trim();
  if (!q) return true;

  const haystack = [
    project.title,
    project.description,
    ...project.categories,
    ...project.techStack,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}

export function ProjectsGrid({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  const [category, setCategory] = React.useState<"All" | ProjectCategory>("All");
  const [query, setQuery] = React.useState("");

  const sorted = React.useMemo(() => getSortedProjects(projects), [projects]);

  const filtered = React.useMemo(() => {
    return sorted.filter((p) => {
      const categoryOk =
        category === "All" ? true : p.categories.includes(category);
      return categoryOk && matchesQuery(p, query);
    });
  }, [sorted, category, query]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "border-primary/30 bg-primary/10 text-foreground"
                    : "border-border/70 bg-background hover:bg-muted",
                )}
                aria-pressed={active}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="w-full sm:max-w-sm">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              className="pl-9"
              aria-label="Search projects"
            />
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary" className="rounded-full">
              Sorted
            </Badge>
            <span>Featured first, then most recent</span>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border/70 bg-card/60 p-10 text-center">
          <p className="font-medium">No projects found.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different category or a shorter search query.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}

