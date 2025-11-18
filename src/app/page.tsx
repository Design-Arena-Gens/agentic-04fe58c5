import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#040614] pb-12 text-sky-50">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(105,49,255,0.28),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(109,246,220,0.18),_transparent_50%)]" />
      <main className="z-10 flex w-full max-w-5xl flex-1 flex-col items-center gap-16 px-6 py-24">
        <header className="flex w-full flex-col items-center gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <Logo className="scale-90 md:scale-100" />
          <div className="flex flex-col gap-4 text-sky-100/80 md:max-w-sm md:text-right">
            <p className="text-lg leading-relaxed">
              A distilled identity for LyftrAi — inspired by upward momentum and
              precision AI guidance from{" "}
              <Link
                href="https://lyftr.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-100 underline decoration-sky-300/60 decoration-2 underline-offset-4 transition hover:text-white"
              >
                lyftr.ai
              </Link>
              .
            </p>
            <Link
              href="/lyftr-logo.svg"
              download
              className="inline-flex items-center justify-center self-center rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-50 transition hover:bg-white/20 md:self-end"
            >
              Download SVG
            </Link>
          </div>
        </header>

        <section className="grid w-full gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-xl ring-1 ring-white/10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6931FF] via-[#826BFF] to-[#6DF6DC]" />
            <Logo showWordmark={false} className="scale-110" />
            <p className="mt-8 text-sm leading-relaxed text-sky-100/70">
              The logomark combines a sturdy base column with an ascending
              chevron, forming a simplified lift icon that nods to elevated
              experiences and trustworthy automation.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-5">
              <span className="text-xs uppercase tracking-[0.45em] text-sky-100/60">
                Palette
              </span>
              <div className="flex items-center gap-2">
                <span className="h-9 w-9 rounded-full bg-[#6931FF]" />
                <span className="h-9 w-9 rounded-full bg-[#826BFF]" />
                <span className="h-9 w-9 rounded-full bg-[#6DF6DC]" />
                <span className="h-9 w-9 rounded-full border border-white/10 bg-white/80" />
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xs uppercase tracking-[0.4em] text-sky-100/60">
                Usage
              </h2>
              <p className="text-sm leading-relaxed text-sky-100/70">
                Scale the emblem cleanly for app icons, marketing badges, or
                partner placements. Pair the wordmark with the logomark on brand
                surfaces requiring stronger presence.
              </p>
              <div className="flex flex-wrap gap-4 rounded-2xl bg-black/30 p-6">
                <div className="flex flex-1 flex-col items-center gap-4 rounded-xl bg-white/5 p-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-sky-100/60">
                    Dark
                  </span>
                  <div className="rounded-2xl bg-[#05070F] p-6">
                    <Logo showWordmark={false} className="scale-90" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center gap-4 rounded-xl bg-white p-4 text-slate-900">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Light
                  </span>
                  <div className="rounded-2xl border border-slate-200 p-6">
                    <Logo className="scale-90" theme="light" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex w-full flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-sm text-sky-100/70 md:flex-row">
          <span>LyftrAi Minimal Brand Mark · 2024</span>
          <span className="text-sky-100/50">
            Crafted for digital-first experiences and AI storytelling.
          </span>
        </footer>
      </main>
    </div>
  );
}
