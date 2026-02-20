"use client";

import { CSSProperties } from "react";

export default function Sparkle({
  style,
  delay,
}: {
  style: CSSProperties;
  delay: number;
}) {
  return (
    <div
      className="sparkle fixed text-2xl pointer-events-none z-50 select-none"
      style={{ ...style, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      {"✦"}
    </div>
  );
}
