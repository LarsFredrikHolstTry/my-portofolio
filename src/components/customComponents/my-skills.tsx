import { useState, type ComponentType } from "react"
import {
  SiBitbucket,
  SiCss,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTypescript,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { OrbitingCircles } from "../ui/orbiting-circles"
import { Particles } from "../ui/particles"

type SkillItem = {
  name: string
  category: string
  description: string
  Icon: ComponentType<{ className?: string }>
}

const outerSkills: SkillItem[] = [
  {
    name: "JavaScript",
    category: "Språk",
    description: "Bruker det til å lage interaktive løsninger og få ting til å føles levende i nettleseren.",
    Icon: SiJavascript,
  },
  {
    name: "HTML5",
    category: "Markup",
    description: "Setter opp en ryddig og semantisk struktur som gjør sidene enklere å jobbe videre med.",
    Icon: SiHtml5,
  },
  {
    name: "CSS3",
    category: "Styling",
    description: "Former utseendet med fokus på detaljer, animasjoner og responsive løsninger.",
    Icon: SiCss,
  },
  {
    name: "React",
    category: "Frontend",
    description: "Bygger moderne grensesnitt med komponenter som er enkle å gjenbruke og videreutvikle.",
    Icon: SiReact,
  },
  {
    name: "TypeScript",
    category: "Språk",
    description: "Gir meg bedre kontroll på koden og hjelper med å unngå småfeil før de oppstår.",
    Icon: SiTypescript,
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "Bruker det til å lage raske og skalerbare webapper med god struktur.",
    Icon: SiNextdotjs,
  },
  {
    name: "PHP",
    category: "Backend",
    description: "Jobber med backend-logikk og kobling mot databaser i klassiske webprosjekter.",
    Icon: SiPhp,
  },
];

const innerSkills: SkillItem[] = [
  {
    name: "Laravel",
    category: "Framework",
    description: "Gjør det enkelt å sette opp solide backend-løsninger uten å starte fra scratch.",
    Icon: SiLaravel,
  },
  {
    name: "MySQL",
    category: "Database",
    description: "Bruker det til å lagre og hente data på en strukturert og pålitelig måte.",
    Icon: SiMysql,
  },
  {
    name: "Bitbucket",
    category: "Verktoy",
    description: "Brukes til samarbeid og kodegjennomgang i teamprosjekter.",
    Icon: SiBitbucket,
  },
  {
    name: "GitHub",
    category: "Verktoy",
    description: "Holder prosjekter organisert med issues, pull requests og versjonskontroll.",
    Icon: SiGithub,
  },
  {
    name: "Git",
    category: "Versjonskontroll",
    description: "Gir full kontroll på endringer og gjør det trygt å eksperimentere med kode.",
    Icon: SiGit,
  },
  {
    name: "VS Code",
    category: "Editor",
    description: "Foretrukket editor med gode verktøy for debugging og effektiv utvikling.",
    Icon: VscVscode,
  },
];

function SkillBadge({
  skill,
  active,
  onActivate,
  onDeactivate,
}: {
  skill: SkillItem
  active: boolean
  onActivate: (skill: SkillItem) => void
  onDeactivate: () => void
}) {
  const { Icon } = skill

  return (
    <button
      type="button"
      aria-label={skill.name}
      aria-pressed={active}
      onMouseEnter={() => onActivate(skill)}
      onFocus={() => onActivate(skill)}
      onMouseLeave={onDeactivate}
      onBlur={onDeactivate}
      className="group relative flex h-full w-full items-center justify-center rounded-full border border-transparent bg-white/10 text-white transition duration-300 hover:scale-110 hover:border-amber-300/60 focus-visible:scale-110 focus-visible:border-amber-300/60 focus-visible:bg-white/20 focus-visible:outline-none"
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.28),transparent_70%)] opacity-0 blur-md transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <Icon className="relative z-10 h-10 w-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] md:h-12 md:w-12" />
    </button>
  )
}

export function MySkills() {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null)
  const isPaused = activeSkill !== null

  return (
    <section
      className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-white"
      onMouseLeave={() => setActiveSkill(null)}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className="pointer-events-none relative z-10 mb-10 max-w-xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-amber-200/80">Kompetanse</p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Dette kan jeg</h2>
        <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
          Hold pekeren over en teknologi for a stoppe bevegelsen og se hva jeg bruker den til.
        </p>
      </div>

      <div className="relative z-10 flex h-[42rem] w-full max-w-5xl items-center justify-center">
        <div className="pointer-events-none absolute h-44 w-44 rounded-full " />
        <div
          className={`pointer-events-none absolute z-20 w-full max-w-sm rounded-[2rem] bg-black/100 p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 ${
            activeSkill
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-0 scale-0 opacity-0"
          }`}
        >
          {activeSkill ? (
            <>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
                {activeSkill.category}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white">{activeSkill.name}</h3>
              <p className="mt-4 text-sm leading-6 text-white/75">{activeSkill.description}</p>
            </>
          ) : null}
        </div>

        <OrbitingCircles radius={250} iconSize={88} speed={0.4} paused={isPaused}>
          {outerSkills.map((skill) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              active={activeSkill?.name === skill.name}
              onActivate={setActiveSkill}
              onDeactivate={() => setActiveSkill(null)}
            />
          ))}
      </OrbitingCircles>

        <OrbitingCircles radius={150} reverse speed={0.3} iconSize={72} paused={isPaused}>
          {innerSkills.map((skill) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              active={activeSkill?.name === skill.name}
              onActivate={setActiveSkill}
              onDeactivate={() => setActiveSkill(null)}
            />
          ))}
        </OrbitingCircles>
      </div>
    </section>
  )
}
