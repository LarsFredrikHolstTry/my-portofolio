import { Backlight } from "../ui/backlight"

const educationItems = [
  {
    school: "Universitetet i Agder (UiA)",
    shortName: "UiA",
    logo: "/img/uia.jpeg",
    degree: "Bachelor i Multimedieteknologi og design",
    period: "2018 - 2021",
  },
  {
    school: "Universitetet i Oslo (UiO)",
    shortName: "UiO",
    logo: "/img/uio.png",
    degree: "Ett-års studium innen design, bruk og interaksjon",
    period: "2016 - 2017",
  },
]

export function MyEducation() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24 text-white">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm tracking-[0.4em] text-amber-200/80 uppercase">
            Utdanning
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Det jeg har studert
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
            Studier innen design, interaksjon og digitale opplevelser.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {educationItems.map((item) => (
            <article
              key={`${item.school}-${item.period}`}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/40"
            >
              <div className="flex items-start gap-5">
                <Backlight className="h-14 w-14 shrink-0 rounded-2xl" blur={30}>
                  <img
                    src={item.logo}
                    alt={`${item.school} logo`}
                    className="rounded-2xl border border-white/10 bg-white object-contain"
                  />
                </Backlight>

                <div className="min-w-0">
                  <p className="text-xs tracking-[0.35em] text-amber-200/80 uppercase">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-semibold text-white md:text-3xl">
                    {item.school}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
                    {item.degree}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
