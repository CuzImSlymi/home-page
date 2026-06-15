"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const gold = {
  outer: "bg-gradient-to-b from-[#917100] to-[#EAD98F]",
  inner: "bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",
  button: "bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",
  textColor: "text-[#3a2e05]",
  textShadow: "[text-shadow:_0_1px_0_rgb(255_253_221_/_60%)]",
};

type MetalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MetalButton({ children, className, ...props }: MetalButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const transition = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";

  return (
    <div
      className={cn(
        "relative inline-flex transform-gpu rounded-full p-[1.25px] will-change-transform",
        gold.outer,
      )}
      style={{
        transform: isPressed ? "translateY(2px) scale(0.99)" : "translateY(0) scale(1)",
        boxShadow: isPressed
          ? "0 1px 2px rgba(0,0,0,0.4)"
          : isHovered
            ? "0 6px 20px rgba(0,0,0,0.35)"
            : "0 3px 10px rgba(0,0,0,0.25)",
        transition,
      }}
    >
      <div
        className={cn("absolute inset-[1px] transform-gpu rounded-full", gold.inner)}
        style={{ filter: isHovered && !isPressed ? "brightness(1.05)" : "none", transition }}
      />
      <button
        className={cn(
          "relative z-10 m-[1px] inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-full px-7 text-sm font-semibold will-change-transform outline-none",
          gold.button,
          gold.textColor,
          gold.textShadow,
          className,
        )}
        style={{
          transform: isPressed ? "scale(0.97)" : "scale(1)",
          filter: isHovered && !isPressed ? "brightness(1.02)" : "none",
          transition,
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        {...props}
      >
        {isPressed && (
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        )}
        {children}
      </button>
    </div>
  );
}
