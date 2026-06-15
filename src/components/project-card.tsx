"use client";

import { ArrowUpRight } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ProjectMedia } from "@/components/project-media";
import { type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;

  return (
    <div
      className={cn(
        "group flex flex-col gap-8 lg:items-center lg:gap-16",
        reversed ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      <div className="lg:w-3/5">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border bg-surface transition-transform duration-500 ease-out group-hover:-translate-y-1",
            project.media.type === "code"
              ? "min-h-[320px] sm:min-h-[360px] lg:min-h-0 lg:aspect-video"
              : "aspect-video",
          )}
        >
          <ProjectMedia media={project.media} name={project.name} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>

      <div className="lg:w-2/5">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {project.tagline}
        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h3>

        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {project.description}
        </p>

        {project.metric && (
          <dl className="mt-8 flex gap-10 border-t border-border pt-6">
            <div>
              <dt className="text-4xl font-bold tracking-tight text-accent">
                {project.metric}
              </dt>
              <dd className="mt-1 text-sm text-muted">{project.metricLabel}</dd>
            </div>

            {project.secondaryMetric && (
              <div>
                <dt className="text-4xl font-bold tracking-tight text-accent">
                  {project.secondaryMetric}
                </dt>
                <dd className="mt-1 text-sm text-muted">
                  {project.secondaryMetricLabel}
                </dd>
              </div>
            )}
          </dl>
        )}

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <LiquidButton
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LiquidButton>
        </div>
      </div>
    </div>
  );
}
