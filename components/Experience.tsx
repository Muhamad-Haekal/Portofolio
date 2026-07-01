import { achievements, education, experience } from "@/data/content";
import FadeIn from "./FadeIn";

type Item = { period: string; title: string; subtitle?: string; description?: string };

function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative border-l border-ink-line pl-8">
      {items.map((item, idx) => (
        <FadeIn key={item.title} delay={idx * 90}>
          <div className="relative pb-8 last:pb-0">
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-brand-blue bg-ink" />
            <p className="font-mono text-xs uppercase tracking-wide text-brand-cyan">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-base font-semibold text-ink-text">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-sm text-ink-muted">{item.subtitle}</p>
            )}
            {item.description && (
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Perjalanan
        </p>
      </FadeIn>
      <FadeIn delay={60}>
        <h2 className="mb-10 font-display text-3xl font-bold text-ink-text sm:text-4xl">
          Pengalaman & Pendidikan
        </h2>
      </FadeIn>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 font-display text-lg font-semibold text-ink-text">
            Pengalaman & Organisasi
          </h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="mb-6 font-display text-lg font-semibold text-ink-text">
            Pendidikan
          </h3>
          <Timeline items={education} />

          <h3 className="mb-6 mt-10 font-display text-lg font-semibold text-ink-text">
            Prestasi
          </h3>
          <Timeline items={achievements} />
        </div>
      </div>
    </section>
  );
}
