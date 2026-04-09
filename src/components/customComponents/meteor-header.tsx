import { motion } from "framer-motion"
import { SparklesText } from "../ui/sparkles-text"
import { Particles } from "../ui/particles"

export function MeteorHeader() {
  return (
    <div className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="pointer-events-none bg-clip-text text-center leading-none font-semibold whitespace-pre-wrap">
        <div className="flex h-auto w-auto items-start gap-2 border-b bg-card p-4">
          <SparklesText>
            <p className="text-4xl">
              <span className="text-[#9E7AFF]">{`< `}</span>
              Fredrik.Codes
              <span className="text-[#FE8BBB]">{` />`}</span>
            </p>
          </SparklesText>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L6 13M12 19L18 13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  )
}
