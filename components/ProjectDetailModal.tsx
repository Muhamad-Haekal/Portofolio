"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/data/content";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl border border-border bg-card shadow-xl max-h-[calc(100vh-4rem)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card px-5 sm:px-6 py-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary pr-8">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary hover:bg-card-hover"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-12rem)] p-5 sm:p-6">
          {project.image && (
            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="mb-5">
            <span className="inline-block rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white">
              Project {project.id}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              Deskripsi
            </h3>
            <p className="leading-relaxed text-text-secondary text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              Teknologi yang Digunakan
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Lihat Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-primary hover:bg-card-hover"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Lihat Kode
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
