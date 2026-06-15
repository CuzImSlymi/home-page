"use client";

import dynamic from "next/dynamic";

const HeroShader = dynamic(
  () => import("@/components/hero-shader").then((m) => m.HeroShader),
  { ssr: false },
);

export function HeroShaderClient() {
  return <HeroShader />;
}
