"use client";

import { experience, projects } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Sprite, sprites, Trophy } from "@/components/pixel";
import { useOpenProject } from "@/components/project-dialog";

type Stop =
  | { kind: "job"; key: string; label: string; sub: string }
  | { kind: "project"; key: string; label: string; sub: string; award: boolean };

const years = [...new Set([...projects.map((p) => p.year), ...experience.map((e) => e.year)])].sort();

const worlds = years.map((year) => {
  const stops: Stop[] = [
    ...experience
      .filter((e) => e.year === year)
      .map((e): Stop => ({ kind: "job", key: e.company, label: e.company, sub: e.role })),
    ...projects
      .filter((p) => p.year === year)
      .map(
        (p): Stop => ({
          kind: "project",
          key: p.slug,
          label: p.title,
          sub: p.award ?? (p.status === "Live" ? "Live" : p.status),
          award: Boolean(p.award),
        }),
      ),
  ];
  return { year, stops };
});

function StopButton({ stop }: { stop: Stop }) {
  const openProject = useOpenProject();
  const isJob = stop.kind === "job";

  return (
    <li>
      <a
        href={isJob ? "#work" : `#projects`}
        onClick={(e) => {
          if (isJob) return;
          e.preventDefault();
          openProject(stop.key);
        }}
        className={`group flex items-center gap-3 border-l-4 bg-muted/70 px-3 py-2.5 transition-colors duration-150 hover:bg-muted ${
          isJob ? "border-sky" : stop.award ? "border-gold" : "border-primary"
        }`}
      >
        <span className="shrink-0">
          {isJob ? (
            <Sprite sprite={sprites.briefcase} size={18} />
          ) : stop.award ? (
            <Trophy tier="gold" size={18} />
          ) : (
            <Sprite sprite={sprites.star} size={18} />
          )}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold group-hover:text-primary">{stop.label}</span>
          <span className="block truncate text-xs text-muted-foreground">{stop.sub}</span>
        </span>
      </a>
    </li>
  );
}

export function Journey() {
  const last = worlds.length - 1;

  return (
    <section id="map" className="scroll-mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          level="2"
          eyebrow="Map"
          title="My journey so far"
          description="Everything I've built and worked on, one year at a time."
        />

        <ul className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Sprite sprite={sprites.star} size={14} /> Project
          </li>
          <li className="flex items-center gap-2">
            <Sprite sprite={sprites.briefcase} size={14} /> Job
          </li>
          <li className="flex items-center gap-2">
            <Trophy tier="gold" size={14} /> Award
          </li>
        </ul>

        <div className="relative mt-10">
          {/* Dashed path linking the worlds */}
          <div
            aria-hidden
            className="absolute left-[18px] top-0 h-full border-l-4 border-dashed border-line md:left-0 md:top-7 md:h-0 md:w-full md:border-l-0 md:border-t-4"
          />

          <div className="relative grid gap-8 md:grid-cols-3 md:gap-7">
            {worlds.map((w, i) => (
              <Reveal key={w.year} delay={i * 0.1} className="relative pl-14 md:pl-0">
                <div>
                  <div className="flex items-center">
                    <span
                      className={`px grid h-14 w-14 shrink-0 place-items-center font-arcade text-sm max-md:absolute max-md:left-0 max-md:h-10 max-md:w-10 max-md:text-xs ${
                        i === last ? "bg-primary text-primary-foreground [--px-c:var(--primary)]" : "bg-card"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {/* Solid backing so the dashed path stops short of the label */}
                    <div className="bg-surface py-1 pl-4 pr-5">
                      <p className="font-pixel text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        World {i + 1}
                      </p>
                      <p className="mt-1 font-arcade text-lg">{w.year}</p>
                    </div>
                    {i === last ? (
                      <span className="ml-auto flex items-center gap-2 bg-surface py-1 pl-4 font-pixel text-xs text-primary">
                        You are here
                        <Sprite sprite={sprites.player} size={28} className="bob" />
                      </span>
                    ) : null}
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {w.stops.map((s) => (
                      <StopButton key={s.key} stop={s} />
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
