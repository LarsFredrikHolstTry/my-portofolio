"use client"

import { Backlight } from "../ui/backlight"

const focusAreas = ["Frontend", "Backend", "Fullstack", "UI/UX"]

export function MyUniverse() {
  return (
    <section className="relative isolate flex min-h-svh w-full items-center overflow-hidden px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_62%)] blur-3xl" />
      <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-2xl" />
      <div className="absolute right-[10%] top-[26%] h-32 w-32 rounded-full border border-amber-200/10 bg-amber-200/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-200/85 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(252,211,77,0.8)]" />
            Lars Fredrik Holst-Try
          </div>

          <div className="space-y-5">
            <Backlight className="w-fit rounded-[2rem]" blur={36}>
              <div className="flex h-24 w-24 items-center justify-center text-6xl leading-none md:text-7xl">
                <span aria-hidden="true">🌍</span>
              </div>
            </Backlight>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-balance md:text-7xl">
              Velkommen til mitt univers
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Her finner du info om meg, prosjektene mine og teknologiene jeg liker å jobbe med!
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur-md"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
