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
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-primary/80">
              Keterampilan
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
              Tech Stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary/70 md:text-lg">
              Teknologi dan tools yang saya kuasai untuk membangun solusi digital
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, idx) => (
            <FadeIn key={skill.name} delay={idx * 30}>
              <div className="glass glow-border group relative cursor-pointer overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:scale-[1.08] hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-accent/0 to-accent-pink/0 opacity-0 transition-all duration-500 group-hover:from-primary/15 group-hover:via-accent/10 group-hover:to-accent-pink/5 group-hover:opacity-100" />
                
                <div className="mb-3.5 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 ring-1 ring-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:from-primary/25 group-hover:to-accent/25 group-hover:ring-primary/40">
                    <span className="text-3xl transition-transform duration-500 group-hover:scale-110">
                      {skillIcons[skill.name] || "💎"}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm font-semibold leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary">
                  {skill.name}
                </p>
                
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-accent to-accent-pink transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
