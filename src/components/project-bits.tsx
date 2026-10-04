import type { Project } from "@/data/resume";

/** Status and award pills, shown on cards and in the detail view. */
export function StatusBadge({ project }: { project: Project }) {
  return (
    <>
      {project.badge ? (
        <span className="bg-pink px-2 py-0.5 font-pixel text-xs font-bold uppercase text-background">
          {project.badge}
        </span>
      ) : null}
      {project.award ? (
        <span className="bg-gold px-2 py-0.5 font-pixel text-xs font-bold uppercase text-background">
          ★ {project.award}
        </span>
      ) : null}
      {project.status === "Live" ? (
        <span className="inline-flex items-center gap-1.5 bg-primary px-2 py-0.5 font-pixel text-xs font-bold uppercase text-primary-foreground">
          <span className="blink h-1.5 w-1.5 bg-primary-foreground" /> Live
        </span>
      ) : project.status === "In progress" ? (
        <span className="bg-sky px-2 py-0.5 font-pixel text-xs font-bold uppercase text-background">
          Building
        </span>
      ) : null}
    </>
  );
}

export function TechChips({ tech, limit }: { tech: string[]; limit?: number }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  const more = tech.length - shown.length;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <li key={t} className="bg-muted px-2 py-1 text-xs text-muted-foreground">
          {t}
        </li>
      ))}
      {more > 0 ? <li className="px-1 py-1 text-xs text-muted-foreground">+{more}</li> : null}
    </ul>
  );
}
