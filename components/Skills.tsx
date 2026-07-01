import { skills } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Keterampilan
        </p>
      </FadeIn>
      <FadeIn delay={60}>
        <h2 className="font-display text-3xl font-bold text-ink-text sm:text-4xl">
          Hal yang saya kuasai
        </h2>
      </FadeIn>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, idx) => (
          <FadeIn key={skill.name} delay={idx * 50}>
            <div className="flex h-full items-center justify-center rounded-2xl border border-ink-line bg-ink-surface px-4 py-6 text-center transition-colors hover:border-brand-blue/50">
              <span className="text-sm font-medium text-ink-text">
                {skill.name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
