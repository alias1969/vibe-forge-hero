import { Bot, Palette, Plug, Rocket } from "lucide-react";

const services = [
  {
    id: "mvp-week",
    title: "MVP за неделю",
    description:
      "Превращаю идею в работающий продукт за 7 дней: от прототипа до деплоя. Использую AI-инструменты, чтобы ускорить разработку без потери качества.",
    result: "Готовый продукт, который можно показать инвесторам и пользователям.",
    icon: Rocket,
  },
  {
    id: "ai-automation",
    title: "AI-автоматизация",
    description:
      "Создаю AI-агентов и автоматизирую рутинные процессы: от обработки заявок до генерации контента. Интегрирую LLM в ваши рабочие инструменты.",
    result: "Экономия времени команды и рост скорости обработки задач.",
    icon: Bot,
  },
  {
    id: "uiux-vibecoding",
    title: "UI/UX с вайбкодингом",
    description:
      "Проектирую современные интерфейсы и быстро верстаю их с помощью AI. Получается чистый, отзывчивый дизайн, который приятно использовать.",
    result: "Привлекательный интерфейс, который повышает конверсию.",
    icon: Palette,
  },
  {
    id: "integrations",
    title: "Интеграции",
    description:
      "Соединяю сервисы, API и базы данных в единую экосистему. Настраиваю обмен данными между вашими приложениями и сторонними платформами.",
    result: "Бесшовный поток данных и работающий цифровой пайплайн.",
    icon: Plug,
  },
];

export function WhatIDo() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4ff3f 1px, transparent 1px), linear-gradient(to bottom, #d4ff3f 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d4ff3f]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3f] shadow-[0_0_8px_#d4ff3f]" />
            SERVICES
          </div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Что я{" "}
            <span className="italic text-[#d4ff3f] [text-shadow:0_0_40px_rgba(212,255,63,0.35)]">
              делаю
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Четыре направления, в которых помогаю запускать и развивать цифровые продукты.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#d4ff3f]/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(212,255,63,0.08)]"
              >
                {/* icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4ff3f]/20 bg-[#d4ff3f]/10 text-[#d4ff3f] shadow-[0_0_24px_rgba(212,255,63,0.12)] transition group-hover:scale-105 group-hover:shadow-[0_0_36px_rgba(212,255,63,0.22)]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* content */}
                <h3 className="font-serif text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>

                {/* key result */}
                <div className="mt-auto border-t border-white/10 pt-5">
                  <div className="text-[11px] uppercase tracking-widest text-white/40">
                    Результат
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-[#d4ff3f]">
                    {service.result}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
