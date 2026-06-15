import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section
      id="work"
      className="relative w-full bg-background py-32 sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Work
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A few projects I am proud of.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 sm:mt-28 sm:gap-36">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
