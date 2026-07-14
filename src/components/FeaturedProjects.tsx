import { ArrowUpRight } from "lucide-react";
import studyflowAsset from "@/assets/project-studyflow.jpg.asset.json";
import neuroanalystAsset from "@/assets/project-neuroanalyst.jpg.asset.json";
import launchproAsset from "@/assets/project-launchpro.jpg.asset.json";

const projects = [
  {
    id: "studyflow",
    title: "StudyFlow",
    description:
      "Персонализированная образовательная платформа на базе ИИ, которая адаптирует контент под темп и стиль каждого ученика.",
    tags: ["React", "OpenAI", "Tailwind", "Supabase"],
    image: studyflowAsset.url,
  },
  {
    id: "neuroanalyst",
    title: "НейроАналитик",
    description:
      "Сервис анализа данных с моделями ИИ, который превращает сложные отчёты в понятные инсайты и рекомендации.",
    tags: ["Python", "LangChain", "PostgreSQL", "Recharts"],
    image: neuroanalystAsset.url,
  },
  {
    id: "launchpro",
    title: "LaunchPro",
    description:
      "Высококонверсионный лендинг для запуска продукта, оптимизированный под скорость загрузки и конверсию.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    image: launchproAsset.url,
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
            ПОРТФОЛИО
          </div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Избранные{" "}
            <span className="italic text-[#d4ff3f] [text-shadow:0_0_40px_rgba(212,255,63,0.35)]">
              проекты
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Подборка продуктов и интерфейсов, созданных с помощью ИИ, на скорости и с вниманием к деталям.
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#d4ff3f]/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(212,255,63,0.08)] md:flex-row"
            >
              {/* preview image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-black/20 md:aspect-auto md:w-5/12 md:border-b-0 md:border-r">
                <img
                  src={project.image}
                  alt={`Превью проекта ${project.title}`}
                  width={1024}
                  height={576}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl font-medium">{project.title}</h3>
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-[#d4ff3f]/30 group-hover:text-[#d4ff3f]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  {project.description}
                </p>

                {/* tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs tracking-wide text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
