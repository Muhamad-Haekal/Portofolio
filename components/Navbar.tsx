"use client";

import { useState } from "react";
import { profile } from "@/data/content";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-semibold text-ink-text">
          {profile.firstName}<span className="text-brand-blue">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Hubungi Saya
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-line text-ink-text md:hidden"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-line/60 px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-ink-muted hover:bg-ink-surface hover:text-ink-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
