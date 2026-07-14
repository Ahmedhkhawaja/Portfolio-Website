"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { experience } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.7"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I have worked"
          description="From shipping AI pipelines in industry to founding my own studio."
        />

        <div ref={ref} className="relative mt-10 sm:mt-16">
          {/* Timeline rail that fills as you scroll */}
          <div className="absolute left-2 top-0 h-full w-px bg-border sm:left-3" aria-hidden>
            <motion.div
              className="h-full w-px origin-top bg-primary"
              style={{ scaleY }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {experience.map((job) => (
              <Reveal key={job.company} className="relative pl-8 sm:pl-16">
                <span
                  aria-hidden
                  className="absolute left-2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background sm:left-3"
                />

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-base font-medium text-primary">
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex cursor-pointer items-center gap-1 transition-opacity duration-200 hover:opacity-80"
                    >
                      {job.company} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    job.company
                  )}
                </p>

                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                  {job.summary}
                </p>

                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
