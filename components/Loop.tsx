"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Endless decorative motion for the element passed as the only child. Tailwind classes can't declare
// keyframes, so these run through the Web Animations API; every step keeps the easing a CSS keyframe would.
const effects = {
  // The hero dish that gently bobs up and down. Uses translate, not transform, so it stacks with the intro zoom.
  float: { duration: 7000, easing: "ease-in-out", frames: [{ translate: "0 0" }, { translate: "0 -14px" }, { translate: "0 0" }] },
} satisfies Record<string, { duration: number; easing: string; frames: Keyframe[] }>;

type Props = {
  effect: keyof typeof effects;
  // Milliseconds before the first cycle starts
  delay?: number;
  children: ReactNode;
};

export default function Loop({ effect, delay = 0, children }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current?.firstElementChild;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { duration, easing, frames } = effects[effect];
    const animation = el.animate(
      frames.map((f) => ({ easing, ...f })),
      { duration, delay, iterations: Infinity },
    );
    return () => animation.cancel();
  }, [effect, delay]);

  // `contents` keeps the wrapper out of layout, so the child sits exactly where it would without it.
  return (
    <span ref={ref} className="contents">
      {children}
    </span>
  );
}
