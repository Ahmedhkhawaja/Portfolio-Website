import { Card, CardContent } from "@/components/ui/card";

const bulletClass =
  "relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            About
          </p>
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            About
          </h2>
          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            I&apos;m a Software Engineering student at UNSW Sydney focused on
            building scalable full-stack applications and real-world software
            systems.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Card className="rounded-2xl border-border/70 bg-card/70 py-0 gap-0">
            <CardContent className="p-5 sm:p-6">
              <p className="font-medium tracking-tight">Experience</p>
              <div className="mt-3 grid gap-2">
                <p className={bulletClass}>
                  Software Engineering Intern, Nextbridge
                </p>
                <p className={bulletClass}>
                  Founder, Sydney Design &amp; Development
                </p>
                <p className={bulletClass}>
                  Project Engineer, ServiceUNSW VIP
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/70 bg-card/70 py-0 gap-0">
            <CardContent className="p-5 sm:p-6">
              <p className="font-medium tracking-tight">Technical</p>
              <div className="mt-3 grid gap-2">
                <p className={bulletClass}>React, Next.js, Node.js, MongoDB</p>
                <p className={bulletClass}>PostgreSQL, REST APIs</p>
                <p className={bulletClass}>Stripe (payments)</p>
                <p className={bulletClass}>
                  Cloud deployment (Vercel, Render, AWS)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/70 bg-card/70 py-0 gap-0">
            <CardContent className="p-5 sm:p-6">
              <p className="font-medium tracking-tight">Leadership &amp; Recognition</p>
              <div className="mt-3 grid gap-2">
                <p className={bulletClass}>
                  FinTech Judge, Aitchison Business Concept 2026
                </p>
                <p className={bulletClass}>
                  General Secretary, Computer Society, Aitchison College
                </p>
                <p className={bulletClass}>Robotics &amp; Programming Instructor</p>
                <p className={bulletClass}>
                  Top 13 nationally, Bebras Informatics Contest
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/70 bg-card/70 py-0 gap-0">
            <CardContent className="p-5 sm:p-6">
              <p className="font-medium tracking-tight">Status</p>
              <div className="mt-3 grid gap-2">
                <p className={bulletClass}>Sydney, Australia</p>
                <p className={bulletClass}>Full work rights</p>
                <p className={bulletClass}>
                  Seeking Software Engineering Internships
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

