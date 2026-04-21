import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa"

const contactItems = [
  {
    label: "E-post",
    value: "Lars.Fr.97@hotmail.com",
    href: "mailto:Lars.Fr.97@hotmail.com",
    Icon: FaEnvelope,
  },
  {
    label: "Telefon",
    value: "46896995",
    href: "tel:46896995",
    Icon: FaPhoneAlt,
  },
  {
    label: "GitHub",
    value: "LarsFredrikHolstTry",
    href: "https://github.com/LarsFredrikHolstTry",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "lars-fredrik-holst-try",
    href: "https://www.linkedin.com/in/lars-fredrik-holst-try",
    Icon: FaLinkedin,
  },
]

export function MyContact() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 text-white">
      <div className="absolute inset-x-0 bottom-0 h-56 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm tracking-[0.4em] text-amber-200/80 uppercase">
            Kontakt
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Ta gjerne kontakt
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
            Om du vil samarbeide eller bare vil si hei
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.Icon

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-200/10 text-amber-100">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] text-white/50 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-white/80 transition duration-300 group-hover:text-white md:text-base">
                    {item.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
