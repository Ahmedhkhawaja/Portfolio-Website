import { skills } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee overflow-hidden ${reverse ? "marquee-reverse" : ""}`}
      aria-hidden
    >
      <div className="marquee-track gap-3 py-2">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const all = skills.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);

  return (
    <section id="skills" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="What I work with"
          description="The languages, tools, and platforms behind everything above."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-primary">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-bleed marquee band */}
      <div className="border-t border-border bg-card/30 py-6">
        <MarqueeRow items={all.slice(0, half)} />
        <MarqueeRow items={all.slice(half)} reverse />
        <span className="sr-only">{all.join(", ")}</span>
      </div>
    </section>
  );
}
