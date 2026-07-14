import { ArrowRight, Sparkles, Zap, Code2, Rocket, Activity } from "lucide-react";

function scrollToSection(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4ff3f 1px, transparent 1px), linear-gradient(to bottom, #d4ff3f 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* neon glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#d4ff3f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d4ff3f]/5 blur-[140px]" />

      {/* nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2 text-sm tracking-widest text-white/60">
          <span className="inline-block h-2 w-2 rounded-full bg-[#d4ff3f] shadow-[0_0_12px_#d4ff3f]" />
          MENU
        </div>
        <div className="flex items-center gap-2 font-serif text-xl italic">
          <Sparkles className="h-4 w-4 text-[#d4ff3f]" />
          vibecode
        </div>
        <a
          href="#contact"
          className="text-sm text-white/70 transition hover:text-[#d4ff3f]"
        >
          Login →
        </a>
      </nav>

      {/* content grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-8 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-16">
        {/* left */}
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3f] shadow-[0_0_8px_#d4ff3f]" />
            ВАЙБКОДИНГ · PORTFOLIO
          </div>

          <h1 className="font-serif text-[2.5rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Создаю{" "}
            <span className="italic text-[#d4ff3f] [text-shadow:0_0_40px_rgba(212,255,63,0.4)]">
              AI-продукты
            </span>
            <br />
            через <span className="italic">вайбкодинг</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Быстро собираю MVP, лендинги и веб-приложения с помощью
            современных AI-инструментов.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              onClick={scrollToSection("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d4ff3f] px-7 py-3.5 text-sm font-medium text-black shadow-[0_0_40px_rgba(212,255,63,0.35)] transition hover:shadow-[0_0_60px_rgba(212,255,63,0.6)]"
            >
              Связаться
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              onClick={scrollToSection("projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d4ff3f] px-7 py-3.5 text-sm font-medium text-black shadow-[0_0_40px_rgba(212,255,63,0.35)] transition hover:shadow-[0_0_60px_rgba(212,255,63,0.6)]"
            >
              Избранные проекты
            </a>
          </div>

          {/* stats */}
          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="font-serif text-2xl text-[#d4ff3f]">40+</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
                MVP
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl text-[#d4ff3f]">7д</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
                до запуска
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl text-[#d4ff3f]">AI-first</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
                стек
              </div>
            </div>
          </div>
        </div>

        {/* right dashboard mock */}
        <div className="relative">
          {/* decorative sparkles */}
          <div className="pointer-events-none absolute -left-6 top-6 hidden lg:block">
            <SparkleStar />
          </div>
          <div className="pointer-events-none absolute -right-4 bottom-10 hidden lg:block">
            <SparkleStar />
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 shadow-[0_0_80px_rgba(212,255,63,0.08)] backdrop-blur">
            {/* header row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4ff3f]/10 text-[#d4ff3f]">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">Vibe Studio</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">
                    live · production
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4ff3f]/30 bg-[#d4ff3f]/10 px-2.5 py-1 text-[10px] font-medium text-[#d4ff3f]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4ff3f]" />
                Active
              </span>
            </div>

            {/* stat cards */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatCard
                icon={<Code2 className="h-3.5 w-3.5" />}
                label="Deploys"
                value="18.4K"
                delta="+12%"
              />
              <StatCard
                icon={<Zap className="h-3.5 w-3.5" />}
                label="AI Tokens"
                value="98%"
                delta="+6%"
              />
            </div>

            {/* pipeline */}
            <div className="mt-4 space-y-2">
              {[
                { label: "Prompt", tone: "muted" },
                { label: "AI Processing", tone: "accent" },
                { label: "Generate Code", tone: "muted" },
                { label: "Ship to Prod", tone: "accent" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-xs ${
                    s.tone === "accent"
                      ? "border-[#d4ff3f]/25 bg-[#d4ff3f]/[0.06] text-white"
                      : "border-white/10 bg-white/[0.02] text-white/70"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        s.tone === "accent"
                          ? "bg-[#d4ff3f] shadow-[0_0_8px_#d4ff3f]"
                          : "bg-white/30"
                      }`}
                    />
                    {s.label}
                  </span>
                  <ArrowRight className="h-3 w-3 opacity-40" />
                </div>
              ))}
            </div>

            {/* revenue chart */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">
                    Revenue
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif text-2xl text-white">$24.8K</span>
                    <span className="text-xs text-[#d4ff3f]">+23%</span>
                  </div>
                </div>
                <Rocket className="h-5 w-5 text-[#d4ff3f]" />
              </div>
              <svg viewBox="0 0 200 60" className="mt-3 h-16 w-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#d4ff3f" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#d4ff3f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,20 L150,24 L175,12 L200,8 L200,60 L0,60 Z"
                  fill="url(#g)"
                />
                <path
                  d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,20 L150,24 L175,12 L200,8"
                  fill="none"
                  stroke="#d4ff3f"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* logo strip */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 md:px-10">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/50 sm:grid-cols-4 lg:grid-cols-5">
          {["Epicurious", "Acme Corp", "CloudWatch", "Nietzsche", "Polymath"].map(
            (l) => (
              <div
                key={l}
                className="flex items-center justify-center gap-2 py-2 tracking-wide"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3f]/60" />
                {l}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
  delta,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-3">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/50">
        <span className="text-[#d4ff3f]">{icon}</span>
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="font-serif text-xl text-white">{value}</span>
        <span className="text-[10px] text-[#d4ff3f]">{delta}</span>
      </div>
    </div>
  );
}

function SparkleStar() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" className="opacity-80">
      <defs>
        <radialGradient id="s" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a3a3a3" stopOpacity="0.6" />
        </radialGradient>
      </defs>
      <path
        d="M21 0 L24 18 L42 21 L24 24 L21 42 L18 24 L0 21 L18 18 Z"
        fill="url(#s)"
      />
    </svg>
  );
}
