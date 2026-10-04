"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";

import { achievements, experience, profile, projects } from "@/data/resume";
import { Sprite, sprites, type SpriteDef } from "@/components/pixel";
import { useOpenProject } from "@/components/project-dialog";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const stars = [
  { top: "14%", left: "8%", delay: "0s" },
  { top: "22%", left: "46%", delay: "1.2s" },
  { top: "68%", left: "4%", delay: "0.6s" },
  { top: "80%", left: "52%", delay: "1.8s" },
  { top: "30%", left: "92%", delay: "0.3s" },
  { top: "88%", left: "86%", delay: "2.1s" },
];

const playerStats: { label: string; value: number; sprite: SpriteDef }[] = [
  { label: "Projects", value: projects.length, sprite: sprites.star },
  { label: "Live now", value: projects.filter((p) => p.status === "Live").length, sprite: sprites.heart },
  { label: "Trophies", value: achievements.length, sprite: sprites.trophy },
  { label: "Jobs", value: experience.length, sprite: sprites.briefcase },
];

function PlayerCard() {
  const openProject = useOpenProject();

  return (
    <div className="px relative mx-auto w-full max-w-sm bg-card p-6">
      <div className="flex items-center justify-between font-pixel text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>Player 1</span>
        <span className="text-primary">● Online</span>
      </div>

      <div className="mt-5 flex items-center gap-5">
        <div className="px grid h-24 w-24 shrink-0 place-items-center bg-muted">
          <Sprite sprite={sprites.player} size={64} className="bob" title="Pixel Ahmed" />
        </div>
        <div>
          <p className="font-pixel text-2xl font-bold leading-tight">Ahmed</p>
          <p className="mt-1 text-sm text-muted-foreground">Class: {profile.role}</p>
          <p className="text-sm text-muted-foreground">Guild: UNSW Sydney</p>
        </div>
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-3">
        {playerStats.map((s) => (
          <li key={s.label} className="flex items-center gap-3 bg-muted px-3 py-2.5">
            <Sprite sprite={s.sprite} size={20} />
            <div>
              <p className="font-arcade text-base leading-none">{s.value}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{s.label}</p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openProject("uniblud")}
        className="mt-5 flex w-full cursor-pointer items-center justify-between gap-3 border border-dashed border-primary/40 px-3 py-2.5 text-left text-sm transition-colors duration-150 hover:bg-primary/10"
      >
        <span className="text-muted-foreground">
          Now playing: <span className="font-semibold text-foreground">UniBlud</span>
        </span>
        <span className="font-pixel text-primary">View ▶</span>
      </button>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-pink/10 blur-[120px]" />
      {stars.map((s) => (
        <span
          key={`${s.top}-${s.left}`}
          aria-hidden
          className="twinkle absolute h-1.5 w-1.5 bg-gold"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8"
      >
        <div>
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 bg-muted px-3 py-1.5 font-pixel text-sm text-muted-foreground"
          >
            <span className="h-2 w-2 bg-primary" />
            {profile.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-pixel text-5xl font-bold leading-[1.05] sm:text-7xl"
          >
            Hi, I&apos;m <span className="text-primary">Ahmed</span>
            <span className="blink text-primary">_</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-lg text-lg leading-8 text-foreground/90 sm:text-xl">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {profile.role} · {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px px-btn inline-flex items-center gap-2 bg-primary px-6 py-3 font-pixel text-lg font-semibold text-primary-foreground [--px-c:var(--primary)]"
            >
              ▶ Press start
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="px px-btn inline-flex items-center gap-2 bg-card px-4 py-3 text-sm font-medium hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="px px-btn inline-flex items-center gap-2 bg-card px-4 py-3 text-sm font-medium hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div variants={item}>
          <PlayerCard />
        </motion.div>
      </motion.div>
    </section>
  );
}
