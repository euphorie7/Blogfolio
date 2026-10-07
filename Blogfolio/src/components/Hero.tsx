import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-5 text-lg font-medium text-zinc-500">
          Hi, I'm Naoufal.
        </p>

        <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          Software Engineer.
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-purple-500 bg-clip-text text-transparent">
            I build things that scale.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
          Backend & Full-Stack engineer building modern applications,
          microservices and event-driven systems.
        </p>

        <p className="mt-5 text-sm font-medium text-zinc-400">
          Java · Spring Boot · Node.js · NestJS · React · Kafka
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Explore my work →
          </Link>

          <a
            href="https://github.com/euphorie7"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium shadow-sm backdrop-blur-xl transition hover:bg-white"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}