"use client";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { scrollTo } from "@/lib/lenis";

export function HeroActions() {
  const go = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
    history.replaceState(null, "", href);
  };

  return (
    <div className="mt-10 flex flex-wrap items-center gap-6">
      <LiquidButton href="#work" size="lg" onClick={(e) => go(e, "#work")}>
        View work
      </LiquidButton>

      <a
        href="#contact"
        onClick={(e) => go(e, "#contact")}
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
  );
}
