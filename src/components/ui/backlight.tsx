import React from "react"

import { cn } from "@/lib/utils"

type BacklightProps = {
  blur?: number
  children: React.ReactElement<{ className?: string; "aria-hidden"?: boolean }>
  className?: string
}

export function Backlight({ blur = 20, children, className }: BacklightProps) {
  if (!React.isValidElement(children)) {
    return null
  }

  const childClassName = children.props.className

  const glow = React.cloneElement(children, {
    "aria-hidden": true,
    className: cn(
      childClassName,
      "pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] scale-[1.08] object-cover opacity-85 saturate-200",
      "[mask-image:radial-gradient(circle_at_center,black_30%,transparent_72%)]"
    ),
  })

  const ambientGlow = React.cloneElement(children, {
    "aria-hidden": true,
    className: cn(
      childClassName,
      "pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] scale-[1.12] object-cover opacity-55 saturate-[2.4]",
      "[mask-image:radial-gradient(circle_at_center,black_18%,transparent_78%)]"
    ),
  })

  const foreground = React.cloneElement(children, {
    className: cn(childClassName, "relative z-10 h-full w-full object-cover"),
  })

  return (
    <div className={cn("relative isolate overflow-visible", className)}>
      <div
        className="absolute inset-0 -z-10 rounded-[inherit] opacity-95 mix-blend-screen"
        style={{ filter: `blur(${blur}px)` }}
      >
        {glow}
      </div>
      <div
        className="absolute inset-0 -z-10 rounded-[inherit] opacity-80 mix-blend-screen"
        style={{ filter: `blur(${blur * 2.2}px)` }}
      >
        {ambientGlow}
      </div>
      <div className="absolute -inset-8 -z-10 rounded-[inherit] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.24),transparent_55%)] opacity-90 blur-2xl" />
      {foreground}
    </div>
  )
}