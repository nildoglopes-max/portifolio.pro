import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <Header />

      <Hero />

      <About />

      <TechStack />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
