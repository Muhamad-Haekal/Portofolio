import { about, profile, stats } from "@/data/content";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="relative bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              Tentang Saya
            </p>
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              {profile.name}
            </h2>
            <p className="mt-2 text-sm text-text-secondary md:text-base">{profile.school}</p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn delay={100}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
              <h3 className="mb-4 font-display text-xl font-bold text-text-primary md:text-2xl">
                Profil Singkat
              </h3>
              <div className="space-y-4">
                {about.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed text-text-secondary md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {about.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary md:text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {stats.map((stat, idx) => (
              <FadeIn key={stat.label} delay={150 + idx * 50}>
                <div className="rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:shadow-md lg:text-left">
                  <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium text-text-secondary md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
