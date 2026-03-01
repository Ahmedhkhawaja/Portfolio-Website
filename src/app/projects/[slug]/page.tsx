import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, ExternalLink, FileText, Github, Lock, Play } from "lucide-react";

import { YouTubeLite } from "@/components/youtube-lite";
import { SectionHeading } from "@/components/section-heading";
import { TagList } from "@/components/tag-list";
import { ProjectCard } from "@/components/projects/project-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, getSortedProjects, projects } from "@/data/projects";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-AU", { year: "numeric", month: "short" }).format(
    new Date(iso),
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const p = getProjectBySlug(slug);
  if (!p) return {};

  return {
    title: p.title,
    description: p.description,
    openGraph: {
      title: p.title,
      description: p.description,
      type: "article",
      url: `/projects/${p.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const more = getSortedProjects(projects)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <FadeIn className="py-12 sm:py-16">
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {project.categories.join(" · ")}
            </p>
            {project.status ? (
              <Badge
                variant={project.status === "In Progress" ? "secondary" : "outline"}
                className="h-6 rounded-full px-2 text-[11px]"
              >
                {project.status}
              </Badge>
            ) : null}
          </div>
          <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden />
              <span>{formatDate(project.date)}</span>
            </span>
            {project.timeframe ? <span>• {project.timeframe}</span> : null}
            {project.role ? <span>• {project.role}</span> : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.githubUrl ? (
              <Button asChild size="sm" variant="secondary" className="rounded-xl">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub{" "}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : project.githubPrivate ? (
              <Button
                size="sm"
                variant="outline"
                className="rounded-xl"
                disabled
                aria-disabled="true"
              >
                <Lock className="mr-2 h-4 w-4" />
                GitHub (Private)
              </Button>
            ) : null}
            {project.liveUrl ? (
              <Button asChild size="sm" className="rounded-xl">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live{" "}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : null}
            {project.youtubeUrl ? (
              <Button asChild size="sm" variant="outline" className="rounded-xl">
                <a href="#video-demo">
                  <Play className="mr-2 h-4 w-4" />
                  Video demo
                </a>
              </Button>
            ) : null}
            {project.docsUrl ? (
              <Button asChild size="sm" variant="outline" className="rounded-xl">
                <a href={project.docsUrl} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Docs{" "}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        <TagList tags={project.techStack} />
      </div>

      <Separator className="my-12 sm:my-16" />

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="space-y-10">
            {project.body.sections.map((s) => (
              <section key={s.title} className="space-y-3">
                <h2 className="font-display text-xl tracking-tight sm:text-2xl">
                  {s.title}
                </h2>
                <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="sticky top-24 space-y-4 rounded-2xl border border-border/70 bg-card/60 p-5">
            <p className="text-sm font-medium">Explore</p>
            <div className="grid gap-2 text-sm">
              <Link className="text-muted-foreground hover:text-foreground" href="/projects">
                All projects
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="/#contact">
                Contact
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {project.youtubeUrl ? (
        <section id="video-demo" className="mt-12 scroll-mt-24 sm:mt-16">
          <SectionHeading
            eyebrow="Demo"
            title="Video walkthrough"
            description="A quick look at the experience and key flows."
          />
          <div className="mt-6">
            <YouTubeLite url={project.youtubeUrl} title={project.title} />
          </div>
        </section>
      ) : null}

      {project.images?.length ? (
        <section className="mt-12 sm:mt-16">
          <SectionHeading
            eyebrow="Screens"
            title="Screenshots"
            description="Selected screens and details."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.images.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border/70 bg-muted"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <Separator className="my-12 sm:my-16" />

      <section>
        <SectionHeading
          eyebrow="More"
          title="More projects"
          description="A few other recent builds."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}

