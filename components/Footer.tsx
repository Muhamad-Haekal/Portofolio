import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-text-primary">
              {profile.firstName}
              <span className="text-gradient">.</span>
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p className="text-xs text-text-secondary">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-text-secondary transition-colors hover:text-primary"
            >
              <span className="relative">
                GitHub
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-text-secondary transition-colors hover:text-primary"
            >
              <span className="relative">
                Instagram
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-text-secondary">
            Made with 💜 by {profile.firstName}
          </p>
        </div>
      </div>
    </footer>
  );
}
