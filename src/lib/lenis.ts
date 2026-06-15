import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function scrollTo(target: string) {
  if (instance) {
    instance.scrollTo(target, { offset: 0, duration: 1.2 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}
