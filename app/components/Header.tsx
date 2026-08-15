export default function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight">
          NYLOX<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#sobre" className="transition hover:text-white">
            Sobre
          </a>

          <a href="#tecnologias" className="transition hover:text-white">
            Tecnologias
          </a>

          <a href="#projetos" className="transition hover:text-white">
            Projetos
          </a>

          <a href="#contato" className="transition hover:text-white">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  );
}
