"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  /** Milliseconds. */
  duration: number;
  children: ReactNode;
};

/**
 * Fades the element passed as the only child in (with a small rise) when it appears. Tailwind classes can't
 * declare keyframes, so this runs through the Web Animations API. Give it a `key` to replay it for new content.
 */
export default function FadeIn({ duration, children }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current?.firstElementChild;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = el.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration, easing: "ease" });
    return () => animation.cancel();
  }, [duration]);

  // `contents` keeps the wrapper out of layout, so the child sits exactly where it would without it.
  return (
    <span ref={ref} className="contents">
      {children}
    </span>
  );
}
