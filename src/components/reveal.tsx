"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components/pixel";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  level,
  eyebrow,
  title,
  description,
}: {
  level: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <Eyebrow>
        Level {level} · {eyebrow}
      </Eyebrow>
      <h2 className="mt-3 font-pixel text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
