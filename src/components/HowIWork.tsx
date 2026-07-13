import { Search, Bot, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    id: "discover",
    number: "01",
    title: "Погружаюсь в задачу",
    description:
      "Разбираюсь в продукте, целевой аудитории и метриках успеха. Формулирую чёткое ТЗ и план работы.",
    icon: Search,
  },
  {
    id: "build",
    number: "02",
    title: "Создаю с ИИ",
    description:
      "Собираю MVP в рекордные сроки: AI помогает с кодом, дизайном и контентом, а я контролирую качество.",
    icon: Bot,
  },
  {
    id: "improve",
    number: "03",
    title: "Тестирую и улучшаю",
    description:
      "Проверяю работоспособность, производительность и UX. Дорабатываю детали, чтобы продукт был готов к запуску.",
    icon: TestTube,
  },
  {
    id: "launch",
    number: "04",
    title: "Запускаю и масштабирую",
    description:
      "Деплою, настраиваю аналитику и помогаю расти: от первых пользователей до стабильного трафика.",
    icon: Rocket,
  },
];

export function HowIWork() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4ff3f 1px, transparent 1px), linear-gradient(to bottom, #d4ff3f 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#d4ff3f]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3f] shadow-[0_0_8px_#d4ff3f]" />
            PROCESS
          </div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Как я{" "}
            <span className="italic text-[#d4ff3f] [text-shadow:0_0_40px_rgba(212,255,63,0.35)]">
              работаю
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Четыре этапа от идеи до запущенного продукта — быстро, прозрачно и с фокусом на результат.
          </p>
        </div>

        {/* desktop timeline */}
        <div className="relative hidden lg:block">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-[2.75rem] h-px bg-white/10" />
          <div className="absolute left-[12.5%] right-[12.5%] top-[2.75rem] h-px bg-gradient-to-r from-transparent via-[#d4ff3f]/40 to-transparent" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.id}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* step number / node */}
                  <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] text-[#d4ff3f] shadow-[0_0_24px_rgba(212,255,63,0.1)] transition duration-300 group-hover:scale-110 group-hover:border-[#d4ff3f]/30 group-hover:shadow-[0_0_36px_rgba(212,255,63,0.25)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* card */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#d4ff3f]/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(212,255,63,0.08)]">
                    <div className="mb-3 font-serif text-3xl italic text-[#d4ff3f]/80 transition group-hover:text-[#d4ff3f]">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-lg font-medium">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* mobile / tablet vertical timeline */}
        <div className="relative lg:hidden">
          {/* vertical line */}
          <div className="absolute left-7 top-4 bottom-4 w-px bg-white/10" />
          <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#d4ff3f]/40 to-transparent" />

          <div className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.id}
                  className="group relative flex gap-5"
                >
                  {/* node */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] text-[#d4ff3f] shadow-[0_0_24px_rgba(212,255,63,0.1)] transition duration-300 group-hover:scale-110 group-hover:border-[#d4ff3f]/30 group-hover:shadow-[0_0_36px_rgba(212,255,63,0.25)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* card */}
                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#d4ff3f]/30 hover:bg-white/[0.05]">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-serif text-2xl italic text-[#d4ff3f]/80 transition group-hover:text-[#d4ff3f]">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-lg font-medium">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
