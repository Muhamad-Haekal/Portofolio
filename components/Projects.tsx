import { projects } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
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
            <div className="group h-full overflow-hidden rounded-2xl border border-ink-line bg-ink-surface transition-colors hover:border-brand-blue/50">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-ink-surface2 to-ink-surface">
                <span className="font-display text-4xl font-bold text-ink-line transition-colors group-hover:text-brand-blue/40">
                  {project.id}
                </span>
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  {project.link && (
                    <a
                      href={project.link}
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink"
                    >
                      Demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="rounded-full border border-white/60 px-4 py-2 text-xs font-semibold text-white"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-ink-text">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink-line px-3 py-1 text-xs text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
