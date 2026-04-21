import { Backlight } from "../ui/backlight"

const experiences = [
  {
    role: "Frontend-utvikler",
    company: "Avitell Elektro",
    logo: "/img/avitell_logo.jpeg",
    employmentType: "Heltid",
    period: "aug. 2025 - Nåtid",
    duration: "9 mnd",
    location: "Kristiansand, Agder, Norge",
    setup: "Lokalt",
    description:
      "Frontend utvikler på Alphacloud. Alphacloud er en applikasjon hvor kunder kan styre sitt eget SD-anlegg.",
    skills: ["TypeScript", "Next.js", "Frontend"],
  },
  {
    role: "Software utvikler",
    company: "Keystone.no",
    logo: "/img/keystone_logo.jpeg",
    employmentType: "Heltid",
    period: "nov. 2021 - jul. 2025",
    duration: "3 år 9 mnd",
    location: "Kristiansand, Agder, Norge",
    description: "Software utvikler. Utvikler i React, TypeScript og Laravel.",
    skills: ["React", "TypeScript", "Laravel", "JavaScript", "HTML5"],
  },
]

export function MyExperience() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24 text-white">
      <div className="absolute inset-x-0 top-8 h-64 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm tracking-[0.4em] text-amber-200/80 uppercase">
            Erfaring
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Hvor jeg har jobbet
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
            Erfaring fra produktutvikling, frontend og fullstack-arbeid i team.
          </p>
        </div>

        <div className="relative grid gap-6">
          <div className="absolute top-0 left-6 hidden h-full w-px bg-gradient-to-b from-amber-200/50 via-white/15 to-transparent md:block" />

          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="relative grid gap-4 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 md:grid-cols-[auto_1fr]"
            >
              <div className="relative md:pl-14">
                <Backlight className="h-14 w-14 rounded-2xl" blur={30}>
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="rounded-2xl border border-white/10 bg-white object-contain"
                  />
                </Backlight>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.35em] text-amber-200/80 uppercase">
                      <span>{experience.company}</span>
                      <span className="h-1 w-1 rounded-full bg-amber-200/60" />
                      <span>{experience.employmentType}</span>
                    </div>

                    <h3 className="mt-4 text-3xl leading-tight font-semibold text-white md:text-4xl">
                      {experience.role}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
                    <p>{experience.period}</p>
                    <p className="mt-1 tracking-[0.25em] text-white/45 uppercase">
                      {experience.duration}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-white/60">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {experience.location}
                  </span>
                  {experience.setup ? (
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                      {experience.setup}
                    </span>
                  ) : null}
                </div>

                <p className="max-w-3xl text-sm leading-7 text-white/75 md:text-base">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.24em] text-white/70 uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
