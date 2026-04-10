import { Backlight } from "../ui/backlight"

const projects = [
  {
    name: "Mafioso.no",
    label: "Første prosjekt",
    year: "Siden 2019",
    description:
      "Et tekstbasert mafiaspill jeg bygget for å lære koding, fra backend og database til frontend, design og brukeropplevelse",
    highlights: ["Tekstbasert mafiaspill", "PHP og MySQL"],
    image: "/img/mafioso.png",
    url: "https://mafioso.no/",
  },
  // {
  //   name: "Sydtakst.no",
  //   label: "Landingsside",
  //   year: "2026",
  //   description: "En landingsside for et takstfirma",
  //   highlights: ["Landingsside", "Tailwind CSS"],
  //   image: "/img/sydtakst.png",
  //   url: "https://sydtakst.no/",
  // },
]

export function MyProjects() {
  return (
    <section className="relative w-full overflow-visible px-6 py-24 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm tracking-[0.4em] text-amber-200/80 uppercase">
            Prosjekter
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Ting jeg har bygget
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
            Prosjekter som viser hva jeg liker å bygge og hvordan jeg jobber fra
            idé til ferdig løsning.
          </p>
        </div>

        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group grid overflow-visible rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/8 md:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="overflow-visible p-4 md:p-5">
              <Backlight className="rounded-[1.6rem]" blur={42}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full max-h-[32rem] w-full rounded-[1.6rem] bg-[#101010] object-contain transition duration-500 group-hover:scale-[1.03]"
                />
              </Backlight>
            </div>

            <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.35em] text-amber-200/80 uppercase">
                  <span>{project.label}</span>
                  <span className="h-1 w-1 rounded-full bg-amber-200/60" />
                  <span>{project.year}</span>
                </div>

                <h3 className="mt-5 text-3xl leading-tight font-semibold text-white md:text-5xl">
                  {project.name}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.24em] text-white/70 uppercase"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <span className="text-sm tracking-[0.25em] text-white/60 uppercase transition duration-300 group-hover:text-white">
                Besøk prosjektet
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
