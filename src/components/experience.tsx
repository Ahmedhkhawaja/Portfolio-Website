import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { experience } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";
import { TechChips } from "@/components/project-bits";
import { Stats } from "@/components/stats";

export function Experience() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          level="3"
          eyebrow="Work"
          title="Where I've worked"
          description="Real jobs, real users, real results."
        />

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08} className="h-full">
              <article className="px flex h-full flex-col bg-card p-6">
                <div className="flex items-center gap-4">
                  <span
                    className="px relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden"
                    style={{ backgroundColor: job.logoBg }}
                  >
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={56}
                      height={56}
                      className="h-12 w-12 object-contain"
                    />
                  </span>
                  <p className="text-sm font-semibold text-sky">{job.period}</p>
                </div>
                <h3 className="mt-5 font-pixel text-2xl font-bold leading-tight">{job.role}</h3>
                <p className="mt-1 font-semibold text-primary">
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      {job.company} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/90">{job.summary}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <TechChips tech={job.tech} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Stats />
      </div>
    </section>
  );
}
