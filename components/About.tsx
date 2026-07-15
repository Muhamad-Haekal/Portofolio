import { about, profile, stats } from "@/data/content";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-primary/80">
              Tentang Saya
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
              {profile.name}
            </h2>
            <p className="mt-3 text-lg text-text-secondary/70">{profile.school}</p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={100}>
            <div className="glass glow-border group h-full rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 md:p-10">
              <h3 className="mb-6 font-display text-2xl font-bold tracking-tight text-text-primary">
                Profil Singkat
              </h3>
              <div className="space-y-5">
                {about.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-[15px] leading-[1.7] text-text-secondary/80"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {about.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-medium text-primary/90 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, idx) => (
              <FadeIn key={stat.label} delay={150 + idx * 50}>
                <div className="glass glow-border group cursor-pointer overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 lg:text-left">
                  <p className="font-display text-4xl font-bold text-gradient transition-transform duration-500 group-hover:scale-105 md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2.5 text-sm font-medium tracking-wide text-text-secondary/70">
                    {stat.label}
                  </p>
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100 lg:w-20" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
