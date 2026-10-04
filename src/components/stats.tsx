"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

import { stats } from "@/data/resume";
import { Sprite, sprites } from "@/components/pixel";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setDisplay(Math.round((1 - Math.pow(1 - t, 3)) * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="font-arcade text-lg text-gold sm:text-2xl">
      {(reduce ? value : display).toLocaleString()}
      {suffix}
    </span>
  );
}

/** Impact numbers shown like an arcade high score board. */
export function Stats() {
  return (
    <div className="px mt-10 grid grid-cols-2 gap-6 bg-card/60 p-6 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="flex items-center gap-2">
            <Sprite sprite={sprites.coin} size={18} />
            <CountUp value={s.value} suffix={s.suffix} />
          </div>
          <p className="mt-2 text-sm leading-5 text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
