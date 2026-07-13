import { Mail, Send } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4ff3f 1px, transparent 1px), linear-gradient(to bottom, #d4ff3f 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d4ff3f]/5 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#d4ff3f]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff3f] shadow-[0_0_8px_#d4ff3f]" />
          CONTACT
        </div>

        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Готовы{" "}
          <span className="italic text-[#d4ff3f] [text-shadow:0_0_40px_rgba(212,255,63,0.35)]">
            начать проект?
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
          Напишите мне и мы обсудим проект
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://t.me/irina_a_kamneva"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d4ff3f]/30 bg-[#d4ff3f]/10 px-8 py-3.5 text-sm font-medium text-[#d4ff3f] transition duration-300 hover:bg-[#d4ff3f] hover:text-[#0a0a0a] hover:shadow-[0_0_40px_rgba(212,255,63,0.25)] sm:w-auto"
          >
            <Send className="h-4 w-4 transition group-hover:scale-110" />
            Telegram
          </a>

          <a
            href="mailto:irina.a.kamneva@gmail.com"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white/90 transition duration-300 hover:border-[#d4ff3f]/30 hover:bg-white/[0.05] hover:text-[#d4ff3f] sm:w-auto"
          >
            <Mail className="h-4 w-4 transition group-hover:scale-110" />
            Написать на email
          </a>
        </div>
      </div>
    </section>
  );
}
