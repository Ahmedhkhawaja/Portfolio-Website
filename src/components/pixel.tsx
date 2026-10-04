/**
 * Tiny pixel art renderer. Each sprite is a list of rows, one character per
 * pixel; "." is transparent and every other character maps to a colour.
 */

type Palette = Record<string, string>;

export type SpriteDef = { rows: string[]; palette: Palette; blink?: string };

export function Sprite({
  sprite,
  size = 32,
  className,
  title,
}: {
  sprite: SpriteDef;
  size?: number;
  className?: string;
  title?: string;
}) {
  const { rows, palette, blink } = sprite;
  const w = rows[0].length;
  const h = rows.length;

  const pixels: React.ReactNode[] = [];
  const blinking: React.ReactNode[] = [];
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const fill = palette[ch];
      if (!fill) return;
      const rect = <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={fill} />;
      (blink && blink.includes(ch) ? blinking : pixels).push(rect);
    });
  });

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={size}
      height={(size * h) / w}
      shapeRendering="crispEdges"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {pixels}
      {blinking.length ? <g className="sprite-blink">{blinking}</g> : null}
    </svg>
  );
}

const Y = "#fcd34d";
const y = "#d97706";

export const sprites = {
  player: {
    rows: [
      "....KKKKKKKK....",
      "...KKKKKKKKKK...",
      "..KKKKKKKKKKKK..",
      "..KKSSSSSSSSKK..",
      "..KSSSSSSSSSSK..",
      "..KSSEESSEESSK..",
      "..SSSEESSEESSS..",
      "..SSSSSSSSSSSS..",
      "...SSSSMMSSSS...",
      "....SSSSSSSS....",
      ".....ssSSss.....",
      "...GGGGssGGGG...",
      "..GGGGGGGGGGGG..",
      ".GGGgGGGGGGgGGG.",
      ".GGGgGGGGGGgGGG.",
      ".GGGgGGGGGGgGGG.",
    ],
    palette: {
      K: "#1d1a24",
      S: "#c98d5e",
      s: "#a06a43",
      E: "#0c0e1a",
      M: "#7a3b2e",
      G: "#a3e635",
      g: "#65a30d",
    },
    blink: "E",
  },
  trophy: {
    rows: [
      ".YYYYYY.",
      "YYYYYYYY",
      "Y.YYYY.Y",
      ".YYYYYY.",
      "..YYYY..",
      "...YY...",
      "..yyyy..",
      ".yyyyyy.",
    ],
    palette: { Y, y },
  },
  star: {
    rows: [
      "...YY...",
      "...YY...",
      "YYYYYYYY",
      ".YYYYYY.",
      "..YYYY..",
      ".YYYYYY.",
      ".YY..YY.",
      "YY....YY",
    ],
    palette: { Y },
  },
  heart: {
    rows: [
      ".RR..RR.",
      "RRRRRRRR",
      "RRRRRRRR",
      "RRRRRRRR",
      ".RRRRRR.",
      "..RRRR..",
      "...RR...",
      "........",
    ],
    palette: { R: "#f472b6" },
  },
  coin: {
    rows: [
      "..YYYY..",
      ".YYYYYY.",
      "YYYyYYYY",
      "YYYyYYYY",
      "YYYyYYYY",
      "YYYyYYYY",
      ".YYYYYY.",
      "..YYYY..",
    ],
    palette: { Y, y },
  },
  briefcase: {
    rows: [
      "........",
      "..BBBB..",
      "..B..B..",
      "BBBBBBBB",
      "BBBBBBBB",
      "BBByyBBB",
      "BBBBBBBB",
      "........",
    ],
    palette: { B: "#67e8f9", y: "#0e7490" },
  },
  bug: {
    rows: [
      ".R....R.",
      "..R..R..",
      ".RRRRRR.",
      "RRWRRWRR",
      "RRRRRRRR",
      ".RRRRRR.",
      "R.R..R.R",
      "........",
    ],
    palette: { R: "#f472b6", W: "#0c0e1a" },
  },
} satisfies Record<string, SpriteDef>;

const medal: Record<"gold" | "silver" | "bronze", Palette> = {
  gold: { Y: "#fcd34d", y: "#d97706" },
  silver: { Y: "#e2e8f0", y: "#94a3b8" },
  bronze: { Y: "#f0a46b", y: "#a0522d" },
};

export function Trophy({ tier, size = 40 }: { tier: keyof typeof medal; size?: number }) {
  return <Sprite sprite={{ rows: sprites.trophy.rows, palette: medal[tier] }} size={size} />;
}

/** Small retro label like "LVL 01 · PROJECTS". */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-pixel text-sm uppercase tracking-[0.2em] text-primary">
      <span aria-hidden className="mr-2">▶</span>
      {children}
    </p>
  );
}
