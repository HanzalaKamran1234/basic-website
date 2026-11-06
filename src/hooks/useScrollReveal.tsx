"use client";

import { useEffect } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to all
 * elements matching `.reveal` inside the given container ref.
 * When an element enters the viewport it receives `.is-visible`,
 * which triggers the CSS transition defined in globals.css.
 */
export function useScrollReveal(containerRef?: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef?.current ?? document;
    const els = Array.from(
      (root as Document | HTMLElement).querySelectorAll<HTMLElement>('.reveal')
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}

/**
 * ScrollRevealProvider — place once at a high level (e.g. page root)
 * to activate all .reveal elements in the subtree.
 */
export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useScrollReveal();
  return <>{children}</>;
};
