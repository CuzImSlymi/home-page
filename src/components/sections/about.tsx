import { Reveal } from "@/components/reveal";

type SkillGroup = {
  label: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Rust", "Python", "JavaScript", "TypeScript", "Luau", "AHK v2", "HTML and CSS"],
  },
  {
    label: "Frameworks and Tools",
    items: ["Next.js", "React", "React Native", "Node", "Flask", "Tauri", "Tailwind", "PyTorch", "TensorFlow", "YOLO"],
  },
];

export function About() {
  return (
    <section id="about" className="relative w-full bg-background py-32 sm:py-40">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl text-2xl font-normal leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            I am Justin, a software engineer from Germany focused on{" "}
            <span className="text-accent">artificial intelligence</span>. I build
            full-stack platforms, train{" "}
            <span className="text-accent">machine learning models</span>, and ship
            open-source tools. Self-taught, and shipping products people{" "}
            <span className="text-accent">actually use</span>.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-10 border-t border-border pt-12 sm:mt-24 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
