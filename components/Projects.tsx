"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/content";
import type { Project } from "@/data/content";
import FadeIn from "./FadeIn";
import ProjectDetailModal from "./ProjectDetailModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-blue">
            Portofolio
          </p>
        </FadeIn>
        <FadeIn delay={60}>
          <h2 className="font-display text-3xl font-bold text-ink-text sm:text-4xl">
            Proyek Saya
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 90}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-ink-line bg-ink-surface transition-all hover:border-brand-blue/50 hover:shadow-lg"
              >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-ink-surface2 to-ink-surface">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-4xl font-bold text-ink-line transition-colors group-hover:text-brand-blue/40">
                      {project.id}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink">
                      Lihat Detail
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-ink-line px-3 py-1 text-xs text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="rounded-full border border-ink-line px-3 py-1 text-xs text-ink-muted">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
