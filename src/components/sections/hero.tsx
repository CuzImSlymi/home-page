import { HeroShaderClient } from "@/components/hero-shader-client";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 opacity-70">
        <HeroShaderClient />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-0 h-64 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Software and AI Engineer
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            I build things people use.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build and run full-stack products, from the first line of code to
            production at scale.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <LiquidButton href="#work" size="lg">
              View work
            </LiquidButton>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Get in touch
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Scroll
          </span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
}
