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
      <section id="projects" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-primary">
                Portofolio
              </p>
              <h2 className="font-display text-4xl font-bold text-text-primary md:text-5xl">
                Proyek Terbaru
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
                Beberapa proyek yang telah saya kerjakan
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 100}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="glass glow-border group h-full cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-dark-card to-dark">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="font-display text-6xl font-bold text-primary/20">
                          {project.id}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.id}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-text-primary transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex gap-3">
                      {project.link && project.link !== "#" && (
                        <button className="flex-1 rounded-xl bg-gradient-to-r from-primary to-accent py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
                          Live Demo
                        </button>
                      )}
                      {project.repo && (
                        <button className="flex-1 rounded-xl border border-primary/40 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10">
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
