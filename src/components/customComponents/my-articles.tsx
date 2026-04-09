import { Backlight } from "../ui/backlight"

const featuredArticle = {
  title: "Veldig glad for at jeg ikke ga opp da det stormet som verst",
  image:
    "https://image-www.kode24.no/260317.webp?imageId=260317&width=1972&height=1126&format=webp",
  url: "https://www.kode24.no/artikkel/veldig-glad-for-at-jeg-ikke-ga-opp-da-det-stormet-som-verst/260308",
}

export function MyArticles() {
  return (
    <section className="relative w-full overflow-visible px-6 py-24 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-amber-200/80">Artikler</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Media og omtale</h2>
          <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
            Et utvalg artikler som omtaler reisen min
          </p>
        </div>

        <a
          href={featuredArticle.url}
          target="_blank"
          rel="noreferrer"
          className="group grid overflow-visible rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/8 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="overflow-visible p-4 md:p-5 md:pr-0">
            <Backlight className="rounded-[1.6rem]" blur={46}>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full max-h-[26rem] w-full rounded-[1.6rem] transition duration-500 group-hover:scale-[1.03]"
              />
            </Backlight>
          </div>

          <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">kode24</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-4xl">
                {featuredArticle.title}
              </h3>
            </div>

            <span className="text-sm uppercase tracking-[0.25em] text-white/60 transition duration-300 group-hover:text-white">
              Les artikkelen
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}