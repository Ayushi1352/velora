"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const MASK_EASE = "cubic-bezier(0.77, 0, 0.18, 1)";
const DELAY_STEP_MS = 90;

type Motion = { frames: Keyframe[]; duration?: number; easing?: string };

/**
 * Each animation's keyframes. They only animate `transform` / `opacity` / `clip-path`, so they stack with
 * Tailwind's `translate-*` / `scale-*` / `rotate-*` utilities (separate CSS properties) instead of overriding them.
 * Gold rules ("line") grow from their transform-origin, set with Tailwind's origin-* utilities.
 */
const MOTIONS: Record<string, Motion> = {
  up: { frames: [{ opacity: 0, transform: "translate3d(0, 44px, 0)" }, {}] },
  down: { frames: [{ opacity: 0, transform: "translate3d(0, -26px, 0)" }, {}] },
  left: { frames: [{ opacity: 0, transform: "translate3d(-56px, 0, 0)" }, {}] },
  right: { frames: [{ opacity: 0, transform: "translate3d(56px, 0, 0)" }, {}] },
  zoom: { frames: [{ opacity: 0, transform: "scale(0.88)" }, {}], duration: 1100 },
  fade: { frames: [{ opacity: 0 }, {}] },
  pop: { frames: [{ opacity: 0, transform: "scale(0)" }, {}], duration: 800, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
  spin: { frames: [{ opacity: 0, transform: "rotate(-120deg) scale(0.86)" }, {}], duration: 1400 },
  line: { frames: [{ transform: "scaleX(0)" }, {}], duration: 900 },
  // Handwritten signatures are "written" left to right; the box is overshot so swashes outside it are not cut off.
  write: { frames: [{ clipPath: "inset(-30% 100% -30% -10%)" }, { clipPath: "inset(-30% -10% -30% -10%)" }], duration: 2000, easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
  "mask-up": { frames: [{ clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0)" }], duration: 1300, easing: MASK_EASE },
  "mask-down": { frames: [{ clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0)" }], duration: 1300, easing: MASK_EASE },
  "mask-left": { frames: [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0)" }], duration: 1300, easing: MASK_EASE },
  "mask-right": { frames: [{ clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0)" }], duration: 1300, easing: MASK_EASE },
};

// A photo inside a mask (or a "settle" intro) eases in from a slight zoom while it is uncovered.
const SETTLE: Motion = { frames: [{ transform: "scale(1.18)" }, {}], duration: 1800 };

/**
 * React tags each DOM node it has hydrated with a `__reactFiber$…` key. This component lives in the
 * root layout, which can hydrate before the page segment; touching a not-yet-hydrated node's
 * attributes would trigger a hydration mismatch.
 */
const isHydrated = (el: Element) => Object.keys(el).some((key) => key.startsWith("__reactFiber$"));

function play(el: HTMLElement, type: string) {
  const delay = Number(el.dataset.delay ?? 0) * DELAY_STEP_MS;
  const run = (target: Element, { frames, duration = 950, easing = EASE }: Motion) =>
    target.animate(frames, { duration, easing, delay, fill: "both" });

  if (MOTIONS[type]) run(el, MOTIONS[type]);
  if (type.startsWith("mask-") || type === "settle") el.querySelectorAll("img").forEach((img) => run(img, SETTLE));
}

/**
 * Plays the animations of the whole site through the Web Animations API, so no CSS is needed.
 *
 *   data-intro="<type>"  plays as soon as the page opens (hero, page banners, navbar).
 *   data-reveal="<type>" plays when the element scrolls into view.
 *   data-delay="1".."12" staggers either one in 90ms steps.
 *
 * Until then the elements are hidden by the `motion` class on <html> (see app/layout.tsx); playing one
 * marks it with `data-played` / `data-revealed`. Elements added later (route changes, tabs, pagination)
 * are picked up by a MutationObserver. Without JavaScript, or with reduced motion turned on, every
 * element is simply visible and nothing moves.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    window.__revealReady = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.remove("motion");
      return;
    }
    let cancelled = false;
    const seen = new WeakSet<Element>();

    // Waits until React has hydrated the element, then marks it and plays its animation. It never marks an
    // element early: React would report the extra attribute as a hydration mismatch (slow dev builds can take
    // several seconds to hydrate). If the scripts never run at all, the layout's fallback shows everything.
    const start = (el: HTMLElement, attr: "data-played" | "data-revealed", type: string) => {
      if (cancelled || !el.isConnected) return;
      if (isHydrated(el)) {
        el.setAttribute(attr, "");
        play(el, type);
      } else {
        requestAnimationFrame(() => start(el, attr, type));
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          start(el, "data-revealed", el.dataset.reveal ?? "");
        }
      },
      // Start a little before the element is fully in, so it never sits empty on screen.
      { rootMargin: "0px 0px -8% 0px" },
    );

    const watch = (root: Element | Document) => {
      const all = (selector: string) => [...(root instanceof Element && root.matches(selector) ? [root] : []), ...root.querySelectorAll(selector)] as HTMLElement[];
      for (const el of all("[data-intro]:not([data-played]), [data-reveal]:not([data-revealed])")) {
        if (seen.has(el)) continue;
        seen.add(el);
        if (el.dataset.intro !== undefined) start(el, "data-played", el.dataset.intro);
        else io.observe(el);
      }
    };

    watch(document);
    const mo = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) watch(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelled = true;
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
