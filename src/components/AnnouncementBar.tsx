"use client";

import { useState, useEffect } from 'react';

const editorialMessages = [
  "DISCOVER THE ARCHIVE COLLECTION — REFINED ESSENTIALS. TIMELESS SILHOUETTES.",
  "AUTUMN / WINTER MMXXVI — HAUTE PRÊT-À-PORTER ARCHIVE NOW ACCESSIBLE",
  "ARCHITECTURAL RESTRAINT & MONOLITHIC TAILORING — CONTEMPORARY MENSWEAR ARCHIVE",
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % editorialMessages.length);
        setFade(true);
      }, 350);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside
      aria-label="Editorial Announcement"
      className="w-full bg-primary-container border-b border-outline-variant/30 py-space-xs px-margin md:px-margin-desktop text-center flex items-center justify-center transition-colors select-none"
    >
      <p
        className="font-label-caps-sm text-[9px] text-primary tracking-[0.24em] md:tracking-[0.28em] uppercase transition-opacity duration-350 px-2 line-clamp-1"
        style={{ opacity: fade ? 1 : 0 }}
      >
        {editorialMessages[index]}
      </p>
    </aside>
  );
};
