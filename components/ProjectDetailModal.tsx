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
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl border border-ink-line bg-ink-surface shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-line bg-ink-surface/95 backdrop-blur-sm px-4 sm:px-6 py-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-ink-text pr-8">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink-line text-ink-muted transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            ✕
          </button>
        </div>

        <div className="p-4 sm:p-6">
          {project.image && (
            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-ink-line">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="mb-4 inline-flex items-center gap-2">
            <span className="rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-4 py-1.5 text-sm font-semibold text-white">
              Project {project.id}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Deskripsi
            </h3>
            <p className="leading-relaxed text-ink-muted text-sm sm:text-base">{project.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Teknologi yang Digunakan
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink-line bg-ink px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-ink-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <span>🚀</span>
                Lihat Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm font-semibold text-ink-text transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                <span>💻</span>
                Lihat Kode
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
