const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "APIs",
  "Git & GitHub",
];

export default function TechStack() {
  return (
<section id="tecnologias" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Tecnologias
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ferramentas que utilizo
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm font-medium text-zinc-300 transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
