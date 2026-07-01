import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-16 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 animate-blob rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 -z-10 h-80 w-80 animate-blob rounded-full bg-brand-violet/25 blur-3xl [animation-delay:2s]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-surface px-4 py-1.5 text-xs text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Terbuka untuk PKL
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-ink-text sm:text-5xl lg:text-6xl">
            Hai, saya{" "}
            <span className="text-gradient">{profile.firstName}</span>
          </h1>
          <p className="mt-3 font-display text-xl text-ink-muted sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-6 max-w-lg leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cvUrl}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-brand-blue/50"
            >
              <span className="relative z-10">Unduh CV</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-brand-violet to-brand-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#projects"
              className="group rounded-full border-2 border-ink-line px-6 py-3 text-sm font-semibold text-ink-text transition-all duration-300 hover:scale-105 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue hover:shadow-lg hover:shadow-brand-blue/20"
            >
              Lihat Proyek
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            {[
              { label: "GitHub", href: profile.github },
              { label: "Instagram", href: profile.instagram },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group relative text-sm text-ink-muted transition-all duration-300 hover:text-brand-blue"
              >
                <span className="relative">
                  {s.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-4 -z-10 animate-pulse rounded-[2.5rem] bg-gradient-to-br from-brand-blue via-brand-violet to-brand-cyan opacity-60 blur-2xl" />
          <div className="group relative overflow-hidden rounded-[2rem] border-2 border-ink-line bg-ink-surface p-2 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-brand-blue hover:shadow-brand-blue/25">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="320px"
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-center font-display text-sm font-semibold text-white">
                  {profile.name}
                </p>
                <p className="text-center text-xs text-gray-300">
                  {profile.school.split("—")[0].trim()}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
