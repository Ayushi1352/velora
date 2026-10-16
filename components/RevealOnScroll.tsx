"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

const PENDING = "[data-reveal]:not([data-revealed])";

/**
 * Marks every `[data-reveal]` element with `data-revealed` once it scrolls into view, which starts
 * its CSS animation (see "Motion" in globals.css). Elements added later (route changes, tabs,
 * pagination) are picked up by a MutationObserver.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    window.__revealReady = true;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      // Start a little before the element is fully in, so it never sits empty on screen.
      { rootMargin: "0px 0px -8% 0px" },
    );

    const watch = (root: Element | Document) => {
      if (root instanceof Element && root.matches(PENDING)) io.observe(root);
      root.querySelectorAll(PENDING).forEach((el) => io.observe(el));
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
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
