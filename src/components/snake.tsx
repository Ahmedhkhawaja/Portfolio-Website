"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { sprites } from "@/components/pixel";

const CELLS = 16;
const PX = 18; // canvas pixels per cell
const SIZE = CELLS * PX;
const HIGH_SCORE_KEY = "ak-snake-best";

type Point = { x: number; y: number };
type Dir = Point;

const DIRS: Record<string, Dir> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
};

function randomFood(snake: Point[]): Point {
  while (true) {
    const p = { x: Math.floor(Math.random() * CELLS), y: Math.floor(Math.random() * CELLS) };
    if (!snake.some((s) => s.x === p.x && s.y === p.y)) return p;
  }
}

function readBest() {
  try {
    return Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeBest(n: number) {
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(n));
  } catch {
    // Storage blocked; the best score just won't persist.
  }
}

export function Snake() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snake = useRef<Point[]>([]);
  const dir = useRef<Dir>(DIRS.ArrowRight);
  const queued = useRef<Dir[]>([]);
  const food = useRef<Point>({ x: 11, y: 8 });
  const touchStart = useRef<Point | null>(null);

  const [phase, setPhase] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0c0e1a";
    ctx.fillRect(0, 0, SIZE, SIZE);

    ctx.fillStyle = "rgba(255,255,255,0.06)";
    for (let x = 0; x < CELLS; x++) {
      for (let y = 0; y < CELLS; y++) ctx.fillRect(x * PX + PX / 2 - 1, y * PX + PX / 2 - 1, 2, 2);
    }

    // Food: the pixel bug sprite scaled into one cell.
    const bug = sprites.bug;
    const unit = PX / bug.rows.length;
    bug.rows.forEach((row, y) =>
      [...row].forEach((ch, x) => {
        const fill = (bug.palette as Record<string, string>)[ch];
        if (!fill) return;
        ctx.fillStyle = fill;
        ctx.fillRect(food.current.x * PX + x * unit, food.current.y * PX + y * unit, unit, unit);
      }),
    );

    snake.current.forEach((p, i) => {
      ctx.fillStyle = i === 0 ? "#d9f99d" : i % 2 ? "#a3e635" : "#84cc16";
      ctx.fillRect(p.x * PX + 1, p.y * PX + 1, PX - 2, PX - 2);
    });

    const head = snake.current[0];
    if (head) {
      ctx.fillStyle = "#0c0e1a";
      const d = dir.current;
      const cx = head.x * PX + PX / 2;
      const cy = head.y * PX + PX / 2;
      const ox = d.y !== 0 ? 4 : 0;
      const oy = d.x !== 0 ? 4 : 0;
      ctx.fillRect(cx + d.x * 3 - ox - 1.5, cy + d.y * 3 - oy - 1.5, 3, 3);
      ctx.fillRect(cx + d.x * 3 + ox - 1.5, cy + d.y * 3 + oy - 1.5, 3, 3);
    }
  }, []);

  const start = useCallback(() => {
    snake.current = [
      { x: 5, y: 8 },
      { x: 4, y: 8 },
      { x: 3, y: 8 },
    ];
    dir.current = DIRS.ArrowRight;
    queued.current = [];
    food.current = randomFood(snake.current);
    setScore(0);
    setBest((b) => Math.max(b, readBest()));
    setPhase("playing");
    canvasRef.current?.focus({ preventScroll: true });
  }, []);

  const turn = useCallback((next: Dir) => {
    const last = queued.current.at(-1) ?? dir.current;
    if (next.x === -last.x && next.y === -last.y) return;
    if (next.x === last.x && next.y === last.y) return;
    if (queued.current.length < 3) queued.current.push(next);
  }, []);

  // Set up a crisp canvas once.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = SIZE * ratio;
    canvas.height = SIZE * ratio;
    canvas.getContext("2d")?.scale(ratio, ratio);
    snake.current = [
      { x: 6, y: 8 },
      { x: 5, y: 8 },
      { x: 4, y: 8 },
    ];
    draw();
  }, [draw]);

  // Game loop.
  useEffect(() => {
    if (phase !== "playing") return;
    let eaten = 0;
    let timer: number;

    const step = () => {
      if (queued.current.length) dir.current = queued.current.shift()!;
      const head = snake.current[0];
      const next = { x: head.x + dir.current.x, y: head.y + dir.current.y };
      const hitWall = next.x < 0 || next.y < 0 || next.x >= CELLS || next.y >= CELLS;
      const hitSelf = snake.current.slice(0, -1).some((p) => p.x === next.x && p.y === next.y);

      if (hitWall || hitSelf) {
        setPhase("over");
        setBest((b) => {
          const nb = Math.max(b, eaten);
          if (nb > b) writeBest(nb);
          return nb;
        });
        return;
      }

      snake.current.unshift(next);
      if (next.x === food.current.x && next.y === food.current.y) {
        eaten += 1;
        setScore(eaten);
        food.current = randomFood(snake.current);
      } else {
        snake.current.pop();
      }
      draw();
      timer = window.setTimeout(step, Math.max(70, 140 - eaten * 3));
    };

    timer = window.setTimeout(step, 140);
    return () => window.clearTimeout(timer);
  }, [phase, draw]);

  // Keyboard: only captured while a game is running.
  useEffect(() => {
    if (phase !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      const d = DIRS[e.key] ?? DIRS[e.key.toLowerCase()];
      if (!d) return;
      e.preventDefault();
      turn(d);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, turn]);

  const dpad: { label: string; key: string; area: string }[] = [
    { label: "▲", key: "ArrowUp", area: "col-start-2" },
    { label: "◀", key: "ArrowLeft", area: "col-start-1 row-start-2" },
    { label: "▶", key: "ArrowRight", area: "col-start-3 row-start-2" },
    { label: "▼", key: "ArrowDown", area: "col-start-2 row-start-3" },
  ];

  return (
    <div className="px mx-auto w-full max-w-sm bg-card p-5">
      <div className="flex items-center justify-between font-pixel text-sm">
        <span className="text-muted-foreground">Bug Snake</span>
        <span>
          Score <span className="font-arcade text-xs text-gold">{score}</span>
          <span className="mx-2 text-muted-foreground">·</span>
          Best <span className="font-arcade text-xs text-primary">{best}</span>
        </span>
      </div>

      <div className="relative mt-3 aspect-square w-full border-2 border-line">
        <canvas
          ref={canvasRef}
          tabIndex={-1}
          aria-label="Snake game board"
          className="block h-full w-full touch-none focus:outline-none"
          onTouchStart={(e) => {
            const t = e.touches[0];
            touchStart.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            const s = touchStart.current;
            const t = e.changedTouches[0];
            if (!s) return;
            const dx = t.clientX - s.x;
            const dy = t.clientY - s.y;
            if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) return;
            turn(Math.abs(dx) > Math.abs(dy) ? DIRS[dx > 0 ? "ArrowRight" : "ArrowLeft"] : DIRS[dy > 0 ? "ArrowDown" : "ArrowUp"]);
          }}
        />

        {phase !== "playing" ? (
          <div className="absolute inset-0 grid place-items-center bg-background/75 p-4 text-center backdrop-blur-[2px]">
            <div>
              <p className="font-pixel text-2xl font-bold">
                {phase === "over" ? "Game over" : "Squash the bugs"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {phase === "over"
                  ? `You squashed ${score} bug${score === 1 ? "" : "s"}.`
                  : "Arrow keys, WASD or swipe."}
              </p>
              <button
                type="button"
                onClick={start}
                className="px px-btn mt-4 cursor-pointer bg-primary px-5 py-2 font-pixel font-semibold text-primary-foreground [--px-c:var(--primary)]"
              >
                {phase === "over" ? "Play again" : "▶ Start"}
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mx-auto mt-4 grid w-32 grid-cols-3 grid-rows-3 gap-1 sm:hidden" aria-label="Controls">
        {dpad.map((b) => (
          <button
            key={b.key}
            type="button"
            aria-label={b.key.replace("Arrow", "")}
            onClick={() => turn(DIRS[b.key])}
            className={`${b.area} grid h-10 cursor-pointer place-items-center bg-muted font-pixel text-muted-foreground active:bg-primary active:text-primary-foreground`}
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
}
