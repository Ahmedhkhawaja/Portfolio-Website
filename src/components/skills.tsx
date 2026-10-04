import { skills } from "@/data/resume";
import { Reveal, SectionHeading } from "@/components/reveal";

const groupColour = ["text-primary", "text-pink", "text-sky", "text-gold", "text-primary"];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          level="5"
          eyebrow="Skills"
          title="Inventory"
          description="The tools I use to build everything above."
        />

        <div className="px mt-10 divide-y divide-border bg-card">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05} y={12}>
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6">
                <h3 className={`w-28 shrink-0 font-pixel text-lg font-bold ${groupColour[i % groupColour.length]}`}>
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-2 border-line bg-muted px-3 py-1.5 text-sm transition-colors duration-150 hover:border-primary hover:text-primary"
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
    </section>
  );
}
