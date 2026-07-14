import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
