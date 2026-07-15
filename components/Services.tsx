import { services } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Layanan
            </p>
            <h2 className="font-display text-4xl font-bold text-text-primary md:text-5xl">
              Yang Bisa Saya Bantu
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <FadeIn key={service.title} delay={idx * 100}>
              <div className="glass glow-border group h-full cursor-pointer rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent font-display text-xl font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                <div className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
