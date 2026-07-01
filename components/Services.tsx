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
            <div className="group h-full cursor-pointer rounded-2xl border border-ink-line bg-ink-surface p-6 transition-all duration-300 hover:scale-105 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/20">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet font-display font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-blue/50">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-text transition-colors duration-300 group-hover:text-brand-blue">
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
