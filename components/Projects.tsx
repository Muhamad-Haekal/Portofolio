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
      <section id="projects" className="relative bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Portofolio
              </p>
              <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                Proyek Terbaru
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-text-secondary md:text-base">
                Beberapa proyek yang telah saya kerjakan
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {projects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 100}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden bg-text-secondary/5">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="font-display text-4xl font-bold text-text-secondary/20 md:text-5xl">
                          {project.id}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">
                        {project.id}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <h3 className="font-display text-lg font-bold text-text-primary transition-colors group-hover:text-primary md:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="rounded-lg border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex gap-2.5">
                      {project.link && project.link !== "#" && (
                        <button className="flex-1 rounded-lg bg-primary py-2 text-sm font-semibold text-white transition-all hover:bg-primary-dark">
                          Live Demo
                        </button>
                      )}
                      {project.repo && (
                        <button className="flex-1 rounded-lg border border-border py-2 text-sm font-semibold text-primary transition-all hover:bg-card-hover">
                          GitHub
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
