import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { FadeIn } from "@/components/motion/fade-in";
import { getSortedProjects, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated set of web, mobile, backend, and university projects.",
};

export default function ProjectsPage() {
  const list = getSortedProjects(projects);

  return (
    <FadeIn className="py-12 sm:py-16">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="A small collection of builds across web, mobile, backend, and university work - searchable and filterable."
      />
      <ProjectsGrid projects={list} className="mt-8" />
    </FadeIn>
  );
}

