"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className={cn("h-full", className)}
    >
      <Card className="group h-full gap-0 overflow-hidden rounded-2xl border-border/70 bg-card/80 py-0 shadow-sm transition-shadow hover:shadow-md">
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            "flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
          aria-label={`Open project: ${project.title}`}
        >
          <div className="relative aspect-16/10 shrink-0 overflow-hidden bg-muted">
            <Image
              src={project.thumbnail}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/35 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <CardContent className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
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
                <h3 className="mt-1 line-clamp-2 font-display text-lg tracking-tight">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-80" />
            </div>
            <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}

