"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Scroll progress drawn as a segmented XP bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-1.5 origin-left bg-[repeating-linear-gradient(90deg,var(--primary)_0_10px,transparent_10px_12px)]"
      style={{ scaleX }}
    />
  );
}
