"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

import { education, recognition } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";

function CourseBars() {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <ul ref={ref} className="mt-6 space-y-4">
      {education.university.courses.map((course, i) => (
        <li key={course.code}>
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-foreground/90">
              {course.name}
              <span className="ml-2 text-xs text-muted-foreground">{course.code}</span>
            </span>
            <span className="font-display font-bold text-primary">{course.mark}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: reduce ? `${course.mark}%` : 0 }}
              animate={inView ? { width: `${course.mark}%` } : undefined}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Education & recognition"
          title="The foundation"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {education.university.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {education.university.degree} · {education.university.period}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {education.university.detail}
              </p>
              <CourseBars />
              <div className="mt-8 border-t border-border pt-5">
                <h4 className="font-display text-sm font-bold">{education.school.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{education.school.detail}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  Leadership & recognition
                </h3>
              </div>
              <ul className="mt-6 space-y-5">
                {recognition.map((item, i) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="font-display text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-6">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
