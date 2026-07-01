import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line/60 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {profile.name}. Dibuat dengan Next.js
          &amp; Tailwind CSS.
        </p>
        <div className="flex gap-5 text-sm">
          <a href={profile.github} className="text-ink-muted hover:text-brand-blue">
            GitHub
          </a>
          <a href={profile.instagram} className="text-ink-muted hover:text-brand-blue">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
