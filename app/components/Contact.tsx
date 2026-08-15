export default function Contact() {
  return (
<section id="contato" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contato
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Vamos construir algo juntos?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Estou aberto a oportunidades profissionais, projetos freelance,
            parcerias e colaborações em projetos de tecnologia.
          </p>

          <a
            href="mailto:nildoglopes@gmail.com"
            className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            nildoglopes@gmail.com
          </a>

          <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-500">
            <a
              href="https://github.com/nildoglopes-max"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <span>•</span>
            <span>Goiânia, GO</span>
          </div>
        </div>
      </section>
  );
}
