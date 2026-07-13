import { ArrowUpRight, Brain, GraduationCap, Rocket } from "lucide-react";

const projects = [
  {
    id: "studyflow",
    title: "StudyFlow",
    description:
      "Plataforma de aprendizaje personalizado impulsada por IA que adapta el contenido al ritmo y estilo de cada estudiante.",
    tags: ["React", "OpenAI", "Tailwind", "Supabase"],
    icon: GraduationCap,
    accent: "#d4ff3f",
  },
  {
    id: "neuroanalyst",
    title: "НейроАналитик",
    description:
      "Servicio de análisis de datos con modelos de IA que transforma reportes complejos en insights accionables.",
    tags: ["Python", "LangChain", "PostgreSQL", "Recharts"],
    icon: Brain,
    accent: "#d4ff3f",
  },
  {
    id: "launchpro",
    title: "LaunchPro",
    description:
      "Landing page de alto impacto para el lanzamiento de un producto, optimizada para conversión y velocidad.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    icon: Rocket,
    accent: "#d4ff3f",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4ff3f 1px, transparent 1px), linear-gradient(to bottom, #d4ff3f 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#d4ff3f]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3f] shadow-[0_0_8px_#d4ff3f]" />
            PORTFOLIO
          </div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Избранные{" "}
            <span className="italic text-[#d4ff3f] [text-shadow:0_0_40px_rgba(212,255,63,0.35)]">
              проекты
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Una selección de productos y experiencias construidos con IA, velocidad y atención al detalle.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#d4ff3f]/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(212,255,63,0.08)]"
              >
                {/* preview placeholder */}
                <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-black/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4ff3f]/20 bg-[#d4ff3f]/10 text-[#d4ff3f] shadow-[0_0_24px_rgba(212,255,63,0.15)] transition group-hover:scale-105 group-hover:shadow-[0_0_36px_rgba(212,255,63,0.25)]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  {/* corner glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#d4ff3f]/10 blur-2xl" />
                </div>

                {/* content */}
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl font-medium">{project.title}</h3>
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-[#d4ff3f]/30 group-hover:text-[#d4ff3f]">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>

                  {/* tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] tracking-wide text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
