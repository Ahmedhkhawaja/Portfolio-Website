import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Journey } from "@/components/journey";
import { Experience } from "@/components/experience";
import { Trophies } from "@/components/trophies";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { ProjectDialogProvider } from "@/components/project-dialog";

export default function Home() {
  return (
    <ProjectDialogProvider>
      <Hero />
      <Projects />
      <Journey />
      <Experience />
      <Trophies />
      <Skills />
      <Contact />
    </ProjectDialogProvider>
  );
}
