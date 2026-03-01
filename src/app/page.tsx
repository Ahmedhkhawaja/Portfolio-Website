import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { ContactCards } from "@/components/contact-cards";
import { FadeIn } from "@/components/motion/fade-in";
import { AboutSection } from "@/components/about-section";
import { getSortedProjects, projects } from "@/data/projects";

export default function Home() {
  const deployed = getSortedProjects(projects)
    .filter((p) => Boolean(p.liveUrl))
    .slice(0, 4);

  return (
    <FadeIn className="py-12 sm:py-16">
      <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-8 shadow-sm sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_0%_0%,hsl(262_70%_55%/0.18),transparent_55%),radial-gradient(60%_45%_at_100%_10%,hsl(285_80%_70%/0.14),transparent_60%)]" />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Available • Full work rights in Australia</span>
          </div>

          <h1 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl">
            Ahmed Hassan{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Khawaja
            </span>
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Second-year Software Engineering student at UNSW Sydney.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-xl">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-xl">
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Live"
            title="Deployed Projects"
            description="A small selection of work you can open and use right now."
          />
          <Button asChild variant="ghost" className="hidden rounded-xl sm:inline-flex">
            <Link href="/projects">All projects</Link>
          </Button>
        </div>
        {deployed.length ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deployed.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-8">
            <p className="font-medium">No deployed projects listed.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add a <span className="font-medium">liveUrl</span> in{" "}
              <span className="font-medium">src/data/projects.ts</span>.
            </p>
          </div>
        )}
      </section>

      <Separator className="my-12 sm:my-16" />

      <AboutSection />

      <Separator className="my-12 sm:my-16" />

      <section id="contact" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="The quickest way to reach me is email or LinkedIn. No contact form, just direct links."
        />
        <ContactCards className="mt-8" />
      </section>
    </FadeIn>
  );
}
