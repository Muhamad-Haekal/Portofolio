import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-display text-base font-bold text-text-primary">
              {profile.firstName}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-1 text-xs text-text-secondary md:text-sm">
              {profile.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-xs text-text-secondary md:text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
