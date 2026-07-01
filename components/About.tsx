import { about, profile, stats } from "@/data/content";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Tentang Saya
        </p>
      </FadeIn>
      <FadeIn delay={60}>
        <h2 className="font-display text-3xl font-bold text-ink-text sm:text-4xl">
          {profile.name}
        </h2>
        <p className="mt-1 text-ink-muted">{profile.school}</p>
      </FadeIn>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4">
          {about.paragraphs.map((p, idx) => (
            <FadeIn key={idx} delay={100 + idx * 80}>
              <p className="leading-relaxed text-ink-muted">{p}</p>
            </FadeIn>
          ))}

          <FadeIn delay={260}>
            <div className="flex flex-wrap gap-2 pt-2">
              {about.focusAreas.map((area) => (
                <span
                  key={area}
                  className="group cursor-pointer rounded-full border border-ink-line bg-ink-surface px-4 py-1.5 text-sm text-ink-text transition-all duration-300 hover:scale-105 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue"
                >
                  {area}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {stats.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 100}>
              <div className="group cursor-pointer rounded-2xl border border-ink-line bg-ink-surface p-6 text-center transition-all duration-300 hover:scale-105 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/20 md:text-left">
                <p className="font-display text-3xl font-bold text-gradient transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
