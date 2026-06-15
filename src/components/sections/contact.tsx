import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MetalButton } from "@/components/ui/metal-button";

const EMAIL = "justin@slymi.org";
const GITHUB = "https://github.com/CuzImSlymi";

const footerLinks = [
  { label: "GitHub", href: GITHUB, external: true },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background py-32 sm:py-40 lg:py-48"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[28vw] font-bold leading-none tracking-tighter text-foreground/[0.025]"
      >
        Hello
      </span>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Get in touch
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Let&apos;s build
            <br />
            something good.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            Open to opportunities and interesting problems. Reach out anytime
            and I will get back to you.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <a href={`mailto:${EMAIL}`} aria-label="Send an email to Justin">
              <MetalButton className="h-12 px-8 text-base">
                {EMAIL}
              </MetalButton>
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <div className="relative z-10 mx-auto mt-28 flex w-full max-w-5xl flex-col items-center gap-4 border-t border-border px-6 pt-8 sm:flex-row sm:justify-between sm:px-8">
          <p className="font-mono text-xs tracking-wide text-muted">
            2026 Justin
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-xs text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
