"use client";

import { useEffect, useRef, useState } from "react";
import { type ProjectMedia as Media } from "@/lib/projects";
import { CodeBlock } from "@/components/code-block";

// Loops a muted video once it scrolls into view, so it does not download
// or play while off screen. Pauses again when it leaves the viewport.
function LazyVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={inView ? src : undefined}
      poster={poster}
      muted
      loop
      autoPlay
      playsInline
      preload="none"
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );
}

export function ProjectMedia({ media, name }: { media: Media; name: string }) {
  if (media.type === "code") {
    return <CodeBlock language={media.language} code={media.code} />;
  }

  if (media.type === "video") {
    return <LazyVideo src={media.src} poster={media.poster} />;
  }

  return (
    <img
      src={media.src}
      alt={`${name} preview`}
      loading="lazy"
      className="h-full w-full object-cover object-left transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  );
}
