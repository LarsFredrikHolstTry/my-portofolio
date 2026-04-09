"use client"
import { Particles } from "../ui/particles"

export function MyUniverse() {
  const color = "#ffffff"

  return (
    <div className="pointer-events-none relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="flex flex-col items-center gap-5">
        <p className="text-5xl">🌍</p>
        <div className="flex flex-col items-center gap-2">
          <span className="pointer-events-none z-10 text-center text-4xl leading-none font-semibold whitespace-pre-wrap">
            Velkommen til mitt univers!
          </span>
          <p className="text-sm text-muted-foreground">
            På denne nettsiden vil du se mine skills, prosjekter, erfaringer og
            mer!
          </p>
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
