"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

import { profile } from "@/data/resume";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[120px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 lg:px-8"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Ahmed Hassan
            <br />
            <span className="text-primary">Khawaja</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-lg font-semibold tracking-wide text-foreground sm:text-xl"
          >
            {profile.role}
            <span className="mx-3 text-muted-foreground">·</span>
            <span className="text-muted-foreground">{profile.location}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85"
            >
              See my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium transition-colors duration-200 hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#numbers"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors duration-200 hover:text-primary"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
