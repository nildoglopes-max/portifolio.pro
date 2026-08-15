import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FolderGit2,
  Mail,
  UserRound,
} from "lucide-react";

const navigation = [
  {
    label: "Sobre",
    href: "#sobre",
    icon: UserRound,
  },
  {
    label: "Tecnologias",
    href: "#tecnologias",
    icon: Code2,
  },
  {
    label: "Projetos",
    href: "#projetos",
    icon: FolderGit2,
  },
  {
    label: "Contato",
    href: "#contato",
    icon: Mail,
  },
];

export default function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight"
          aria-label="Nylox - início"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
            <BriefcaseBusiness size={18} strokeWidth={1.8} />
          </span>

          <span>
            NYLOX<span className="text-blue-500">.</span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 text-sm text-zinc-400 md:flex"
          aria-label="Navegação principal"
        >
          {navigation.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-2 transition hover:text-white"
            >
              <Icon
                size={15}
                strokeWidth={1.8}
                className="text-zinc-600 transition group-hover:text-blue-400"
              />
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200"
        >
          Vamos conversar
          <ArrowUpRight
            size={16}
            strokeWidth={2}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </header>
  );
}
