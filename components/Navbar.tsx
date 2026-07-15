"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass border-b border-primary/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-xl font-bold text-text-primary transition-colors hover:text-primary"
        >
          {profile.firstName}
          <span className="text-gradient">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/50 md:inline-block"
        >
          Hubungi Saya
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 text-text-primary backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 md:hidden"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="glass border-t border-primary/20 px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-all hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Hubungi Saya
          </a>
        </nav>
      )}
    </header>
  );
}
