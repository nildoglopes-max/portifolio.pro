"use client";

import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-8">
      <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Disponível para oportunidades
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400"
          >
            Desenvolvedor Full Stack
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Nildo G.
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Lopes
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
          >
            Desenvolvo aplicações web modernas, APIs, integrações e sistemas
            completos — do frontend ao banco de dados e deploy.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#projetos"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Ver meus projetos
            </motion.a>

            <motion.a
              href="#contato"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
            >
              Entrar em contato
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-500"
          >
            <span>📍 Goiânia, GO</span>
            <span>💻 Full Stack</span>
            <span>🚀 Projetos reais</span>
          </motion.div>
        </motion.div>

        {/* Code card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#0b1020]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-zinc-500">
                  nildo.config.ts
                </span>
              </div>

              <pre className="overflow-hidden font-mono text-sm leading-7">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-cyan-300">name</span>:{" "}
                  <span className="text-green-300">&quot;Nildo Lopes&quot;</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-cyan-300">role</span>:{" "}
                  <span className="text-green-300">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-cyan-300">focus</span>: [
                  {"\n"}
                  {"    "}
                  <span className="text-green-300">&quot;Web&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-green-300">&quot;APIs&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-green-300">&quot;Automation&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-green-300">
                    &quot;Integrations&quot;
                  </span>
                  {"\n"}
                  {"  "}],
                  {"\n"}
                  {"  "}
                  <span className="text-cyan-300">available</span>:{" "}
                  <span className="text-orange-300">true</span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>

              <div className="mt-6 rounded-xl border border-blue-500/10 bg-blue-500/5 p-4">
                <p className="text-xs uppercase tracking-widest text-blue-400">
                  Stack principal
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  Next.js · TypeScript · Node.js · PostgreSQL
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
