import { services } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Yang Bisa Saya Bantu
        </p>
      </FadeIn>
      <FadeIn delay={60}>
        <h2 className="font-display text-3xl font-bold text-ink-text sm:text-4xl">
          Fokus Area
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <FadeIn key={service.title} delay={idx * 90}>
            <div className="h-full rounded-2xl border border-ink-line bg-ink-surface p-6 transition-colors hover:border-brand-blue/50">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet font-display font-bold text-white">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-text">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
