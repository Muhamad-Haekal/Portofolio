import { profile } from "@/data/content";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-accent/5" />
      <div className="pointer-events-none absolute left-1/4 top-20 -z-10 h-72 w-72 animate-blob rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-32 right-1/4 -z-10 h-80 w-80 animate-blob rounded-full bg-accent/15 blur-3xl [animation-delay:2s]" />
      <div className="pointer-events-none absolute right-1/3 top-1/3 -z-10 h-64 w-64 animate-blob rounded-full bg-accent-pink/10 blur-3xl [animation-delay:4s]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-dark-card/40 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            <span className="text-sm text-text-secondary">Terbuka untuk PKL</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
              Hai, saya <br />
              <span className="text-gradient glow-text inline-block">{profile.name}</span>
            </h1>
            <p className="text-xl text-text-secondary/90 md:text-2xl">
              {profile.role}
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-text-secondary/80 md:text-lg">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-accent to-accent-pink px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
            <a
              href="#projects"
              className="group rounded-xl border border-primary/30 bg-dark-card/30 px-7 py-3.5 font-semibold text-text-primary backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="flex items-center gap-2">
                Lihat Proyek
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2">
            {[
              { label: "GitHub", href: profile.github, icon: "💻" },
              { label: "Instagram", href: profile.instagram, icon: "📷" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
              >
                <span className="text-sm">{link.icon}</span>
                <span className="relative text-sm font-medium">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <ProfileCard
          name={profile.name}
          school={profile.school.split("—")[0].trim()}
          avatar={profile.avatar}
        />
      </div>
    </section>
  );
}
