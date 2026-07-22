import { skills } from "@/data/content";
import FadeIn from "./FadeIn";

const skillIcons: Record<string, string> = {
  "Flutter & Go": "📱",
  "React & React Native": "⚛️",
  "JavaScript": "🟨",
  "HTML & CSS": "🎨",
  "MySQL": "🗄️",
  "Tailwind CSS": "💨",
  "Hardware Troubleshooting": "🔧",
  "Cyber Security": "🔐",
  "Kerja Tim & Komunikasi": "🤝",
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-card px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              Keterampilan
            </p>
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              Tech Stack
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
              Teknologi dan tools yang saya kuasai untuk membangun solusi digital
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {skills.map((skill, idx) => (
            <FadeIn key={skill.name} delay={idx * 30}>
              <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background p-4 text-center transition-all hover:border-primary/30 hover:shadow-md md:p-5">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-all group-hover:bg-primary/10 md:h-14 md:w-14">
                    <span className="text-2xl transition-transform group-hover:scale-110 md:text-3xl">
                      {skillIcons[skill.name] || "💎"}
                    </span>
                  </div>
                </div>
                
                <p className="text-xs font-semibold leading-tight text-text-primary transition-colors group-hover:text-primary md:text-sm">
                  {skill.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
