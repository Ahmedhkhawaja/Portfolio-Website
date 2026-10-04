"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { achievements, education, type Achievement } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Trophy } from "@/components/pixel";
import { useOpenProject } from "@/components/project-dialog";

const tierColour: Record<Achievement["tier"], string> = {
  gold: "text-gold",
  silver: "text-slate-300",
  bronze: "text-[#f0a46b]",
};

function AchievementTile({ a }: { a: Achievement }) {
  const openProject = useOpenProject();
  const body = (
    <>
      <span className="grid h-14 w-14 shrink-0 place-items-center bg-muted">
        <Trophy tier={a.tier} size={32} />
      </span>
      <span className="min-w-0 text-left">
        <span className={`block font-pixel text-xs uppercase tracking-[0.15em] ${tierColour[a.tier]}`}>
          Achievement unlocked
        </span>
        <span className="mt-0.5 block font-semibold leading-snug">{a.title}</span>
        <span className="mt-0.5 block text-sm leading-5 text-muted-foreground">{a.detail}</span>
      </span>
    </>
  );

  const className = "px flex h-full w-full items-center gap-4 bg-card p-4";
  return a.project ? (
    <button
      type="button"
      onClick={() => openProject(a.project!)}
      className={`${className} px-lift cursor-pointer`}
    >
      {body}
    </button>
  ) : (
    <div className={className}>{body}</div>
  );
}

function GradeBars() {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <ul ref={ref} className="mt-5 space-y-3.5">
      {education.university.courses.map((c, i) => (
        <li key={c.code}>
          <div className="flex items-baseline justify-between text-sm">
            <span>
              {c.name} <span className="text-xs text-muted-foreground">{c.code}</span>
            </span>
            <span className="font-arcade text-xs text-primary">{c.mark}</span>
          </div>
          <div className="mt-1.5 h-3 bg-muted p-0.5">
            <motion.div
              className="h-full bg-[repeating-linear-gradient(90deg,var(--primary)_0_8px,transparent_8px_10px)]"
              initial={{ width: reduce ? `${c.mark}%` : 0 }}
              animate={inView ? { width: `${c.mark}%` } : undefined}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Trophies() {
  return (
    <section id="trophies" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          level="4"
          eyebrow="Trophies"
          title="Wins & school"
          description="Awards, leadership, and where I study."
        />

        <div className="mt-10 grid gap-7 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid content-start gap-5 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05} className="h-full">
                <AchievementTile a={a} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="px bg-card p-6">
              <p className="font-pixel text-xs uppercase tracking-[0.2em] text-muted-foreground">Save file</p>
              <h3 className="mt-2 font-pixel text-2xl font-bold">{education.university.name}</h3>
              <p className="text-sm text-foreground/90">
                {education.university.degree} · {education.university.period}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{education.university.detail}</p>
              <GradeBars />
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{education.school.name}</p>
                <p className="text-sm text-muted-foreground">{education.school.detail}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
