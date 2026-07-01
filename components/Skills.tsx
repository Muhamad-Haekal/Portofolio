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
            <div className="group relative flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-ink-line bg-ink-surface px-4 py-6 text-center transition-all duration-300 hover:scale-105 hover:border-brand-blue hover:bg-gradient-to-br hover:from-brand-blue/10 hover:to-brand-violet/10 hover:shadow-lg hover:shadow-brand-blue/20">
              <span className="relative z-10 text-sm font-medium text-ink-text transition-colors duration-300 group-hover:text-brand-blue">
                {skill.name}
              </span>
              <div className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-t from-brand-blue/20 to-transparent transition-transform duration-300 group-hover:translate-y-0" />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
