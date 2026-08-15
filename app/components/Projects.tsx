const projects = [
  {
    name: "Nylox Tech",
    description: "Portfólio pessoal e apresentação profissional.",
    url: "https://portifolio-new-pro.vercel.app",
  },
  {
    name: "IndicaNet",
    description:
      "Projeto web desenvolvido para apresentação e divulgação de serviços.",
    url: "https://indicanet.vercel.app",
  },
  {
    name: "MentoriaPDF",
    description:
      "Plataforma digital para comercialização de ebooks e produtos digitais.",
    url: "https://mentoria-pdf.vercel.app",
  },
];

export default function Projects() {
  return (
<section id="projetos" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Projetos
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos em destaque
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Nylox Tech",
                description:
                  "Portfólio pessoal e apresentação profissional.",
                url: "https://portifolio-new-pro.vercel.app",
              },
              {
                name: "IndicaNet",
                description:
                  "Projeto web desenvolvido para apresentação e divulgação de serviços.",
                url: "https://indicanet.vercel.app",
              },
              {
                name: "MentoriaPDF",
                description:
                  "Plataforma digital para comercialização de ebooks e produtos digitais.",
                url: "https://mentoria-pdf.vercel.app",
              },
            ].map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  ↗
                </div>

                <h3 className="mt-6 text-xl font-semibold">{project.name}</h3>

                <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <span className="mt-6 inline-block text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                  Visitar projeto →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
  );
}
