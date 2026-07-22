import { profile } from "@/data/content";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-background px-6 py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-text-secondary">Siap Bekerja</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Hi, saya <br />
              <span className="text-primary">{profile.name}</span>
            </h1>
            <p className="text-xl font-medium text-text-secondary md:text-2xl">
              {profile.role}
            </p>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-text-muted">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Download CV
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-all hover:bg-card-hover"
            >
              Lihat Proyek
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2">
            {[
              { label: "GitHub", href: profile.github, icon: "💻" },
              { label: "Instagram", href: profile.instagram, icon: "📷" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-text-secondary transition-colors hover:text-primary"
              >
                <span className="text-base">{link.icon}</span>
                <span className="text-sm font-medium">{link.label}</span>
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
