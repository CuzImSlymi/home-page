"use client";

import { cn } from "@/lib/utils";

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium cursor-pointer transition-transform duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] active:scale-[0.98]";

const sizes = {
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
} as const;

type LiquidButtonProps = {
  className?: string;
  children: React.ReactNode;
  size?: keyof typeof sizes;
  href?: string;
  target?: string;
  rel?: string;
} & React.HTMLAttributes<HTMLElement>;

// Frosted glass pill.
function LiquidButton({
  className,
  size = "default",
  href,
  children,
  ...props
}: LiquidButtonProps) {
  const content = (
    <>
      <span
        className="absolute inset-0 rounded-full shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.18),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.9),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.08),0_2px_12px_rgba(0,0,0,0.4)]"
        aria-hidden
      />
      <span
        className="absolute inset-0 isolate -z-10 overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#liquid-glass")' }}
        aria-hidden
      />
      <span className="pointer-events-none z-10 flex items-center gap-2">
        {children}
      </span>
      <GlassFilter />
    </>
  );

  const classes = cn("text-foreground", base, sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden>
      <defs>
        <filter
          id="liquid-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  );
}

export { LiquidButton };
